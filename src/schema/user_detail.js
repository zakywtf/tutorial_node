let mongoose = require('mongoose')

const Schema = mongoose.Schema

const user_detail = Schema({
    user_data :{ type: Schema.Types.ObjectId, autopopulate:true, ref: 'users' },
    company: { type: String, required: true},
    company_address:{ type: String, required: true},
    company_email:{ type: String, required: true},
    company_telp:{ type: String, required: true},
    start_time_available:{ type: String, required :true},
    end_time_available:{ type: String, required :true}
})


module.exports = mongoose.model('user_detail', user_detail);