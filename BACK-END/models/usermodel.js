
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    password:String,
})

const userModel  =  mongoose.model('Register',userSchema)

module.exports = userModel