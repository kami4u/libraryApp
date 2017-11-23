## Library books API

### To run the Server

1. Check if node and npm installed by doing `$ node -v` and `$ npm -v` else here is the link to download `https://www.npmjs.com/get-npm`
2. Check if mongoDB is installed otherwise here is the link `https://docs.mongodb.com/getting-started/shell/installation/`
3. Then In a terminal window do `npm install` to install required modules
4. Seed your database with the main seed file in terminal `$ node seed/seed.js`
5. Run a command `mongod` in a separate terminal window
6. To run the server do `npm start` so server will be running on `localhost:4000`
7. Go to browser and check the routes like `localhost:4000/api/books` which will return all the books list
8. Here is the link to deployed version of server `https://afternoon-lake-28470.herokuapp.com/`
8. These are the routes as shown below,

### Routes

| Route |   |
| ------|---|
| `GET /api/books` | Get all the books |
| `GET /api/books?prop=value` | Get all the books of specified prop and value |
| `POST /api/books` | Add new book |
| `GET /api/books/:id` | Get book by its id |
| `PUT /api/books/:id` | Update a book as a whole |
| `PATCH /api/books/:id` | Patch a book's specified value |
| `DELETE /api/books/:id` | Delete a book |

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
