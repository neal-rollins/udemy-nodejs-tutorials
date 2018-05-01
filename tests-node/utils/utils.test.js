const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var result = utils.add(5, 13);

      expect(result).toBe(18).toBeA('number');
    });

    it('should async add two number', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBeA('number').toBe(7);
        done();
      });
    });
  });

  it('should square a number', () => {
    var result = utils.square(4);

    expect(result).toBe(16).toBeA('number');
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(4, (square) => {
      expect(square).toBeA('number').toBe(16);
      done();
    });
  });
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(12);
//   // expect({name: "Neal"}).toNotEqual({name: "neal"});
//   // expect([2, 3, 4]).toExclude(1);
//   expect({
//     name: 'Neal',
//     age: 34,
//     location: 'High Point'
//   }).toInclude({
//     age: 34
//   });
// });
//
// //verify first and last names are setName
// it('should set firstName and lastName', () => {
//   var user = {age: 34, location: 'High Point'};
//   var result = utils.setName(user, 'Neal Rollins');
//
//   expect(result).toBeA('object').toInclude({
//     firstName: 'Neal',
//     lastName: 'Rollins'
//   });
// });
