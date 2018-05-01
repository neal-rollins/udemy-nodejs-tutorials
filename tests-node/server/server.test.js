const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

// server
  // GET /
    // some test case
  // Get /users
    // some test case

describe('Server', () => {
  describe('GET /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'not found'
          });
        })
        .end(done);
    });
  });
  describe('GET /users', () => {
    // Make a new tests
    // Assert status code is 200 and tha my user object exists in the users array
    it('should return my user object', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Neal',
            age: 34
          });
        })
        .end(done);
    });
  });
});
