import mongoose from 'mongoose'
const Schema = mongoose.Schema

const reviews = Schema({
    vehicle_data :{ type: Schema.Types.ObjectId, ref: 'vehicles' },
    review_text:String,
    rating:Number,
    user_data :{ type: Schema.Types.ObjectId, ref: 'users' },
})

module.exports = mongoose.model('reviews', reviews);