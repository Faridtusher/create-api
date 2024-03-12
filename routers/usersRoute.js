// dependencies
const express = require('express')
const usersRoute = express.Router();
// end dependencies

// get the logic from controller file
const {getUsers} = require('../controllers/usersController')
// finish t get the logic from controller file


// run the route 
usersRoute.get('/users', getUsers)


// end to run the route 


// export the module
module.exports = usersRoute;