Northcoders News API

To run the Server

Check if node and npm installed by doing $ node -v and $ npm -v
Then do npm install to install the modules
Seed your database with the main seed file $ node seed/seed.js
Run a command mongod in a terminal
To run the server do npm start so server will be running on localhost:300
Go to browser and check the routes like localhost:3000/api/topics which will return all the topics
For testing purposes run npm test
These are the routes as shown below,
Routes

Route	
GET /books	Get all the books


The below are all model methods that you call on your models.

find
findOne
findOneAndUpdate
findOneAndRemove
findById
findByIdAndUpdate
findByIdAndRemove
update
remove
save
count