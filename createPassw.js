// import crypto from 'crypto';
// import {salt} from './src/config/constant'
let dotenv = require('dotenv')
dotenv.config()

let crypto=require('crypto')
// let {salt, mongoUri} = require('./src/config/constant')

let mongoose =  require('mongoose');
let model = require('./src/schema/users')
// let dep = require('./src/schema/department')
var hash=crypto.createHmac('md5',process.env.SALT)

hash.update('S3mangat45678')
hash.update('admin')
let hashed=hash.digest('hex');
// console.log(hashed, mongoUri);

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true });
// const d = new dep({
//     title:'super',
//     subtitle:'admin',
//     deriver:[],
// })
// d.save()

const x = new model({
    username:'admin',
    password:hashed,
    email:'zakywtf@gmail.com',
    role:1
})
x.save()

model.find({},(err,resp)=>{
    console.log(resp, err, 'findone');
})


 