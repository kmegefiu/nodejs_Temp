//modules - encasulated code(on share the minimum)

const names = require('./4-name')
const sayH = require('./5-utils')
const Alternative = require('./6-Alternative_Synthax')
require('./7-mind_Grenade')

console.log(Alternative);


const sayHi = (name)=>{
    console.log(`Hello there ${name}`);
}

sayHi(names.john)
sayHi(names.john)

sayH(names.john)