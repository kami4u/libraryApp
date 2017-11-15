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

exports.updateBook = (req, res, next) => {
    books.findById(req.params.id, (err, book) => {
        if (err) return next({status: 404, message: 'Page not found!!!'});
        else {
            book.title = req.body.title;
            book.author = req.body.author;
            book.genre = req.body.genre;
            book.read = req.body.read;
        }
        book.save()
            .then(() => {
                res.status(200).json(book);
        })
            .catch(() => {
                next({status: 500, message: 'Internal server error'});
        });
    });
    
};

exports.updateBookValue = (req, res, next) => {
    books.findById(req.params.id, (err, book) => {
        if (err) return next({status: 404, message: 'Page not found!!!'});
        else {
            if (req.body._id) delete req.body._id;
            for (var key in req.body) {
                book[key] = req.body[key];
            }
        }
        book.save()
            .then(() => {
                res.status(200).json(book);
        })
            .catch(() => {
                next({status: 500, message: 'Internal server error'});
        });
    });
    
};

exports.deleteBook = (req, res, next) => {
    books.findById(req.params.id, (err, book) => {
        if (err) return next({status: 404, message: 'Page not found!!!'});
        book.remove()
            .then(() => {
                res.status(204).send('Removed');
        })
            .catch(() => {
                next({status: 500, message: 'Internal server error'});
        });
    });
};