import {Router} from 'express'
import handleRequest from '../lib/ctrlHandler'
import {sign} from '../lib/signer';

let router = Router()
router.route('/')
    .post(
        async (req,res) =>{            
            handleRequest(req,res,async(body)=>{
            console.log({req, res});

                return await sign(body)
            })
        }
    )

module.exports=router