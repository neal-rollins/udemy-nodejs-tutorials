const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App', () => {

  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Neal', 34);
    expect(spy).toHaveBeenCalledWith('Neal', 34);
  });

  it('should call saveUser with user object', () => {
    var email = 'email@server.com'
    var password = 'qwerty'

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });

});
