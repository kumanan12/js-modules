    
// import {name, add,sub,divide } from "./my-math.js";
const calculator = require('./my-math');
const myUtils = require('./utils');
const _array = require('lodash/array');
const myMoment = require('moment')

console.log(myMoment().subtract(3, 'days').format('MM/DD/YYYY'));

// console.log(calculator.add(2,3));
// console.log(calculator.sub(3,2));
// console.log(calculator.divide(12,3));
// console.log('name is ',calculator.name);
// console.log('kumanan is now', myUtils.upperCase('kumanan'));
// const numbers = [3,4,5,1,1,2,2,3,4];
// const uniqueNumbers = _array.uniq(numbers);
// console.log(uniqueNumbers);