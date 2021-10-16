
const request = require('supertest');
const app = require('../app');
const mockUsers = require('../mockDB');

//jest.mock('user.model');

describe('Test cases for User', () => {
  test('GET /user/', (done) => {
    request(app)
    .get('/user')
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      return done();
      });
  });
  
  test('GET /user/:id (get user with id 1)', (done) => {
    request(app)
    .get('/user/1')
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });
  });
  
  test('POST /user/add (user with missing field).', (done) => {
    request(app)
    .post('/user/add')
    .send({username: "testuser", password: "password"})
    .expect(401)
    .expect(res => res.body.message === "ERROR: Missing field(s) (username, password, email)")
    .end((err, res) => {
      if(err) return done(err);
      return done();
    });
  });
  
  test('POST /user/add (user with complete fields).', (done) => {
    request(app)
    .post('/user/add')
    .send({username: "testuser", password: "password", email: "testemail@gmail.com"})
    .expect(200)
    .expect(res => res.body.message === "Account successfuly created!")
    .end((err, res) => {
      if(err) return done(err);
      return done();
    });
  });
  
  test('PATCH /user/update', (done) => {
    request(app)
    .patch('/user/update')
    .send({ newUsername: "newusername", id: 1 })
    .expect(200)
    .expect(res => res.body.message === "User updated!")
    .end((err, res) => {
      if(err) return done(err);
      return done();
    });
  });
  
  test('DELETE /user/delete', (done) => {
    request(app)
    .delete('/user/delete')
    .send({ id: 1 })
    .expect(200)
    .end((err, res) => {
      if(err) return done(err);
      return done();
    });
  });
});