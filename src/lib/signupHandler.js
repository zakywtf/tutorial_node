import bcrypt from 'bcryptjs'
import users from '../schema/users'
import userDetail from '../schema/user_detail'

const signup = async(body) => {
    body.password = bcrypt.hashSync(body.password+process.env.SALT, 10);
    let user = new users(body)
    // console.log(body.role);
    let result_user = await user.save()
    if(body.role == 2){
        let user_detail = new userDetail({...body, user_data : result_user._id})
        await user_detail.save()
        return true
    }
}

module.exports ={
    signup
}