const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'not found',
    name: 'todo app 1.0'
  });
});

// GET /users returns array of user objects
// Give users a name property and an age property
app.get('/users', (req, res) => {
  res.status(200).send([{
      name: "Neal",
      age: 34
    }, {
      name: "Bob",
      age: 44
    }, {
      name: "Bill",
      age: 54
    }]);
});

app.listen(3000);
module.exports.app = app;
