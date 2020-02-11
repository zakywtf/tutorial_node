import {Router} from 'express'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import users from '../../schema/users'
import userDetail from '../../schema/user_detail'
import validateToken from '../../lib/validateToken'

dotenv.config()
let router = Router()

router.route('/')
    .get(
        async (req, res) =>{
            validateToken(req,res,async(body)=>{
                if(body.payload.role == 1){
                    users.find({}, async function(err, log) {
                        var data = await users.toApiUserSchema(log)
                            return res.status(200).send({ error: 0, data: data});
                    })
                } else if(body.payload.role == 2){
                    userDetail.findOne({ user_data: body.payload.id }).populate('user_data').exec(function (err, datas) {
                        if (err) return handleError(err);
                        // console.log('data ===> %s', datas._id, datas.company);
                        
                        return res.status(200).send({ 
                            error: 0, 
                            data: {
                                user_data:{
                                    id : datas.user_data._id,
                                    username : datas.user_data.username,
                                    name : datas.user_data.first_name+' '+ datas.user_data.last_name,
                                    address : datas.user_data.address,
                                    telp : datas.user_data.telp,
                                    email : datas.user_data.email,
                                    role : datas.user_data.role,
                                    create_at : datas.user_data.create_at
                                },
                                user_detail : {
                                    id : datas._id,
                                    company : datas.company,
                                    company_address : datas.company_address,
                                    company_email: datas.company_email,
                                    company_telp: datas.company_telp,
                                    start_time_available:datas.start_time_available,
                                    end_time_available:datas.end_time_available
                                }
                            }
                        });
                    })
                } else{
                    return res.status(404).send({ error: 1, message: 'No token provided.' });
                }
            })
        }
    )

module.exports=router