let mongoose = require('mongoose')

const Schema = mongoose.Schema

const sch = Schema({
    ip:String,
    city:String,
    region:String,
    country_name:String,
    location:{
        lat:String,
        lon:String
    },
    createdAt:{type:Date, default:Date.now}
})

module.exports = mongoose.model('log_user', sch);