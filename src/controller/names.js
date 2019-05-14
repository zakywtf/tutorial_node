import {Router} from 'express'
import h from '../lib/ctrlHandler'

let router = Router()
const names = ['tes1','tes2','tes3','tes4']

router.get('/', async (req, res)=>{
    h(req,res,async(body)=>{
        // throw new Error('error')
        return {nama:names}
    })
})

router.get('/',(req,res)=>{
    res.json({page:'COntroller name'})
})

router.get('/:nama',(req,res)=>{
    let nm = req.params.nama
    // console.log(nama);
    h(req,res,async(body)=>{
        for(let i=0; i < names.length; i++){
            console.log(names[i]);
            
            if(nm == names[i]){
                return {nama:names[i]}
            }else{
                return{error}
            }
        }
    })
    // res.json({page:'COntroller name', id:id})
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