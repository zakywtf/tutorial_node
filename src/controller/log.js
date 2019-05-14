import {Router} from 'express'
import LogModel from '../models/log_user'
import h from '../lib/ctrlHandler'

let router = Router()

router.route('/')
    .get(
        async (req, res) =>{
          h(req,res,async(body)=>{
            return await LogModel.find().exec()
          })
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