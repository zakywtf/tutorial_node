import {Router} from 'express'
import dotenv from 'dotenv'
import add_reviews from '../../models/reviews'
import userDetail from '../../models/user_detail'
import validateToken from '../../lib/validateToken'
import h from '../../lib/ctrlHandler'

dotenv.config()
let router = Router()

router.route('/')
    .post(
        async (req,res) =>{
            validateToken(req,res,async(body)=>{
                if(body.payload.role == 3){
                    let reviews = new add_reviews({
                        vehicle_data: req.body.vehicle_id,
                        review_text:req.body.review_text,
                        rating:req.body.rating,
                        user_data:body.payload.id
                    })
                    let result = await reviews.save()
                        return res.status(200).send({ error: 0, data: result});
                } else{
                    return res.status(404).send({ error: 1, message: 'No token provided.' });
                }
            })
        }
    )

module.exports=router