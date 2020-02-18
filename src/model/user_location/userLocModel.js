import Models from '../../classes/classModel';
import usersLoc from '../../schema/user_location';
// import USERS from '../../schema/users';
import {createUserLocation} from '../../lib/masterCache';
import m from 'mongoose';

class userLocModel extends Models{
    constructor(){
        super(usersLoc)
    }

    async setLocation(body, udata){
        return await createUserLocation(body, udata)
    }

}

module.exports=userLocModel