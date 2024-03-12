// const express = require('express');
const path = require('path')
const users = require('../models/usersModel')


exports.getUsers = (req, res) =>{
   res.status(200).json({
      users
   })
   // res.sendFile(path.join(__dirname , '../views/users.html'))
}