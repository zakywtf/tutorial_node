import Models from '../classes/classModel';
import sch from '../schema/reviews';

class reviewsModel extends Models{
    constructor(){
        super(sch)
    }

    async insert(body){
        var udata = this.udata.payload
        var obj = {...body, userId:udata.id}
        let resp = await this.model.create(obj)
        
        return resp
    }

}

module.exports=reviewsModel