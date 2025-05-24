exports.up = function(knex) {
    return knex.schema
        .alterTable('empresas', function(table) {
            table.dropColumn('endereco');
        });
};

exports.down = function(knex) {
    return knex.schema
        .alterTable('empresas', function(table) {
            table.text('endereco');
        });
};