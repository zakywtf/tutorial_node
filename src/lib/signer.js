import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import users from '../schema/users'
import {getGeoLocation} from '../lib/masterCache';

const sign = async(body) => {
    let user = await checkUser(body)
    // console.log({body,user});
    
    if(user){
        let payload = await createPayload(user)
        // console.log({payload});
        var geoLoc = await getGeoLocation()
        console.log({geoLoc});
        
        if(bcrypt.compareSync(body.password+process.env.SALT, user.password)) {
            return await createToken(payload)
        }else{
            throw new Error('Wrong password!')
        }
    }else{
        throw new Error('User not found!')
    }
}

const createToken = async(payload) => {
    return new Promise((resolve,rej)=>{
        jwt.sign({ payload }, process.env.SECRET_KEY, { algorithm: 'HS256', expiresIn: '1h'}, function(err, token) {
            if (err) {
                rej(err)
            }
            else { 
                resolve(token)
             }
        })   
    })
}

const checkUser = async(body) => {
    return await users.findOne({ username: body.username }).exec();
}

const createPayload = async(user) => {
    return {
        id:user.id, 
        username:user.username,
        firstName:user.first_name,
        lastName:user.last_name,
        address:user.address,
        telp:user.telp,
        role:user.role,
        email:user.email
    }
}

module.exports={
    sign
}