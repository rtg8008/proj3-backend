/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  	
  // await knex.schema.raw('TRUNCATE equipment CASCADE')
    // Deletes ALL existing entries
  await knex('equipment').del()
  await knex('equipment').insert([
  // 1.1 Reconnaissance - Reconnaissance Vehicles
    {page_number: 32, name: 'BRDM-1', subcategory_id: 1, caliber: '12.7mm', max_range_meters: 2000, armored: true, country: 'Russian', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/BRDM-1_TBiU_24_1.jpg/1280px-BRDM-1_TBiU_24_1.jpg'},
    {page_number: 38, name: 'FOX Armored Scout Car', subcategory_id: 1, caliber: '30mm', max_range_meters: 1100, armored: true, country: 'British', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/FV721_Fox_armoured_fighting_vehicle_%282008-08-09%29.jpg/1024px-FV721_Fox_armoured_fighting_vehicle_%282008-08-09%29.jpg'},
    {page_number: 40, name: 'EE-9 CASCAVEL', subcategory_id: 1, caliber: '90mm', max_range_meters: 2000, armored: true, country: 'Brazilians', image: 'https://photo.weaponsystems.net/image/s-carousel/n-ve_sct_ee-9_p01.jpg/--/img/ws/ve_sct_ee-9_p01.jpg'},
  // 1.2 Reconnaissance - Reconnaissance Systems
    {page_number: 69, name: 'FARA-1E', subcategory_id: 2, caliber: null, max_range_meters: 5000, armored: false, country: 'Russian', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/SBR-5M_-_4thTankDivisionOpenDay17p2-34.jpg/1280px-SBR-5M_-_4thTankDivisionOpenDay17p2-34.jpg'},
    {page_number: 71, name: 'SOPHIE LR', subcategory_id: 2, caliber: null, max_range_meters: null, armored: false, country: 'French', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Sophie_%C2%A9B._Rousseau.jpg'},
    // 2.1: Infantry Weapons - Small Arms
    {page_number: 75, name: 'FAL', subcategory_id: 3, caliber: '7.62x51mm NATO', max_range_meters: 600, armored: false, country: 'Belgian', image: 'https://dygtyjqp7pi0m.cloudfront.net/i/36526/31536191_1.jpg?v=8D6368F5BA07710'},
    {page_number: 77, name: 'G3', subcategory_id: 3, caliber: '7.62x51mm NATO', max_range_meters: 400, armored: false, country: 'German', image: 'https://i.imgur.com/evP3BZ7.jpg'},
    {page_number: 79, name: 'SKS', subcategory_id: 3, caliber: '7.62x39mm', max_range_meters: 350, armored: false, country: 'Russian', image: 'https://th.bing.com/th/id/OIP.yRx-vnTfhhXGMiAHK7M0OQHaHa?pid=ImgDet&rs=1'},
    {page_number: 81, name: 'AK-47/AKM', subcategory_id: 3, caliber: '7.62x39mm', max_range_meters: 300, armored: false, country: 'Russian', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/AK-47_type_II_noBG.png/1024px-AK-47_type_II_noBG.png'},
    {page_number: 85, name: 'QBZ-95', subcategory_id: 3, caliber: '5.8×42mm', max_range_meters: 400, armored: false, country: 'Chinese', image: 'https://nationalinterest.org/sites/default/files/styles/hero-960w/public/main_images/QBZ95_automatic_rifle_20170902.jpg?itok=Te0IRvzr'},
  // 2.2: Infantry Weapons - Grenade Launchers
    {page_number: 95, name: 'AGS-17 / AGS-30', subcategory_id: 4, caliber: '30mm Frag-HE', max_range_meters: 1200, armored: false, country: 'Russian', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/AGS-30_maks2009.jpg/1024px-AGS-30_maks2009.jpg'},
    {page_number: 97, name: 'CIS-40 Air Bursting Munition System (ABM)', subcategory_id: 4, caliber: '40x53mm', max_range_meters: 1500, armored: false, country: 'Singaporean', image: 'https://upload.wikimedia.org/wikipedia/commons/7/75/STK_40_AGL_mounted_on_top_of_a_Peacekeeper_Protected_Response_Vehicle_during_display_at_AOH_2022_%28cropped%29.jpg'},
    {page_number: 103, name: 'GM-94', subcategory_id: 4, caliber: '43mm', max_range_meters: 300, armored: false, country: 'Russian', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Grenade-launcher-GM-94.jpg'},
  // 2.5 Infantry Weapons - Obscurants and Flames
    {page_number: 137, name: 'RPO-A Series and Shmel-M', subcategory_id: 7, caliber: '93mm', max_range_meters: 600, armored: true, country: 'Russian', image: 'https://upload.wikimedia.org/wikipedia/commons/6/62/RPO-A_missile_and_launcher.jpg'},
  // 3.1 Infantry Vehicles - Armored Personnel Carriers
    {page_number: 191, name: 'TYPE 63', subcategory_id: 8, caliber: '12.7mm', max_range_meters: 2000, armored: true, country: 'Chinese', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/ChineseType63APC.jpg'},
    {page_number: 197, name: 'VTT-323', subcategory_id: 8, caliber: '14.5mm', max_range_meters: 1500, armored: true, country: 'North Korean', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/VTT_323.jpg'},
    {page_number: 199, name: 'VAB', subcategory_id: 8, caliber: '7.62mm', max_range_meters: 3000, armored: true, country: 'French', image: 'https://upload.wikimedia.org/wikipedia/commons/6/67/French_VAB_APC_during_Operation_Desert_Shield.JPEG'},
  // 3.2 Infantry Vehicles - Infantry Fighting Vehicles
    {page_number: 157, name: 'AMX-10P', subcategory_id: 9, caliber: '20mm', max_range_meters: 2000, armored: true, country: 'FRENCH', image: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/AMX-10P_in_the_Mus%C3%A9e_des_Blind%C3%A9s%2C_France%2C_pic-2.JPG'},
    {page_number: 159, name: 'MARDER 1A3', subcategory_id: 9, caliber: '20mm', max_range_meters: 2000, armored: true, country: 'German', image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/IL%C3%9C_der_Bundeswehr_am_24.09.2012_--_Marder_AT.jpg'},
    {page_number: 181, name: 'FNSS', subcategory_id: 9, caliber: '25mm', max_range_meters: 1500, armored: true, country: 'Turkish', image: 'http://www.armyrecognition.com/images/stories/europe/turkey/light_armoured/TIFV/TIFV_FNSS_light_armoured_infantry_combat_armoured_vehicle_Turkish_army_Turkey_640.jpg'},
  // 4.0 Tanks
    {page_number: 282, name: 'TYPE 96 AND TYPE 96G', subcategory_id: 33, caliber: '125mm', max_range_meters: 1000, armored: true, country: 'Chinese', image: 'https://www.military-today.com/tanks/type_96_l7.jpg'},
    {page_number: 288, name: 'CHALLENGER 2', subcategory_id: 33, caliber: '120mm', max_range_meters: 800, armored: true, country: 'British', image: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Challenger_2_Main_Battle_Tank_patrolling_outside_Basra%2C_Iraq_MOD_45148325.jpg'},
    {page_number: 298, name: 'AL KHALID TYPE-90-IIM', subcategory_id: 33, caliber: '125mm', max_range_meters: 1500, armored: true, country: 'Pakistan', image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Bangladesh_Army_MBT2000._%2839072813711%29.jpg'},
   // 5.3 Anti-Tank / Anti-Tank Armor - Towed Antitank Guns
    {page_number: 374, name: '2A45M', subcategory_id: 14, caliber: '125mm', max_range_meters: 3000, armored: false, country: 'Russian', image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Sprut.gif'},
    {page_number: 372, name: 'MT-12 MT-12R', subcategory_id: 14, caliber: '100mm', max_range_meters: 2500, armored: false, country: 'Russian', image: 'http://www.military-today.com/artillery/mt12_rapira.jpg'},
  // 5.4 Anti-Tank / Anti-Tank Armor - Heavy Armored Combat Vehicles
    //
    {page_number: 325, name: '2S25', subcategory_id: 15, caliber: '125mm', max_range_meters: 1000, armored: true, country: 'Russian', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/2008_Moscow_Victory_Day_Parade_%2859-18%29.jpg'},
    {page_number: 335, name: 'AMX-10 PAC 90', subcategory_id: 15, caliber: '90mm', max_range_meters: 2000, armored: true, country: 'French', image: 'http://www.military-today.com/artillery/amx10_pac90_l1.jpg'},
  // 5.5 Anti-Tank / Anti-Tank Armor - ATGM Launcher Vehicles
    {page_number: 329, name: '9P157-2/KHRIZANTEMA-S', subcategory_id: 16, caliber: 'ATGM, 9K123', max_range_meters: 6000, armored: false, country: 'Russian', image: 'https://photo.weaponsystems.net/image/s-carousel/n-ve_fsv_9p157_v1.jpg/--/img/ws/ve_fsv_9p157_v1.jpg'},
    {page_number: 331, name: '9P162/KORNET-LR', subcategory_id: 16, caliber: 'ATGM', max_range_meters: 5500, armored: false, country: 'Russian', image: 'https://www.military-today.com/missiles/kornet_t_s1.jpg'},
  // 7.1 Engineer and CBRN - Mine/Countermine
    {page_number: 481, name: 'HELKIR', subcategory_id: 23, caliber: 'NA', max_range_meters: 150, armored: false, country: 'Austrian', image: 'https://i.ytimg.com/vi/2TSCDhV31Uo/hqdefault.jpg'},
    {page_number: 483, name: 'GMZ-3', subcategory_id: 23, caliber: 'NA', max_range_meters: 0, armored: false, country: 'Russian', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/GMZ-3_at_Engineering_Technologies_2012.jpg'},
    // {page_number: 32, name: 'TYPE 96 AND TYPE 96G', subcategory_id: 33, caliber: '125mm', max_range_meters: 1000, armored: true, country: 'North Korean', image: ''},
  ]);
};

/*
    table.string('name', 256) // specifies type, field name, and limit (i.e. character limit)
    table.integer('subcategory_id');    
    // table.foreign('subcategory_id').references('subcategory');
    table.integer('caliber');
    table.integer('max_range_meters');
    table.boolean('armored');
    table.string('country', 256);
    table.string('image', 1024);
*/