/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    
    return knex.schema.createTable('users', function(table){

        table.increments('id').primary();

        table.string('name').notNullable();
        table.integer('score');

    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    
    return knex.schema.dropTable('users');
};