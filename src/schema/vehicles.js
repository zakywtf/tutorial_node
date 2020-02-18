let mongoose = require('mongoose')

const Schema = mongoose.Schema

const vehicles = Schema({
    companyId:{ type: Schema.Types.ObjectId,autopopulate:true, ref: 'company' },
    type_vehicle: { type: String, required: true,enum:['1','2']},
    name:{type: String, required :true},
    vehicle_number:{type: String,required :true},
    charge_per_day:{type: Number,required:true},
    year:String,
    seat:String,
    color:String,
    fuel:String,
    transmition:{ type: String, required: true,enum:['1','2']},
    deskripsi:String
})

vehicles.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('vehicles', vehicles);