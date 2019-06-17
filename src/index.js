import xpress from 'express'
import dotenv from 'dotenv'
import log from './controller/log'
import users from './controller/users'
import login from './controller/login'
import signup from './controller/signup'
import { connectDb } from './config/db';
import bodyParser from 'body-parser'


let app = xpress()

dotenv.config()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res)=>{
    res.end('Hello world!')
})
// app.use('/names', (req,res,next)=>{
//     res.json()
// })

app.use('/api/v1/log', log)
app.use('/api/v1/users', users)
app.use('/api/v1/login', login)
app.use('/api/v1/signup', signup)

connectDb().then(async () => {
    app.listen(process.env.PORT, '127.0.0.1', () =>
      console.log('Connected!!'),
    );
});