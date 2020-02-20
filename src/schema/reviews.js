let mongoose = require('mongoose')

const Schema = mongoose.Schema

const sch = Schema({
    vehicleId:{ type: Schema.Types.ObjectId,autopopulate:{select : 'type_vehicle name'}, ref: 'vehicles' },
    userId:{ type: Schema.Types.ObjectId,autopopulate:{ select: 'first_name last_name address telp email' }, ref: 'users' },
    rating:Number,
    desc:String,
})

sch.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('review', sch);