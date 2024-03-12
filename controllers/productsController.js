const {v4:uuid4} = require('uuid')
let products = require('../models/productsModel')


const getProducts = (req, res) =>{
   res.status(200).json({products})
}


// post the products
const postProducts = (req, res) =>{
   const newProducts = {
      id: uuid4(),
      brand : req.body.brand,
      price: Number(req.body.price)
   }
   products.push(newProducts)
   res.status(201).json(products)
}

// update the products
const updateProducts = (req, res) =>{
   const productId = req.params.id;
   const {brand, price} = req.body;
   products.filter(product => product.id === productId).map(selectedProduct => {
      selectedProduct.brand = brand;
      selectedProduct.price = Number(price)
   })
   res.status(200).json({message:products})
}

// delete the product
const deleteProducts = (req, res) =>{
   const productId = req.params.id;
   products = products.filter(product => product.id !== productId)
   res.status(200).json(products)
}

// export the modules
module.exports = {
   getProducts,
   postProducts,
   updateProducts,
   deleteProducts
}