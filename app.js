const express = require('express');
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use(express.json()); // do not forget!!!

// TEST
app.get('/', (req, res) => res.status(200).send('Hello World!'))
// TEST

// CREATE --------------------------------------------------------------------------


/* add an equipment to the database
  REQUEST BODY
      {
        "name": "string",
        "subcategory_id": number,
        "caliber": "string",
        "max_range_meters": number,
        "armored": boolean,
        "country": "string",
        "image": "string"  // url
      }
*/
app.post('/equipment', async (req, res) => {
  console.log('posting new equipment')
  await knex('equipment')
  .insert(req.body)
  let result = await knex('equipment')
  .select('*')
  
  res.status(201).send(result);
})

/* adds a mission to the database 
  REQUEST BODY
      {
        "statement": "string",
        "location_lat": number,
        "location_long": number
      }
*/
app.post('/mission', async (req, res) => {
  console.log('posting new mission')
  console.log(req.body)
  await knex('mission')
  .insert(req.body)
  let result = await knex('mission')
  .select('*')
  
  res.status(201).send(result);
})

// READ FUNCTIONS ---------------------------------------------------------//
// gets all equipment (excluding the category of the equipment (but including the subcat))
app.get('/equipment', (req, res) => {
  console.log('getting equipment data');
  knex
  .select('*')
  .from('equipment')
  .then(data => {res.status(200).json(data)})
  .catch(() => res.status(404).send('Could not retrieve data'))
})

// gets info on equipment with specified id
app.get('/equipment/:id', (req, res) => {
  console.log('getting equipment id');
  knex('equipment')
  .join('subcategory', 'subcategory.id', '=', 'equipment.subcategory_id')
  .join('category', 'category.id', '=', 'subcategory.category_id')
  .where('equipment.id', req.params.id)
  .select('equipment.id as id',
        'equipment.name as name',
        'category.name as category',
        'subcategory.name as subcategory',
        'equipment.caliber as caliber',
        'equipment.max_range_meters as maxrangemeters',
        'equipment.armored as armored',
        'equipment.country as country',
        'equipment.image as image',
        'equipment.page_number as page_number'
        )
  .then(data => {
    if (data.length === 0)
      res.status(404).send('Could not retrieve data');
    else
      res.status(200).json(data[0]); // added [0] to send object instead of array
  })
  .catch(() => res.status(404).send('Could not retrieve data'))
})

// Friday // 
/*
  knex
  .select('*')
  .from('equipment')
  .where({id: req.params.id})
  .then(data => {
    if (data.length === 0)
      res.status(404).send('Could not retrieve data');
    else
      res.status(200).json(data); // added [0] to send object instead of array
  })
  .catch(() => res.status(404).send('Could not retrieve data'))
})
*/
// Friday // 

// --------------BREAK-----------------//


// gets equipment with a specified category id
app.get('/equipment/category/:category', async (req, res) => {
  let result = []
  console.log('getting category data');
  let subcatsWithCategoryChosen = await knex('subcategory')
  .where({category_id: req.params.category})
  .select('subcategory.id as id');
  console.log(subcatsWithCategoryChosen);
  for (let i = 0; i < subcatsWithCategoryChosen.length; i ++)
  {
    console.log(subcatsWithCategoryChosen[i].id);
    await knex('equipment')
    .where({subcategory_id: subcatsWithCategoryChosen[i].id})
    .then(data => {
      console.log(data)
      for(let j = 0; j < data.length; j ++)
      {
        result.push(data[j]);
      }
    })
    .catch(() => res.status(404).send('Could not retrieve data'))
  }
  console.log(result)
  
  res.status(200).json(result);
  

})

// gets equipment that have this related subcategory_id
app.get('/equipment/subcategory/:subcategory_id', async (req, res) => {
  console.log('getting equipment data in this subcategory');
  knex('equipment')
  .where({subcategory_id: req.params.subcategory_id})
  .then(data => {
    res.status(200).json(data);
  })
  .catch(() => res.status(404).send('Could not retrieve data'))
})


// gets an abreviated list of missions, excluding information of what equipment each mission has  
app.get('/mission', (req, res) => {
  console.log('getting mission data');
  knex
  .select('*')
  .from('mission')
  .then(data => {res.status(200).json(data)})
  .catch(() => res.status(404).send('Could not retrieve data'))
})
// gets all the information about a specific mission, including any equipment (and relevent information about that equipment) from the database
app.get('/mission/:id', async (req, res) => {
  console.log('getting mission id');
  let missionEquipment = await knex('mission_equipment')
  .join('equipment', 'equipment.id', '=', 'mission_equipment.equipment_id')
  .join('meta', 'meta.id', '=', 'mission_equipment.meta_id')
  .join('subcategory', 'subcategory.id', '=', 'equipment.subcategory_id')
  .join('category', 'category.id', '=', 'subcategory.category_id')
  .where('mission_equipment.mission_id', req.params.id)
  .select('equipment.id as equipment_id',
        'equipment.name as equipment_name',
        'category.name as category',
        // 'equipment.subcategory_id as subcategory_id',
        'subcategory.name as subcategory',
        'equipment.caliber as caliber',
        'equipment.max_range_meters as maxrangemeters',
        'equipment.armored as armored',
        'equipment.country as country',
        'equipment.image as image',
        'meta.quantity as quantity',
        'meta.location_lat as lat',
        'meta.location_long as lon',
        'meta.phase as phase',
        'mission_equipment.id as mission_equipment_id'
        )
  
  await knex
  .select('*')
  .from('mission')
  .where({id: req.params.id})
  .then(data => {
    if (data.length === 0)
      res.status(404).send('Could not retrieve mission data');
    else
    {
      data[0].equipment = missionEquipment;
      res.status(200).json(data[0]);

    }
  })
  .catch(() => res.status(404).send('Could not retrieve mission data'))
})
// gets a list of the categories from the category table
app.get('/category', (req, res) => {
  console.log('getting category data');
  knex
  .select('*')
  .from('category')
  .then(data => {res.status(200).json(data)})
  .catch(() => res.status(404).send('Could not category data'))
})

