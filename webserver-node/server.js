const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`
  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if(err) {
      console.log('Unable to append to server.log');
    }
  });
  next();
});

// app.use((req, res, next) => {
//   res.render('maint.hbs');
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  // res.send('<h1>Express</h1>');
  res.render('home.hbs', {
    pageTitle: 'home page',
    welcomeMessage: 'welcome'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'about page'
  });
})

app.get('/help', (req, res) => {
  res.render('help.hbs', {
    pageTitle: 'help page'
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'error'
  });
});

app.listen(port, () => {
  console.log(`Server runnnnning on port: ${port}`);
});
