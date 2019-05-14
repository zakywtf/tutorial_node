import mongoose from 'mongoose'

const LogModel = mongoose.Schema({
    kota : String, 
    ip_address : String, 
    latitude : String, 
    longitude : String, 
    browser : String, 
    os : String, 
    user_agent : String, 
    created_at : String
})

module.exports = mongoose.model('log_users', LogModel);

