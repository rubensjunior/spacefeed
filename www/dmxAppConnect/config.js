dmx.config({
  "home": {
    "sessionStorage": [
      {
        "type": "text",
        "name": "new"
      }
    ],
    "usersession": [
      {
        "type": "number",
        "name": "new"
      }
    ],
    "auth": {
      "meta": {},
      "local": [
        {
          "sub": [
            {
              "name": "",
              "type": "object",
              "metaData": {
                "setValueExpression": {
                  "meta": [],
                  "outputType": "text"
                }
              }
            }
          ],
          "name": "",
          "type": "boolean",
          "metaData": {
            "condition": {
              "meta": null,
              "outputType": "number"
            }
          }
        }
      ]
    },
    "login": {
      "meta": [
        {
          "sub": [
            {
              "name": "data",
              "type": "object",
              "sub": [
                {
                  "name": "identity",
                  "type": "text",
                  "sub": []
                }
              ]
            },
            {
              "name": "state",
              "type": "object",
              "sub": [
                {
                  "name": "executing",
                  "type": "boolean"
                },
                {
                  "name": "uploading",
                  "type": "boolean"
                },
                {
                  "name": "processing",
                  "type": "boolean"
                },
                {
                  "name": "downloading",
                  "type": "boolean"
                }
              ]
            },
            {
              "name": "uploadProgress",
              "type": "object",
              "sub": [
                {
                  "name": "position",
                  "type": "number"
                },
                {
                  "name": "total",
                  "type": "number"
                },
                {
                  "name": "percent",
                  "type": "number"
                }
              ]
            },
            {
              "name": "downloadProgress",
              "type": "object",
              "sub": [
                {
                  "name": "position",
                  "type": "number"
                },
                {
                  "name": "total",
                  "type": "number"
                },
                {
                  "name": "percent",
                  "type": "number"
                }
              ]
            },
            {
              "name": "lastError",
              "type": "object",
              "sub": [
                {
                  "name": "status",
                  "type": "number"
                },
                {
                  "name": "message",
                  "type": "text"
                },
                {
                  "name": "response",
                  "type": "text"
                }
              ]
            },
            {
              "name": "status",
              "type": "number"
            }
          ],
          "name": "login",
          "type": "object"
        }
      ],
      "local": {}
    },
    "localStorage": [
      {
        "type": "number",
        "name": "id"
      },
      {
        "type": "text",
        "name": "session"
      }
    ]
  },
  "index": {
    "localStorage": [
      {
        "type": "number",
        "name": "id"
      }
    ],
    "detectar-usuario": {
      "meta": {},
      "local": [
        {
          "name": "",
          "type": "boolean",
          "metaData": {
            "condition": {
              "meta": null,
              "outputType": "number"
            }
          }
        }
      ]
    },
    "detectarusuario": {
      "meta": {},
      "local": [
        {
          "type": "boolean",
          "metaData": {
            "condition": {
              "meta": null,
              "outputType": "number"
            }
          }
        }
      ]
    },
    "verificar": {
      "meta": {},
      "local": [
        {
          "name": "",
          "type": "boolean",
          "metaData": {
            "condition": {
              "meta": null,
              "outputType": "number"
            }
          }
        }
      ]
    }
  },
  "conteudo": {
    "localStorage": [
      {
        "type": "number",
        "name": "id"
      }
    ]
  },
  "dashboard": {
    "localStorage": [
      {
        "type": "number",
        "name": "id"
      }
    ]
  }
});
