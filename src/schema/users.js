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

users.index({tekp:1},{unique:true})
users.index({email:1},{unique:true})
users.statics.toApiUserSchema = function(data) {
    return data.map(function(user) {
        return {
            id: user.id,
            username: user.username,
            name: user.first_name+' '+user.last_name,
            address: user.address,
            telp: user.telp,
            email: user.email,
            role: user.role
        }
    })
}

module.exports = mongoose.model('users', users);