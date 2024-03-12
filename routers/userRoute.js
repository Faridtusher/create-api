// dependencies
const express = require('express')
const userRoute = express.Router();
const {getUser, createUser, updateUser, deleteUser} = require('../controllers/userController');


// create the get user route
userRoute.get('/user', getUser)
userRoute.post('/user', createUser)
userRoute.put('/user/:id', updateUser)
userRoute.delete('/user/:id', deleteUser)



// export the module
module.exports = userRoute;