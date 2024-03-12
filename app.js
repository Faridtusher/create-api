// get the dependencies
const express = require('express')
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3001
const hostname = '127.0.0.1'
const cors = require('cors')
const bodyParser = require('body-parser')
// finish the dependencies

// enable the dependencies
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
// end to enable the dependencies

// import all of the route files
const usersRoute = require('./routers/usersRoute')
const productsRoute = require('./routers/productsRoute')
const userRoute = require('./routers/userRoute')
// end to import all of the route files


// create the home page
app.get('/', (req, res) =>{
   res.send('<h2>Home page</h2>')
})


// create the others pages
app.use(usersRoute)
app.use(productsRoute)
app.use(userRoute)
// end to create the others pages


// create the not found page
app.use((req, res) =>{
   res.send('<h2>404!!!Not found page</h2>')
})


// server error
app.use((err, req, res, next) =>{
   res.status(500).json({
      message:'Server is not working'
   })
})


// export
module.exports = {
   app,
   port,
   hostname
}