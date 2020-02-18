let mongoose = require('mongoose')

const users = mongoose.Schema({
    username: { type: String, required: true,},
    password: {  type: String, required: true },
    first_name: String,
    last_name: String,
    address:String,
    telp:String,
    email:String,
    role:{ type:String, enum:['1','2','3']},
    create_at: {type:Date, default:Date.now}
})

users.index({telp:1},{unique:true})
users.index({email:1},{unique:true})

module.exports = mongoose.model('users', users);