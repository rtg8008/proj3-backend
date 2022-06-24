/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('subcategory', table => {
    table.increments();
    table.string('name', 500);
    table.integer('category_id');
    table.foreign('category_id').references('category.id');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('subcategory', table => {
    table.dropForeign('category_id');
  })
  .then(() => {
    return knex.schema.dropTableIfExists('subcategory')});
};
