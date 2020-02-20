import Models from '../../classes/classModel';
import sch from '../../schema/vehicles';
import {getLocationIdx, getVehiclesByRadius, getReviews} from '../../lib/masterCache';

class vehicleModel extends Models{
    constructor(){
        super(sch)
    }

    async getAll(){
        var datas = await this.model.find({})
        return await getVehiclesByRadius(this.udata.payload, datas)
    }

    async getById(id){
        var datas = await this.model.findById(id)
        var reviews = await getReviews(id)
        var obj = {vehicles:datas, reviews}

        return obj
    }

    async filterTransmition(filter){
        return await this.model.find({transmition:filter})
    }

    async filterTypeVehicle(filter){
        return await this.model.find({type_vehicle:filter})
    }

    async filters(type, transmition){
        return await this.model.find({$and:[
            {type_vehicle:type},
            {transmition:transmition}
        ]})
    }

}

module.exports=vehicleModel