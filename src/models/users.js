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

module.exports = mongoose.model('users', users);