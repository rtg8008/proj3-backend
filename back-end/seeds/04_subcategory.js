/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex.schema.raw('TRUNCATE subcategory CASCADE')
  await knex('subcategory').del()
  await knex('subcategory').insert([
    {name: 'Reconnaissance Vehicles', category_id: 1}, // 1
    {name: 'Reconnaissance Systems', category_id: 1}, // 2
    {name: 'Smalls Arms', category_id: 2}, // 3
    {name: 'Grenade Launchers', category_id: 2}, // 4
    {name: 'Multi-purpose and Flame Launchers', category_id: 2}, // 5
    {name: 'Antitank Weapons', category_id: 2}, // 6
    {name: 'Obscurants and Flame', category_id: 2}, // 7
    {name: 'Armored Personnel Carriers', category_id: 3}, // 8
    {name: 'Infantry Fighting Vehicles', category_id: 3}, // 9
    {name: 'Specialized Carriers', category_id: 3}, // 10
    {name: 'Combat Support Vehicles', category_id: 3}, // 11
    {name: 'Dismounted Infantry Crew-served Weapons', category_id: 5}, // 12
    {name: 'Portable Mounted Crew-served Weapons', category_id: 5}, // 13
    {name: 'Towed Antitank Guns', category_id: 5}, // 14
    {name: 'Heavy Armored Combat Vehicles', category_id: 5}, // 15
    {name: 'ATGM Launcher Vehicles', category_id: 5}, // 16
    {name: 'Artillery Command and Recon Vehicles', category_id: 6}, // 17
    {name: 'Artillery Reconnaissance', category_id: 6}, // 18
    {name: 'Towed Cannon', category_id: 6}, // 19
    {name: 'Self-Propelled Cannon', category_id: 6}, // 20
    {name: 'Multiple Rocket Launcher', category_id: 6}, // 21
    {name: 'Mortars/Gun-Mortar Systems', category_id: 6}, // 22
    {name: 'Mine/Countermine', category_id: 7}, // 23
    {name: 'General Engineer', category_id: 7}, // 24
    {name: 'Decontamination and Smoke Vehicles', category_id: 7}, // 25
    {name: 'Transportation', category_id: 8}, // 26
    {name: 'Maintenance', category_id: 8}, // 27
    {name: 'General Utility', category_id: 8}, // 28
    {name: 'C2 and Information Warfare', category_id: 9}, // 29
    {name: 'Countermeasures', category_id: 10}, // 30
    {name: 'Insurgent and Gurilla Forces', category_id: 11}, // 31
    {name: 'Chemical Systems', category_id: 12}, // 32
    {name: 'Tanks', category_id: 4}, // 33

    

  ]);
};
