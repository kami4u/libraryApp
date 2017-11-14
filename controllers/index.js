var { books } = require('../models/models');

exports.getBooks = (req, res, next) => {
    books.find({}, (err, book) => {
        if (err) return next({status: 404, message: 'Page not found!!!'});
        res.status(200).json(book);
    });
};