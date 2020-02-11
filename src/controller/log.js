import {Router} from 'express'
import LogModel from '../schema/log_user'
import h from '../lib/ctrlHandler'
import validateToken from '../lib/validateToken'

let router = Router()

router.route('/')
    .get(
        async (req, res) =>{
            validateToken(req,res,async(body)=>{
                if(body.payload.role == 2 || body.payload.role == 1){
                    LogModel.find({}, async function(err, log) {
                        var data = await LogModel.toApiLogmodelSchema(log)
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
                let log_user = new LogModel(req.body)
                let result = await log_user.save()
                res.send(result)
            } catch(err){
                return res.status(500).json({error:err.message})
            }
        }
    )

module.exports=router