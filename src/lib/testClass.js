import {delay} from './testFunc'

class test {
    constructor(str='World')
    {
        this.str=str;
        console.log('constructor ',str);
    }

    exec(){
        console.log('Hello '+this.str);
    }

    async delay(ms)
    {
        console.log('sebelum delay ', new Date());

        await delay(ms)
        console.log('setelah delay ', new Date());
    }
}

module.exports=test