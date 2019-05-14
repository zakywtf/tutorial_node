import xpress from 'express'
import dotenv from 'dotenv'
import cnames from './controller/names'
import log_user from './controller/log_user'
import log from './controller/log'
import { connectDb } from './models/db';
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

app.use('/names', cnames)
app.use('/log_user', log_user)
app.use('/log', log)

connectDb().then(async () => {
    app.listen(process.env.PORT, '127.0.0.1', () =>
      console.log('Connected!!'),
    );
});