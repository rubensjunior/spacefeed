exports.up = function(knex) {
    return knex.schema.table('empresas', function(table) {
        // Primeiro vamos adicionar os novos campos
        table.text('logradouro');
        table.text('numero');
        table.text('complemento');
        table.text('bairro');
        table.text('cidade');
        table.text('uf');
    }).then(function() {
        // Em uma migração futura, poderíamos remover a coluna 'endereco'
        // após migrar os dados existentes
        // return knex.schema.table('empresas', table => {
        //     table.dropColumn('endereco');
        // });
    });
};

exports.down = function(knex) {
    return knex.schema.table('empresas', function(table) {
        // Remover os campos adicionados
        table.dropColumn('logradouro');
        table.dropColumn('numero');
        table.dropColumn('complemento');
        table.dropColumn('bairro');
        table.dropColumn('cidade');
        table.dropColumn('uf');
    });
};