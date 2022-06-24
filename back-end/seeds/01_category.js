/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex.schema.raw('TRUNCATE category CASCADE') //
  await knex('category').del()
  await knex('category').insert([
    {name: 'Reconnaissance'}, // 1
    {name: 'Infantry Weapons'}, // 2
    {name: 'Infantry Vehicles'}, // 3
    {name: 'Tanks'}, // 4
    {name: 'Anti-Tank and Anti-Armor'}, // 5
    {name: 'Artillery'}, // 6
    {name: 'Engineer and CBRN'}, // 7
    {name: 'Logistics'}, // 8
    {name: 'C2 and Information Warfare'}, // 9
    {name: 'Countermeasures'}, // 10
    {name: 'Insurgent and Gurilla Forces'}, // 11
    {name: 'Chemical Systems'} // 12
  ]);
};
