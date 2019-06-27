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
                if(body.payload.role == 2){
                    userDetail.findOne({ user_data: body.payload.id }).populate('user_data').exec(async function (err, datas) {
                        if (err) return handleError(err);
                        let vehicle = new vehicles({
                            user_data:datas.user_data._id,
                            type_vehicle: req.body.type_vehicle,
                            name:req.body.name,
                            vehicle_number:req.body.vehicle_number,
                            charge_per_day:req.body.charge_per_day,
                            year:req.body.year,
                            seat:req.body.seat,
                            color:req.body.color,
                            fuel:req.body.fuel,
                            transmition:req.body.transmition,
                            deskripsi:req.body.deskripsi,
                            rating:req.body.rating
                        })
                        // console.log(req.body.type_vehicle);
                        
                        let result = await vehicle.save()
                        return res.status(200).send({ error: 0, data: result});
                    })
                } else{
                    return res.status(404).send({ error: 1, message: 'No token provided.' });
                }
            })
        }
    )

module.exports=router