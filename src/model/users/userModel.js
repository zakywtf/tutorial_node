import Models from '../../classes/classModel';
import users from '../../schema/users';

class userModel extends Models{
    constructor(){
        super(users)
    }

}

module.exports=userModel