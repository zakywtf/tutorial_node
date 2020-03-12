import Models from '../classes/classModel';
import sch from '../schema/company';

class companyModel extends Models{
    constructor(){
        super(sch)
    }

    async insert(body){
        // console.log({udata:this.udata});
        var obj = {...body, userId:this.udata.payload.id}
        await this.model.create(obj)
        return true
    }
    
}

module.exports=companyModel