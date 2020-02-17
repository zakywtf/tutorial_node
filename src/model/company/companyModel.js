import Models from '../../classes/classModel';
import sch from '../../schema/company';

class companyModel extends Models{
    constructor(){
        super(sch)
    }

}

module.exports=companyModel