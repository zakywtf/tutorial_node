import {Router} from 'express'
import handleRequest from '../lib/ctrlHandler'
import {sign} from '../lib/signer';

let router = Router()
router.route('/')
    .post(
        async (req,res) =>{
            handleRequest(req,res,async(body)=>{
                return await sign(body)
            })
        }
    )

module.exports=router