var { books } = require('../models/models');

exports.getBooks = (req, res, next) => {
    var query = req.query;
    books.find(query, (err, book) => {
        if (err) return next({status: 404, message: 'Page not found!!!'});
        res.status(200).json(book);
    });
};

exports.getBookById = (req, res, next) => {
    books.findById(req.params.id, (err, book) => {
        if (err) return next({status: 404, message: 'Page not found!!!'});
        res.status(200).json(book);
    });
};

exports.addBook = (req, res, next) => {
    var book = new books(req.body);
    book.save()
        .then(() => {
            res.status(200).json(book);
    })
        .catch(() => {
            next({status: 500, message: 'Internal server error'});
    });
};