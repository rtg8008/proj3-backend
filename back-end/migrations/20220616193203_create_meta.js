/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('meta', table => {
    table.increments();
    table.integer('phase', 2);
    table.integer('quantity', 6);
    table.float('location_long', 20);
    table.float('location_lat', 20);

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('meta');
};
