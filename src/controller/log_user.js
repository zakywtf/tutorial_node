import {Router} from 'express'
import h from '../lib/ctrlHandler'
import {read} from '../models/config'

let router = Router()

router.get('/', async (req, res)=>{
    h(req,res,async(body)=>{
         return await read();
    })
})

router.use('/',(req,res,next)=>{
    if(true){
        next()
    }
    else{
        res.json({error:500,message:'Error wew'})
    }
})

module.exports=router