const {v4:uuid4} = require('uuid')
const users =[
   {
      id:uuid4(),
      username:'Farid',
      age:98
   },
   {
      id: uuid4(),
      username:'Faruk',
      age:102
   }
]

// export the module
module.exports = users;