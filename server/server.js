/*
  Set up express server here and connect to Redis server
*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const path = require('path');
const controller = require('./controller')

app.use(bodyParser.json());

app.post('/connect',
  controller.redisConnect,
  (req, res) => {
    res.status(200).end();
  }
)

app.listen(PORT, () => {
  console.log(`You are listening on ${PORT}`)
})