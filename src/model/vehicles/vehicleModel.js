import Models from '../../classes/classModel';
import sch from '../../schema/vehicles';

class vehicleModel extends Models{
    constructor(){
        super(sch)
    }

}

module.exports=vehicleModel