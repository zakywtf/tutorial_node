import bcrypt from 'bcryptjs'
import users from '../schema/users'
import company from '../schema/company'

const signup = async(body) => {
    body.password = bcrypt.hashSync(body.password+process.env.SALT, 10);
    let userData = new users(body)
    // console.log(body.role);
    let user = await userData.save()
    if(body.role == 2){
        let cmpny = new company({...body, userId : user._id})
        await cmpny.save()
    }
    return true
}

module.exports ={
    signup
}