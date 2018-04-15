'use strict';

const express = require('express');
const cors = require('cors');
const pg = require('pg');

const app = express();
const PORT = process.env.PORT;

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/test', (req, res) => {
  res.send('WUBBA LUBBA DUB DUB!');
});

app.listen(PORT, () => console.log('Listening on PORT', PORT));
app.use(cors());
