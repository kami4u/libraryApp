/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';
require('dotenv').config({
  path: `./.${process.env.NODE_ENV}.env`
});

var { getBooks, getBookById, addBook, updateBook, updateBookValue, deleteBook } = require('./controllers');

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

var app = express();

mongoose.connect(process.env.DB_URI, (err) => {
  if (!err) console.log(`connected to ${process.env.NODE_ENV}`);
  else console.log('error connecting to the Database');
});

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('welcome to my app!!');
});
app.get('/api/books', getBooks);
app.post('/api/books', addBook);
app.get('/api/books/:id', getBookById);
app.put('/api/books/:id', updateBook);
app.patch('/api/books/:id', updateBookValue);
app.delete('/api/books/:id', deleteBook);

app.use((err,req, res, next) => { 
  if (err.status === 500) {res.status(500).json({message: err.message});}
  next(err, req, res);
});
app.use((err,req, res, next) => { 
  if (err.status === 404) {res.status(404).json({message: err.message});}
});

app.listen(process.env.PORT, () => {
  console.log('listening on port', + process.env.PORT);
});

module.exports = app;