import fetch from 'node-fetch';
import USERLOC from '../schema/user_location';
import LOGUSER from '../schema/log_user';
import REVIEWS from '../schema/reviews'
import distance from 'geo-distance';
import m from 'mongoose';

const LOCATION_IDX={}

const getData=async(url)=>await fetch(url).then(resp=>resp.json()).then(json=>json).catch(error=>error);

const getGeoLocation = async(userAgent) => {
    try {
        var body = await getData(process.env.GEO_LOCATION);
        var createLog = await createLogUsers(body, userAgent)
        return createLog
    } catch (error) {
        throw error;
    }
}

const createLogUsers = async(body, userAgent) => {
    var obj = {
        ...body, 
        location:{
            lat:body.latitude, 
            lon:body.longitude
        },
        user_agent:{
            browser:userAgent.browser,
            version:userAgent.version,
            os:userAgent.os,
            platform:userAgent.platform,
            source:userAgent.source
        }
    }
    // console.log({obj});
    
    var uLog = new LOGUSER(obj)
    await uLog.save()
}

const loadFirstData = async() => {
    // console.log('ini bisa');
    
    const getLocation = async() => {
        return await USERLOC.find({})
    }

    const cacheLocation = async() => {
        var locs = await getLocation()
        // console.log({locs});
        
        for (let i = 0; i < locs.length; i++) {
            const loc = locs[i];
            // console.log({loc});
            var location = {lat:loc.location.lat, lon:loc.location.lon}
            LOCATION_IDX[`${loc.userId.id}`] = location
        }
    }

    await cacheLocation()
    console.log({LOCATION_IDX});

}

const createUserLocation = async(body, udata) => {
    var checkUser = await USERLOC.findOne({userId:m.Types.ObjectId(udata.id)})
    console.log({udata,checkUser,body});

    var obj = {...body, userId:udata.id, updatedAt:Date.now()}
    var location = {lat:body.location.lat, lon:body.location.lon}
    if(checkUser){
        await USERLOC.findByIdAndUpdate(checkUser.id, obj)
        // console.log({userId:obj.userId});
        
        LOCATION_IDX[`${obj.userId}`] = location
    }else{
        var uLoc = new USERLOC(obj)
        await uLoc.save()
        LOCATION_IDX[`${obj.userId}`] = location
    }
    return true
}

const getVehiclesByRadius = async(udata, vehicles) => {
    var resp = []
    for (let ii = 0; ii < vehicles.length; ii++) {
        const vehicle = vehicles[ii];
        // console.log({vehicle});
        var userAddrs = LOCATION_IDX[`${udata.id}`]
        var compAddrs = {lat:vehicle.companyId.company_address.lat, lon:vehicle.companyId.company_address.lon}
        var dstc = await distance.between(userAddrs, compAddrs);
        if(dstc < distance('10 km')){
            console.log({userAddrs, compAddrs, distnc:dstc});
            // return vehicle
            resp.push(vehicle)
        } 
    }

    return resp
}

const getReviews = async(vehicleId) => {
    var datas = await REVIEWS.find({vehicleId:m.Types.ObjectId(vehicleId)})
    var result = 0
    var avg = 0
    for (let i = 0; i < datas.length; i++) {
        const data = datas[i];
        result += data.rating
        avg = i+1
    }
    console.log({total:result/avg});
    
    return {reviewsData:datas, totalRating:result/avg}
}

const getLocationIdx=()=>LOCATION_IDX

module.exports = {
    loadFirstData,
    createUserLocation,
    getLocationIdx,
    getGeoLocation,
    getVehiclesByRadius,
    getReviews
}