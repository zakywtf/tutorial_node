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
                let user = await users.findOne({ username: req.body.username }).exec();
                if(!user) {
                    return res.status(400).send({ message: "The username does not exist" });
                }
                if(!bcrypt.compareSync(req.body.password+process.env.SALT, user.password)) {
                    return res.status(400).send({ message: "The password is invalid" });
                }
                res.send({ message: "The username and password combination is correct!" });
            } catch(err){
                return res.status(500).json({error:err.message})
            }
        }
    )

module.exports=router