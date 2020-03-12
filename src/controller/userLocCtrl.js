import {controller} from '../classes/classController';
import m from '../model/userLocModel'
import handleRequest from '../lib/ctrlHandler'

let model = new m()
let rtr = controller(model)

rtr.post('/set_location',async(req,res)=>{
    handleRequest(req, res, async (body)=>{
        let udata = res.locals.udata.payload
        return await model.setLocation(body, udata);
    })
})

module.exports = rtr