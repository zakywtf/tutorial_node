import {Router} from 'express'
import LogModel from '../models/log_user'
import h from '../lib/ctrlHandler'
import validateToken from '../lib/validateToken'

let router = Router()

router.route('/')
    .get(
        async (req, res) =>{
            validateToken(req,res,async(body)=>{
                if(body.payload.role == 2){
                    LogModel.find({}, async function(err, log) {
                        var data = await LogModel.toApiLogmodelSchema(log)
                            h(req,res,async()=>{
                                return data
                            })
                        })
                } else if(body.payload.role != 2){
                    return res.status(404).send({ error: 1, message: 'No token provided.' });

                } else{
                    return "ini salah"
                }
            })
            // 
        }
    )
    .post(
        async (req,res) =>{
            try{
                let log_user = new LogModel(req.body)
                let result = await log_user.save()
                res.send(result)
            } catch(err){
                return res.status(500).json({error:err.message})
            }
        }
    )

module.exports=router