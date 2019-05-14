function test(str='World'){
    console.log('ini bukan constructor', str);
    const exec = (str='ini')=>{
        console.log('hello'+str);
    }
    return {exec:exec}
}

function delay(ms)
{
    return new Promise((resolve, rejects)=>{
        setTimeout(resolve, ms)
    })
}

module.exports={test, delay}