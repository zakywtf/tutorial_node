let mongoose = require('mongoose')

const Schema = mongoose.Schema

const user_location = Schema({
    userId:{ type: Schema.Types.ObjectId,autopopulate:{ select: 'first_name last_name address telp email' }, ref: 'users' },
    location:{
        lat:String,
        lon:String
    },
    updatedAt:{type:Date}
})

user_location.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('user_location', user_location);