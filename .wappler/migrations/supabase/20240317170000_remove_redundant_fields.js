exports.up = function(knex) {
    return knex.schema
        .table('usuarios', function(table) {
            table.dropColumn('apelido');
        })
        .then(function() {
            return knex.schema.table('empresas', function(table) {
                table.dropColumn('endereco');
            });
        });
};

exports.down = function(knex) {
    return knex.schema
        .table('usuarios', function(table) {
            table.text('apelido');
        })
        .then(function() {
            return knex.schema.table('empresas', function(table) {
                table.text('endereco');
            });
        });
};