import jwt from 'jsonwebtoken'
import moment from 'moment';
import {getLastOnline} from '../lib/checkLastOnline';

const SESSION = []


const decode = async(token) => {
    return jwt.decode(token, {complete: true})
}

const idleTime = async() => {
    return parseInt(process.env.SESSION_TIME) * 60 * 1000 //menit
}

const createSession = async(token) => {
    var dc = await decode(token)
    var time = await idleTime()

    // console.log({dc});
    var udata = dc.payload.payload
    var cekSesi = await checkSession(udata)
    if(cekSesi == true){
        var datas = {
            udata:udata,
            session:true,
            isOnline:true,
            lastOnline:moment().format('YYYY-MM-DD HH:mm:ss')
        }
        setTimeout(()=>{
            deleteSession(udata)
        },time)  
        SESSION[`${udata.id}`]=datas
        // console.log({token, userId});
        console.log(SESSION, 'on addsession');

        return token
    }else{
        // return {error:401, message:`Anda sedanng login di device lain!`}
        throw new Error('Anda sedang login di user lain!')
    }
}

const deleteSession = async(udata) => {
    var datas = {
        udata:udata,
        session:false,
        isOnline:false,
        lastOnline:moment().format('YYYY-MM-DD HH:mm:ss')

    }
    SESSION[`${udata.id}`] = datas
    console.log(SESSION, 'sesi berakhir');

}

const checkSession = async(udata) => {
    var sessionData = SESSION[`${udata.id}`]
    console.log({sessionData});
    if(sessionData){
        return (sessionData.session === true)?false:true
    }else{
        return true
    }
}

const getSession=async(id)=>{
    // console.log({id});
    var data = SESSION[`${id}`]
    if(data != undefined){
        return (data.isOnline == true)?`Online`:await getLastOnline(data.lastOnline)
    }else{
        return `Offline`
    }
};


module.exports = {
    createSession,
    getSession
}