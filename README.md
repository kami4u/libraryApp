## Library books API

### To run the Server

1. Check if node and npm installed by doing `$ node -v` and `$ npm -v`
2. Then do `npm install` to install the modules
3. Seed your database with the main seed file `$ node seed/seed.js`
4. Run a command `mongod` in a terminal
5. To run the server do `npm start` so server will be running on `localhost:300`
6. Go to browser and check the routes like `localhost:3000/books` which will return all the books
7. These are the routes as shown below,

### Routes

| Route |   |
| ------|---|
| `GET /api/books` | Get all the books |
| `GET /api/books?prop=value` | Get all the books of specified prop and value |
| `GET /api/book/:id` | Get book by its id |

### Mongoose Documentation

The below are all model methods that you call on your models.

* [find](http://mongoosejs.com/docs/api.html#model_Model.find)
* [findOne](http://mongoosejs.com/docs/api.html#model_Model.findOne)
* [findOneAndUpdate](http://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate)
* [findOneAndRemove](http://mongoosejs.com/docs/api.html#model_Model.findOneAndRemove)
* [findById](http://mongoosejs.com/docs/api.html#model_Model.findById)
* [findByIdAndUpdate](http://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate)
* [findByIdAndRemove](http://mongoosejs.com/docs/api.html#model_Model.findByIdAndRemove)
* [update](http://mongoosejs.com/docs/api.html#model_Model.update)
* [remove](http://mongoosejs.com/docs/api.html#model_Model-remove)
* [save](http://mongoosejs.com/docs/api.html#model_Model-save)
* [count](http://mongoosejs.com/docs/api.html#model_Model.count)
