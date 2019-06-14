import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const validateToken = async (req, res, next) => {
    const token = req.headers.token
    if (!token)
        return res.status(404).send({ error: 1, message: 'No token provided.' });
        try{
            const decode = jwt.verify(token,process.env.SECRET_KEY,{algorithms:"HS256"})
            next()
        } catch(err){
            return res.status(404).send({ error: 1, message: err });
        }
        
        // jwt.verify(token,process.env.SECRET_KEY,{algorithm: 'HS256'}, async function(err, decoded) {
        //     if (!err){
        //         next()
        //     } else{
        //         return res.status(404).send({ error: 1, message: 'Token Invalid' });
        //     }                    
        // }); 
}

module.exports = {validateToken,payload:"ttt"}