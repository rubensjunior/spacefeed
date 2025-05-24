exports.up = function(knex) {
    return knex.schema.table('usuarios', function(table) {
        // Adicionar o campo nome_tratamento
        table.text('nome_tratamento');
    });
};

exports.down = function(knex) {
    return knex.schema.table('usuarios', function(table) {
        // Remover o campo em caso de rollback
        table.dropColumn('nome_tratamento');
    });
};