let util = require('util');

function oldFunction() {
    console.log('this is old');    
}
function newFunction() {
    console.log('this is new one');    
}
module.exports.of = util.deprecate(oldFunction,'this is depricate');
module.exports.nf= newFunction; 