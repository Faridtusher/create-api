const express = require('express');
const productsRoute = express.Router();

const {getProducts, postProducts, updateProducts, deleteProducts} = require('../controllers/productsController')

productsRoute.get('/products', getProducts )
productsRoute.post('/products', postProducts)
productsRoute.put('/products/:id', updateProducts)
productsRoute.delete('/products/:id', deleteProducts)


// export the module
module.exports = productsRoute;
