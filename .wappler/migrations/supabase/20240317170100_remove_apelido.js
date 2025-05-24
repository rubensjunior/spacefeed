exports.up = function(knex) {
    return knex.schema
        .alterTable('usuarios', function(table) {
            table.dropColumn('apelido');
        });
};

exports.down = function(knex) {
    return knex.schema
        .alterTable('usuarios', function(table) {
            table.text('apelido');
        });
};