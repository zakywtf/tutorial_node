import {controller} from '../classes/classController';
import m from '../model/vehicleModel'
import handleRequest from '../lib/ctrlHandler'

let model = new m()
let rtr = controller(model)

rtr.get('/transmition/:filter',async(req,res)=>{
    handleRequest(req, res, async (body)=>{
        const {filter}=req.params;
        return await model.filterTransmition(filter);
    })
})

rtr.get('/type_vehicle/:filter',async(req,res)=>{
    handleRequest(req, res, async (body)=>{
        // model.setUdata(res.locals && res.locals.udata)
        const {filter}=req.params;
        let udata = res.locals.udata.payload
        console.log({res,udata});
        
        return await model.filterTypeVehicle(filter);
    })
})

rtr.get('/filter/:type/:transmition',async(req,res)=>{
    handleRequest(req, res, async (body)=>{
        const {type, transmition}=req.params;
        return await model.filters(type, transmition);
    })
})

module.exports = rtr