// Gets a list of the subcategorys from the subcategory table
app.get('/subcategory', (req, res) => {
  console.log('getting subcategory data');
  knex
  .select('*')
  .from('subcategory')
  .then(data => {res.status(200).json(data)})
  .catch(() => res.status(404).send('Could not subcategory data'))
}) 
// UPDATE FUNCTIONS ------------------------------------------------------------------------------------------------------------//
/*
  QUERY PARAMS
    example http request: http://localhost:8080/mission/1?equipment_id=1&operation=add
    equipment_id (number): equipment id to add or remove from mission id
    operation (string): if 'remove', remove equipment id @ mission id, if 'add', add equipment id; if 'update', update metadate at mission: equipment id
  REQUEST BODY: needed if adding or updating. if updating, only include key/value pairs you want to update
    {
      "phase": 1,
      "quantity": 1,
      "location_lat" : 123,
      "location_long": 123
    }
*/
app.patch('/mission/:id', async (req, res) => {
  console.log(`${req.query.operation} mission at id: `, req.params.id);
  console.log('request body: ', req.body);
  console.log(`recieved query params `,req.query)
  // error checking
  if (req.query.operation === undefined || req.query.equipment_id === undefined){
    res.status(400).send({message: 'incorrect query params'})
    return;
  }
  const expectedKeys = [ 'quantity', 'phase', 'location_lat', 'location_long' ];
  let keys = Object.keys(req.body)
  console.log('recieved keys in body: ',keys)
  for (let i = 0; i < keys.length; i++)
  {
    if (!expectedKeys.includes(keys[i]))
    {
      res.status(400).send({message: 'incorrect body'})
      return;
    }
  }
  // end error checking
  if (req.query.operation === 'remove')
  {
    let result = await knex('mission_equipment')
      .select('*')
      .where({mission_id: req.params.id, equipment_id: req.query.equipment_id})
    let metaID = result[0].meta_id;
    await knex('mission_equipment')
      .del()
      .where({mission_id: req.params.id, equipment_id: req.query.equipment_id})
    await knex('meta')
      .del()
      .where({id: metaID});
    res.status(200).send({mission_id: req.params.id, equipment_id: req.query.equipment_id});
  }
  else if (req.query.operation === 'add'){
    await knex('meta')
    .insert(req.body)
    let metaData = await knex('meta')
    .select('*')
    let metaID = metaData[metaData.length-1].id;
    let result = await knex('mission_equipment')
      .insert([{mission_id: req.params.id, equipment_id: req.query.equipment_id, meta_id: metaID}])
    res.status(200).send({mission_id: req.params.id, equipment_id: req.query.equipment_id})
    
  }
  else if (req.query.operation === 'update'){
    let result = await knex('mission_equipment')
      .select('*')
      .where({mission_id: req.params.id, equipment_id: req.query.equipment_id})
    console.log(`result`, result)
    let metaID = result[0].meta_id;

    let temp = await knex('meta')
    .where({id: metaID})
    .update(req.body)
    res.status(200).send({mission_id: req.params.id, equipment_id: req.query.equipment_id});
  }
  else{
    res.status(404).end({message: 'not valid operation' })
  }

})
/* REQUEST BODY
    {
      "phase": 1,
      "quantity": 1,
      "location_lat" : 123,
      "location_long": 123
    }
*/
app.patch('/mission_equipment/:mission_equipment_id', async (req, res) => {
  await knex('meta')
  .where({id: req.params.mission_equipment_id})
  .update(req.body)
  res.status(200).send({message: `Updated metadata at ${req.params.mission_equipment_id}`})
})

// DELETE FUNCTIONS ------------------------------------------------------------------------------------------------------------------------//
app.delete('/mission/:id', async (req, res) => {
  console.log('deleting mission at id: ', req.params.id);
  
  let result = await knex('mission')
  .where({id: req.params.id})
  let temp = await knex('mission_equipment')
  .select('*')
  .where({mission_id: req.params.id})
  console.log(temp);

  

  await knex('mission_equipment')
  .del()
  .where({mission_id: req.params.id})
  
  for (let i = 0; i < temp.length; i++)
  {
    await knex('meta')
    .del()
    .where({id: temp[i].meta_id})
  }
  
  await knex('mission')
  .del()
  .where({id: req.params.id})
  
  
  res.status(200).send(result);
})
app.delete('/mission_equipment/:mission_equipment_id', async (req, res) => {
  console.log('deleting mission_equipment at: ',req.params.mission_equipment_id)

  await knex('mission_equipment')
  .del()
  .where({id: req.params.mission_equipment_id})

  await knex('meta')
  .del()
  .where({id: req.params.mission_equipment_id})
  res.status(200).send({message: 'this worked'});

})
module.exports = app;

// .select('equipment.id as id',
//         'equipment.name as name',
//         'equipment.subcategory_id as subid',
//         'equipment.caliber as caliber',
//         'equipment.max_range_meters as maxrangemeters',
//         'equipment.armored as armored',
//         'equipment.country as country',
//         'equipment.image as image')