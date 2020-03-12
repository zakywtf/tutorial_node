import {controller} from '../classes/classController';
import m from '../model/userModel'
import {getSession} from '../lib/sessionHandler';
import handleRequest from '../lib/ctrlHandler'

let model = new m()
let rtr = controller(model)

rtr.get('/check_online/:id',async(req,res)=>{
    handleRequest(req, res, async (body)=>{
        var {id} = req.params
        return await getSession(id);
    })
})

module.exports = rtr