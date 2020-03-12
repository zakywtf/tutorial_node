import moment from 'moment';

const getLastOnline=async(lastOnline)=>{
    var diff = moment.duration(moment(moment().format('YYYY-MM-DD HH:mm:ss')).diff(moment(moment(lastOnline).format('YYYY-MM-DD HH:mm:ss'))))
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
  // console.log({max:max, output:output[max]});
  return `Last online ${output[max].value} ${output[max].key} ago`
};


module.exports = {
    getLastOnline
}