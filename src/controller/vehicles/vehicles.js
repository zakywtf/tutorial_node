import {Router} from 'express'
import dotenv from 'dotenv'
import vehicles from '../../models/vehicles'
import userDetail from '../../models/user_detail'
import validateToken from '../../lib/validateToken'
import h from '../../lib/ctrlHandler'

dotenv.config()
let router = Router()

router.route('/')
    .post(
        async (req,res) =>{
            validateToken(req,res,async(body)=>{
                console.log(req.body.filter);
                var type_vehicles = req.body.filter.type_vehicle
                var transmitions = req.body.filter.transmition
                if(type_vehicles == '' && transmitions == ''){
                    var vehicle_data = await vehicles.find()
                } else if(type_vehicles == ''){
                    var vehicle_data = await vehicles.find( {
                        $and : [
                            { $or : [ { transmition : transmitions } ] }
                        ]
                    } )
                } else if(transmitions == ''){
                    var vehicle_data = await vehicles.find( {
                        $and : [
                            { $or : [ { type_vehicle : type_vehicles }] }
                        ]
                    } )
                } else if(type_vehicles != '' && transmitions != ''){
                    var vehicle_data = await vehicles.find( {
                        $and : [
                            { $or : [ { type_vehicle : type_vehicles }] },
                            { $or : [ { transmition : transmitions } ] }
                        ]
                    } )
                }
                
                // console.log(vehicle_data);
                
                return res.status(200).send({ error: 0, data: vehicle_data});
            })
        }
    )

module.exports=router