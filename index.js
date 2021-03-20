const math = require('./math.js');
const os = require('os');

console.log(math.add(1,2));
console.log(math.substract(1,2));
console.log(math.multiply(1,2));
console.log(math.divide(1,2));
console.log(math.divide(1,0));

console.log(os.platform());
console.log(os.release());
console.log('free mem: ', os.freemem(), ' bytes');
console.log('total mem: ', os.totalmem(), ' bytes');