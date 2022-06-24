/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('meta').del()
  await knex('meta').insert([
    { phase: 1, quantity: 1, location_lat: 34.609589, location_long: 48.359548},
    { phase: 2, quantity: 2, location_lat: 33.207471, location_long: 62.266827},
    { phase: 3, quantity: 3, location_lat: 31.686645, location_long: 65.947844},
    { phase: 3, quantity: 3, location_lat: 31.686645, location_long: 65.947844},
    { phase: 3, quantity: 3, location_lat: 31.686645, location_long: 65.947844},
    { phase: 3, quantity: 3, location_lat: 31.686645, location_long: 65.947844},
    { phase: 3, quantity: 3, location_lat: 31.686645, location_long: 65.947844},
    { phase: 3, quantity: 3, location_lat: 31.686645, location_long: 65.947844},
    { phase: 3, quantity: 3, location_lat: 31.686645, location_long: 65.947844},
    { phase: 3, quantity: 3, location_lat: 31.686645, location_long: 65.947844},
    { phase: 3, quantity: 3, location_lat: 31.686645, location_long: 65.947844},
    { phase: 3, quantity: 3, location_lat: 31.686645, location_long: 65.947844},
    { phase: 3, quantity: 3, location_lat: 31.686645, location_long: 65.947844},
    { phase: 3, quantity: 3, location_lat: 31.686645, location_long: 65.947844},
    { phase: 3, quantity: 3, location_lat: 31.686645, location_long: 65.947844},
    // presentation seeded data
    { phase: 1, quantity: 1, location_lat: 35.096751, location_long: -106.501060},
    { phase: 2, quantity: 4, location_lat: 35.098405, location_long: -106.504349},
    { phase: 3, quantity: 6, location_lat: 35.099932, location_long: -106.495638},
    { phase: 4, quantity: 12, location_lat: 35.094279, location_long: -106.505808},
    { phase: 5, quantity: 51, location_lat: 35.094384, location_long: -106.518984},
  ]);

};
