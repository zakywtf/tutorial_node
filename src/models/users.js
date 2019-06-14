import mongoose from 'mongoose'

const users = mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        index: { 
            unique: true 
        } 
    },
    password: { 
        type: String, 
        required: true 
    }
})

users.statics.toApiUserSchema = function(data) {
    return data.map(function(user) {
        return {
            id: user.id,
            username: user.username
        }
    })
}

module.exports = mongoose.model('users', users);