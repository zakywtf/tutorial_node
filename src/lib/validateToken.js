import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const validateToken = async (req, res, callback) => {
    let datas = {
        data:{}
    }
    const token = req.headers.token
    if (!token)
        return res.status(404).send({ error: 1, message: 'No token provided.' });
        try{
            const decode = jwt.verify(token,process.env.SECRET_KEY,{algorithms:"HS256"})
            datas.data = await callback(decode)
        } catch(err){
            return res.status(404).send({ error: 1, message: "Token Invalid" });
        }
    // res.json(datas.data)      
    return datas.data;  
}

module.exports = validateToken