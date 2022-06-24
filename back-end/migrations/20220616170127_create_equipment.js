/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('equipment', table => {
    table.increments();
    table.string('name', 256) // specifies type, field name, and limit (i.e. character limit)
    table.integer('subcategory_id');    
    table.foreign('subcategory_id').references('subcategory.id');
    table.string('caliber', 128);
    table.integer('max_range_meters');
    table.boolean('armored');
    table.string('country', 256);
    table.string('image', 1024);
    table.integer('page_number');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('equipment', table => {
    table.dropForeign('subcategory_id');
  }).then(()=>{
    return knex.schema.dropTableIfExists('equipment');
  })
};
