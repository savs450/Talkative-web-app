const jwt = require('jsonwebtoken')

const generateToken = (id) =>{
   // console.log(jwt.sign({id} , 'savita',{expiresIn:"30d"}))
    return jwt.sign({id} , 'savita',{expiresIn:"30d"})

}
module.exports = generateToken;