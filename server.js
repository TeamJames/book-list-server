'use strict';

const express = require('express');
const cors = require('cors');
const pg = require('pg');

const app = express();
const PORT = process.env.PORT;
const DATABASE_URL = 'postgres://fmbgeoqnzjjeyv:3f4f570a963085f5f314eb1a409b6505e415a405f69e2a80b7b936bf9fc8e0be@ec2-54-221-192-231.compute-1.amazonaws.com:5432/d71d4lbu5f162a';
const CLIENT_URL = 'https://teamjames.github.io/book-list-client/';


// app.use(function(req, res, next) {
//   res.header('Acces-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

app.use(cors());

app.get('/ping', (req, res) => res.send('pong'));

app.get('/test', (req, res) => res.send('WUBBA LUBBA DUB DUB!'));

app.get('/james', (req, res, next) => {
  client.query(`
    SELECT COUNT(*) FROM books;  
  `).then(result => res.send(result.rows));
});

app.get('/books', (req, res, next) => {
  client.query(`
    SELECT title FROM books;
  `).then(result => res.send(result.rows));
});

app.get('*', (req, res, next) => {
  res.redirect('/test');
});

const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));


app.listen(PORT, () => console.log('Listening on PORT', PORT));


