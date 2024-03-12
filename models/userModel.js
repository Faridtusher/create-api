const {v4:uuid5} = require('uuid')
const myUser = [
   {
      id:uuid5(),
      name:'Faruk',
      age:98,
   },
   {
      id: uuid5(),
      name:'Mahmud',
      age:95,
   },
   {
      id: uuid5(),
      name:'Rabbi',
      age:90,
   },
]

// export
module.exports = myUser