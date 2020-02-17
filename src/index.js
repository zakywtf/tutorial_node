import xpress from 'express'
import dotenv from 'dotenv'
import log from './controller/log'
import users from './controller/users/usersCtrl'
import company from './controller/company/companyCtrl';
import login from './controller/login'
import signup from './controller/signup'
import vehicles from './controller/vehicles/vehiclesCtrl'
import reviews from './controller/review/reviews'
import add_review from './controller/review/add_review'
import { connectDb } from './config/db';
import bodyParser from 'body-parser'
import validateToken from './lib/validateToken';

let app = xpress()
dotenv.config()

var server   = require('http').Server(app);
var io       = require('socket.io')(server);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req,res,next){
  req.io = io;
  next();
});

app.get('/', (req, res)=>{
    res.end('Hello world!')
})
// app.use('/names', (req,res,next)=>{
//     res.json()
// })

app.use('/api/login', login)
app.use('/api/signup', signup)

app.use('/api/v1/', validateToken)

app.use('/api/v1/log', log)
app.use('/api/v1/users', users)
app.use('/api/v1/company', company)
app.use('/api/v1/vehicles', vehicles)
app.use('/api/v1/reviews', reviews)
app.use('/api/v1/add_review', add_review)

io.on('connection', function (socket) {
  socket.emit('tes')
});

app.get('/test/emit/:data',(req,res)=>{
  req.io.sockets.emit(req.params.data);
})

connectDb().then(async () => {
    app.listen(process.env.PORT, '127.0.0.1', () =>
      console.log(`Server connet on port ${process.env.PORT}`),
    );
});