const { http, https } = require('follow-redirects');
const querystring = require('querystring');
const zlib = require('zlib');
const pkg = require('../../package.json');
const HttpError = require('../errors/httpError');

module.exports = {

    send: async function(options) {
        let url = this.parseRequired(options.url, 'string', 'api.send: url is required.');
        let method = this.parseOptional(options.method, 'string', 'GET');
        let data = this.parseOptional(options.data, '*', '');
        let dataType = this.parseOptional(options.dataType, 'string', 'auto');
        let verifySSL = this.parseOptional(options.verifySSL, 'boolean', false);
        let params = this.parseOptional(options.params, 'object', null);
        let headers = this.parseOptional(options.headers, 'object', {});
        let username = this.parseOptional(options.username, 'string', '');
        let password = this.parseOptional(options.password, 'string', '');
        let oauth = this.parseOptional(options.oauth, 'string', '');
        let throwErrors = this.parseOptional(options.throwErrors, 'boolean', false);
        let passErrors = this.parseOptional(options.passErrors, 'boolean', true);
        let timeout = this.parseOptional(options.timeout, 'number', 0);

        if (params) {
            url += '?' + querystring.stringify(params);
        }

        if (dataType == 'auto' && method == 'POST') {
            dataType = 'x-www-form-urlencoded';
        }

        if (dataType != 'auto' && !headers['Content-Type']) {
            headers['Content-Type'] = `application/${dataType}`;
        }

        if (dataType == 'x-www-form-urlencoded') {
            data = querystring.stringify(data);
        } else if (typeof data != 'string') {
            data = JSON.stringify(data);
        }

        if (data) {
            headers['Content-Length'] = Buffer.byteLength(data);
        }

        const Url = new URL(url);
        const opts = { method, headers, rejectUnauthorized: !!verifySSL, maxBodyLength: 1_000_000_000 };

        if (timeout > 0) {
            opts.timeout = timeout;
        }

        if (username || password) {
            opts.auth = `${username}:${password}`;
        }

        if (oauth) {
            //const provider = this.oauth[oauth];
            const provider = await this.getOAuthProvider(oauth);
            if (provider && provider.access_token) {
                headers['Authorization'] = 'Bearer ' + provider.access_token;
            }
        }

        if (!headers['User-Agent']) headers['User-Agent'] = `${pkg.name}/${pkg.version}`;
        if (!headers['Accept']) headers['Accept'] = 'application/json';

        return new Promise((resolve, reject) => {
            const req = (Url.protocol == 'https:' ? https : http).request(Url, opts, res => {
                let body = '';

                if (res.statusCode == 204 || res.headers['content-length'] == 0) {
                    return resolve({ status: res.statusCode, headers: res.headers, data: '' });
                }

                let output = res;
                if (res.headers['content-encoding'] == 'br') {
                    output = res.pipe(zlib.createBrotliDecompress());
                }
                if (res.headers['content-encoding'] == 'gzip') {
                    output = res.pipe(zlib.createGunzip());
                }
                if (res.headers['content-encoding'] == 'deflate') {
                    output = res.pipe(zlib.createInflate());
                }

                output.setEncoding('utf8');
                output.on('data', chunk => body += chunk);
                output.on('end', () => {
                    if (passErrors && res.statusCode >= 400) {
                        if (passErrors) {
                            this.res.status(res.statusCode).send(body);
                            return resolve();
                        }
                    }

                    if (body.charCodeAt(0) === 0xFEFF) {
                        body = body.slice(1);
                    }

                    if (res.headers['content-type'] && res.headers['content-type'].includes('json')) {
                        try {
                            body = JSON.parse(body);
                        } catch(e) {
                            console.error(e);
                        }
                    }

                    if (throwErrors && res.statusCode >= 400) {
                        return reject(new HttpError({
                            url: url,
                            status: res.statusCode,
                            statusText: res.statusMessage,
                            body: body
                        }));
                    }

                    resolve({
                        status: res.statusCode,
                        headers: res.headers,
                        data: body
                    });
                });
            });

            req.on('timeout', () => {
                req.destroy(new Error(`Request timed out after ${timeout}ms`));
            
                if (throwErrors) {
                    reject(new Error(`Request timed out after ${timeout}ms`));
                } else if (passErrors) {
                    this.res.status(504).send(`Request timed out after ${timeout}ms`);
                    resolve(); 
                } else {
                    resolve({
                        status: 504,
                        data: `Request timed out after ${timeout}ms`
                    });
                }
            });

            req.on('error', reject);
            req.write(data);
            req.end();
        });
    },

};