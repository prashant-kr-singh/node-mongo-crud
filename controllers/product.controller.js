const Product = require('../models/product.model');

exports.hello = ((req, res) => {
    res.send("Hello World");
});

exports.create = ((req, res) => {
    var product = new Product(
        {
            name : req.body.name,
            price : req.body.price
        }
    );
    product.save((err) => {
        if(err){
            console.log(err);
            res.send("Error adding product.");
        }
        else
            res.send("Product added successfully.");
    });
});

exports.fetchAll = ((req, res) => {
    Product.find({}, (err, product) => {
        if(err){
            console.log(err);
            res.send("Error fetching products.");
        }
        else
            res.send(product);
    });
});

exports.fetchProduct = ((req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if(err){
            console.log(err);
            res.send("Error fetching product by ID.");
        }
        else
            res.send(product);
    });
});

exports.updateProduct = ((req, res) => {
    Product.findByIdAndUpdate(req.body.id, {'$set' : {name:req.body.name, price:req.body.price}}, (err, product) => {
        if(err){
            console.log(err);
            res.send("Error updating product");
        }
        else
            res.send(product);
    });
});

exports.delete = ((req, res) => {
    Product.findByIdAndRemove(req.params.id, (err) => {
        if(err){
            console.log(err);
            res.send("Error deleting product.");
        }
        else
            res.send("Product deleted successfully.");
    });
});