import {Router} from 'express'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import users from '../models/users'
import h from '../lib/ctrlHandler'
import validateToken from '../lib/validateToken'

dotenv.config()
let router = Router()

router.route('/')
    .get(
        async (req, res) =>{
            validateToken(req,res,async(body)=>{
                if(body.payload.role == 1){
                    users.find({}, async function(err, log) {
                        var data = await users.toApiUserSchema(log)
                            h(req,res,async()=>{
                                return data
                            })
                        })
                } else{
                    return res.status(404).send({ error: 1, message: 'No token provided.' });
                }
            })
            // 
        }
    )
    .post(
        async (req,res) =>{
            try{
                req.body.password = bcrypt.hashSync(req.body.password+process.env.SALT, 10);
                let user = new users(req.body)
                let result = await user.save()
                res.send(result)
            } catch(err){
                return res.status(500).json({error:err.message})
            }
        }
    )

module.exports=router