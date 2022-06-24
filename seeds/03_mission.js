/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('mission').del()
  await knex('mission').insert([
    { statement: 'OPERATION ROLLING THUNDER', location_lat: 21.031792, location_long: 105.841513},
    { statement: 'operation red dawn', location_lat: 34.455636, location_long: 43.799959},
    { statement: 'operation vittles', location_lat: 50.076732, location_long: 8.248708},
    { statement: 'exercise dragon sage', location_lat: 40.223624, location_long: -112.755548},
    { statement: 'exercise splintered spear', location_lat: 21.342521, location_long: -157.941031},
    { statement: `Operation James's Amazon Cart`, location_lat: 35.08423, location_long: -106.64905}

  ]);
};
