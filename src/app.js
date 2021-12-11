const express = require('express');
const artistRouter = require('./routes/artist');

const app = express();

app.use(express.json());
app.use('/artist', artistRouter);

app.get('/', (request, response) => {
  response.status(200).response.send('Hello World');
});

module.exports = app;
