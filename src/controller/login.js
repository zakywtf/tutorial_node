import {Router} from 'express'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import users from '../models/users'
import jwt from 'jsonwebtoken'

dotenv.config()
let router = Router()
router.route('/')
    .post(
        async (req,res) =>{
            try{
                const user = await users.findOne({ username: req.body.username }).exec();
                const payload = {id:user.id, username:user.username}
                if(!user) {
                    return res.status(400).send({error:1, message: "The username does not exist"});
                }
                if(!bcrypt.compareSync(req.body.password+process.env.SALT, user.password)) {
                    return res.status(400).send({error:1, message: "The password is invalid" });
                }
                jwt.sign({ payload }, process.env.SECRET_KEY, { algorithm: 'HS256' }, function(err, token) {
                    res.json({
                        error: 0,
                        data: {
                            token : token,
                            payload
                        },
                      });
                  });
                  
            } catch(err){
                return res.status(500).json({error:err.message})
            }
        }
    )

module.exports=router