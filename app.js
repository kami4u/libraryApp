var { getBooks, getBookById, addBook, updateBook } = require('./controllers');

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = require('./config').DB.dev;

var app = express();
var port = require('./config').PORT.dev;

mongoose.connect(db, (err) => {
    if (!err) console.log('connected to the Database');
    else console.log('error connecting to the Database');
});

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('welcome to my app!!');
});
app.get('/api/books', getBooks);
app.post('/api/books', addBook);
app.get('/api/books/:id', getBookById);
app.put('/api/books/:id', updateBook);

app.use((err,req, res, next) => { 
    if (err.status === 500) {res.status(500).json({message: err.message});}
    next(err, req, res);
  });
  app.use((err,req, res, next) => { 
    if (err.status === 404) {res.status(404).json({message: err.message});}
  });

app.listen(port, () => {
    console.log('listening on port', + port);
});