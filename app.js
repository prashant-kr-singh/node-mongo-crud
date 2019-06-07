const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route')
const mongoose = require('mongoose');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost:27017/mydb');

var mongodb = mongoose.connection;

app.use('/products', product);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});