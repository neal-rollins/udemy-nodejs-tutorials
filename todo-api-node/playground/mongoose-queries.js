const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5ae891cf64c656981d2b0cb4';
// var id = '5ae8cfd17c510dd4389b09fa';
//
// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('find Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('findOne Todos', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('ID not found');
//   }
//   console.log('findById Todos', todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
  if(!user) {
    return console.log('ID not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));

// User.findById(id).then((user) => {
//   if(!user) {
//     return console.log('ID not found');
//   }
//   console.log(JSON.stringify(user, undefined, 2));
// }, (e) => {
//   console.log(e);
// });
