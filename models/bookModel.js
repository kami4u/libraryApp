var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookModel = new Schema({
  title: {
    type: String
  },
  author: {
    type: String
  },
  img: {
    type: String
  },
  descripton: {
    type: String
  },
  read: {
    type: String
  }
});

module.exports = mongoose.model('bookModel', bookModel);