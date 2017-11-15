var models = require('../models/models');
var { books } = require('./data/books');
var async = require('async');
var mongoose = require('mongoose');
var db = require('../config').DB;

mongoose.connect(db.dev, (err) => {
    if (!err) {
        console.log('Connected to db');
        mongoose.connection.db.dropDatabase();
        async.waterfall([addBooks], (err) => {
            if (err) {
                console.log(JSON.stringify(err));
                process.exit();
            }
            console.log('Done seeding');
            process.exit();
        });
    } else {
        console.log('database error');
        process.exit();
    }
});

function addBooks(done) {
    console.log('adding books');
    async.eachSeries(books, (book, cb) => {
        var bookData = new models.books(book);
        bookData.save((err) => {
            if (err) return cb(err);
            return cb();
        });

    }, (error) => {
        if (error) return done(error);
        return done(null);
    });
}