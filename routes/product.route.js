const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller');

router.get('/hello', productController.hello);

router.post('/create', productController.create);

router.get('/', productController.fetchAll);

router.get('/:id', productController.fetchProduct);

router.post('/update', productController.updateProduct);

router.get('/delete/:id', productController.delete);

module.exports = router;