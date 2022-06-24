/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex.schema.raw('TRUNCATE user CASCADE')
  await knex('users').del()
  await knex('users').insert([
    {name: 'Calvin', type: 'Mission Planner', email: 'example1@gmail.com'},
    {name: 'Cybyl', type: 'Exercise Planner', email: 'example2@gmail.com'},
    {name: 'Anthony', type: 'Operations Floor', email: 'example3@gmail.com'},
    {name: 'Zach', type: 'Commander', email: 'example4@gmail.com'},
    {name: 'Ryan', type: 'Mission Planner', email: 'example5@gmail.com'}
  ]);
};