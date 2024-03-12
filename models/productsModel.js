const { v4: uuid4 } = require('uuid')
const products = [
   {
      id: uuid4(),
      brand: 'Apple',
      price: 300000,
   },
   {
      id: uuid4(),
      brand: 'Samsung',
      price: 31000,
   },
]

module.exports = products