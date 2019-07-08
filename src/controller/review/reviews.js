import {Router} from 'express'
import dotenv from 'dotenv'
import reviews from '../../models/reviews'
import userDetail from '../../models/user_detail'
import validateToken from '../../lib/validateToken'
import h from '../../lib/ctrlHandler'

dotenv.config()
let router = Router()

router.route('/')
    .post(
        async (req,res) =>{
            validateToken(req,res,async(body)=>{
                var review = await reviews.find()
                return res.status(200).send({ error: 0, data: review});
            })
        }
    )

module.exports=router