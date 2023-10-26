// Create web server
// Start web server

// 1. Import Express
const express = require('express');
const bodyParser = require('body-parser');

// 2. Create an instance of express
const app = express();

// 3. Configure the express instance
app.use(bodyParser.json());

// 4. Define routes
const comments = [
  { username: 'Todd', comment: 'lol that is so funny!' },
  { username: 'Skyler', comment: 'I like to go birdwatching with my dog' },
  { username: 'Sk8erBoi', comment: 'Plz delete your account, Todd' },
  { username: 'onlysayswoof', comment: 'woof woof woof' },
];

app.get('/comments', (req, res) => {
  res.send(comments
