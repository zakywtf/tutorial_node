import xpress from 'express'
import dotenv from 'dotenv'
import log from './controller/log'
import users from './controller/usersCtrl'
import company from './controller/companyCtrl';
import userLoc from './controller/userLocCtrl';
import login from './controller/login'
import signup from './controller/signup'
import vehicles from './controller/vehiclesCtrl'
import reviews from './controller/reviewsCtrl'
import { connectDb } from './config/db';
import bodyParser from 'body-parser'
import validateToken from './lib/validateToken';
import distance from 'geo-distance';
import {loadFirstData, getLocationIdx} from './lib/masterCache'
import moment from 'moment';

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
  var message = 'Hello World!'
  res.send(message);
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
app.use('/api/v1/user_location', userLoc)

io.on('connection', function (socket) {
  socket.emit('tes')
});

app.get('/test/distance',(req,res)=>{
  console.log('1 : ' + distance('50 km').human_readable());

  var Oslo = {
    lat: -7.2966855,
    lon: 112.7509655
  };
  var Berlin = {
    lat: -7.3063715,
    lon: 112.7535906
  };
  var OsloToBerlin = distance.between(Oslo, Berlin);

  console.log('2 : ' + OsloToBerlin.human_readable());
  if (OsloToBerlin > distance('1 km')) {
    console.log('Nice journey!');
  }
})

app.get('/test/locationidx',(req,res)=>{
  var data = getLocationIdx()['5e4a3ef64123a126c0871cd1']
  console.log({data});
  
})

app.get('/test/moment', (req, res) => {
  var diff = moment.duration(moment(moment().format('YYYY-MM-DD HH:mm:ss')).diff(moment(moment('2020-03-11 17:35:36.000+07:00').format('YYYY-MM-DD HH:mm:ss'))))
  // var diff = moment('2020-03-11 11:35:36.000+07:00'.diff(moment())).utcOffset(0).format('YYYY-MM-DD HH:mm:ss');
  var estimate = diff._data
  var output = Object.entries(estimate).map(([key, value]) => ({key,value}));
  var arr = [];
  for (let i = 0; i < output.length; i++) {
    const element = output[i];
    if(element.value != 0){
      arr.push(i)
    }
  }
  var max = Math.max(...arr);
  console.log({max:max, output:output[max]});
  res.json(`Last online ${output[max].value} ${output[max].key} ago`)
})

connectDb().then(async () => {
    loadFirstData()
    app.listen(process.env.PORT, '127.0.0.1', () =>
      console.log(`Server connet on port ${process.env.PORT}`),
    );
});