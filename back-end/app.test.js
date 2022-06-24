console.log(process.env.NODE_ENV);

const app = require('./app');
const request = require('supertest');

describe('unit tests for express application', ()=>{
  it('should test that hello world is recieved', (done) => {
    request(app)
      .get('/')
      .expect(200, 'Hello World!')
      .end( (err, res) => {
        if (err) throw err;       
        done();
      })
  })
  it('should get equipment information', (done) => {
    request(app)
      .get('/equipment')
      .expect(200)
      .expect((res) => {
        console.log(res.body);
      })
      .end((err) => {
        if (err) throw err;
        done();
      })
  })
  it('should get mission information', (done) => {
    request(app)
      .get('/mission')
      .expect(200)
      .expect((res) => {
        console.log(res.body);
      })
      .end((err) => {
        if (err) throw err;
        done();
      })
  })
  it('should get equipment information', (done) => {
    request(app)
      .get('/mission/1')
      .expect(200)
      .expect((res) => {
        console.log(res.body);
      })
      .end((err) => {
        if (err) throw err;
        done();
      })
  })
  it('should get equipment information', (done) => {
    request(app)
      .get('/equipment/1')
      .expect(200)
      .expect((res) => {
        console.log(res.body);
      })
      .end((err) => {
        if (err) throw err;
        done();
      })
  })
  it('should get equipment information', (done) => {
    request(app)
      .get('/category')
      .expect(200)
      .expect((res) => {
        console.log(res.body);
      })
      .end((err) => {
        if (err) throw err;
        done();
      })
  })
  it('should get equipment information', (done) => {
    request(app)
      .get('/subcategory')
      .expect(200)
      .expect((res) => {
        console.log(res.body);
      })
      .end((err) => {
        if (err) throw err;
        done();
      })
  })
  it('should get equipment information', (done) => {
    request(app)
      .get('/equipment/category/3')
      .expect(200)
      .expect((res) => {
        console.log(res.body);
      })
      .end((err) => {
        if (err) throw err;
        done();
      })
  })
  it('should be able to post equipment', (done) => {
    request(app)
      .post('/equipment')
      .expect(201)
      .expect((res) => {
        console.log(res.body);
      })
      .end((err) => {
        if (err) throw err;
        done();
      })
  })
  it('should post new mission', (done) => {
    request(app)
      .post('/mission')
      .expect(201)
      .expect((res) => {
        console.log(res.body);
      })
      .end((err) => {
        if (err) throw err;
        done();
      })
  })
  it('should add equipment to a mission', (done) => {
    request(app)
      .patch('/mission/1?equipment_id=2&operation=add')
      .expect(200)
      .expect((res) => {
        console.log(res.body);
      })
      .end((err) => {
        if (err) throw err;
        done();
      })
  })
  it('should get equipment information', (done) => {
    request(app)
      .del('/mission/16')
      .expect(200)
      .expect((res) => {
        console.log(res.body);
      })
      .end((err) => {
        if (err) throw err;
        done();
      })
  })
})