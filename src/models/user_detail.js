import mongoose from 'mongoose'
const Schema = mongoose.Schema

const user_detail = Schema({
    user_id :[{ type: Schema.Types.ObjectId, ref: 'users' }],
    company: { 
        type: String, 
        required: true,
    },
    start_time_available:{
        type: String,
        required :true,
    },
    end_time_available:{
        type: String,
        required :true,
    }
    
})


module.exports = mongoose.model('user_detail', user_detail);