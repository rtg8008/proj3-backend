/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('mission_equipment', table => {
    table.increments();
    table.integer('mission_id');
    table.foreign('mission_id').references('mission.id');
    table.integer('equipment_id');
    table.foreign('equipment_id').references('equipment.id');
    table.integer('meta_id');
    table.foreign('meta_id').references('meta.id');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('mission_equipment', table => {
    table.dropForeign('meta_id');
    table.dropForeign('equipment_id');
    table.dropForeign('mission_id');
  })
  .then(() => {
    return knex.schema.dropTableIfExists('mission_equipment')});
};
