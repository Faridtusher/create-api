// import the data from user model
let myUser = require('../models/userModel')
const {v4:uuid5} = require('uuid')
const { use } = require('../routers/usersRoute')


// get the user details
const getUser = (req, res) =>{
   res.status(200).json(myUser)
}

// create the user details
const createUser = (req, res) =>{
   let newUser ={
      id:uuid5(),
      name : req.body.name,
      age : req.body.age,
   }
   myUser.push(newUser)
   res.status(201).json(myUser)
}


// update the user
const updateUser = (req, res) =>{
   const userId = req.params.id;
   const {name, age} = req.body;

   myUser.filter(user => user.id === userId).map(selectedUser =>{
      selectedUser.name = name;
      selectedUser.age = Number(age);
   })
   res.status(200).json(myUser)
}


// delete the userDetails
const deleteUser = (req, res) =>{
   const userId = req.params.id;
   myUser = myUser.filter(user => user.id !== userId)
   res.status(200).json(myUser)
}

// export the function
module.exports = {
   getUser,
   createUser,
   updateUser,
   deleteUser
}

