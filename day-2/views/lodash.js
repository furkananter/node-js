const _ = require('lodash');

const nums = [23,45,65,89]

_.each(nums, (val,keys) => {
    console.log(keys);
})

const num = _.random(0,23)
console.log(num)

const greeting = _.once(() => {console.log("merhaba")})
greeting()