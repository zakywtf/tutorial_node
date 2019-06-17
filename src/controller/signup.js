import {Router} from 'express'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import users from '../models/users'

dotenv.config()
let router = Router()

router.route('/')
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