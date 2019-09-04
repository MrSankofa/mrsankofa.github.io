require('dotenv').config()
const express = require('express')
const morgan = require('morgan');
const path = require('path');
const { psqlRetrieveAll, psqlRetrieveOne } = require('../model/index.js');
const PORT = process.env.PORT || 3000;
const server = express();


server.use(morgan('dev'));

server.use(express.static(path.join(__dirname, '../public')));

server.get('/items', (req, res) => {
  psqlRetrieveAll(req, res)
})

server.get('/items/:id', (req, res) => {
  psqlRetrieveOne(req, res);
})

server.listen(PORT);
console.log(`Serving at http://localhost:${PORT}`);