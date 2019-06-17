import {Router} from 'express'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import users from '../models/users'
import userDetail from '../models/user_detail'

dotenv.config()
let router = Router()

router.route('/')
    .post(
        async (req,res) =>{
            try{
                req.body.password = bcrypt.hashSync(req.body.password+process.env.SALT, 10);
                let user = new users(req.body)
                // console.log(req.body.role);
                let result_user = await user.save()
                if(req.body.role == 2){
                    let user_detail = new userDetail({
                        user_id : result_user._id,
                        company : req.body.company,
                        start_time_available : req.body.start_time_available,
                        end_time_available : req.body.end_time_available
                    })
                    let result_user_detail = await user_detail.save()
                    return res.status(200).send({ error: 0, data: {result_user, user_detail}});
                } else{
                    return res.status(200).send({ error: 0, data: result_user});
                }
            } catch(err){
                return res.status(500).json({error:err.message})
            }
        }
    )

module.exports=router