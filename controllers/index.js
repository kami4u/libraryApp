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