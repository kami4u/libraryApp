var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('welcome to my app!!');
});

app.listen(port, () => {
    console.log('listening on port', + port);
});