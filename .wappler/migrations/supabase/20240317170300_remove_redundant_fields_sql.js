exports.up = function(knex) {
    return knex.raw('ALTER TABLE usuarios DROP COLUMN IF EXISTS apelido;')
        .then(function() {
            return knex.raw('ALTER TABLE empresas DROP COLUMN IF EXISTS endereco;');
        });
};

exports.down = function(knex) {
    return knex.raw('ALTER TABLE usuarios ADD COLUMN IF NOT EXISTS apelido text;')
        .then(function() {
            return knex.raw('ALTER TABLE empresas ADD COLUMN IF NOT EXISTS endereco text;');
        });
};