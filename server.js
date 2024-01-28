// Load express
const express = require('express');
const path = require('path');

// Create our express app
const app = express();

// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', (req, res) => {
  res.send('<h1>Hello Eesprsoo!</h1>');
});

app.get('/home', (req, res) => {
    res.render('home');
  });

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, () => {
  console.log('Listening on port 3000');
});

