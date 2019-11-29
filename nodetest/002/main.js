let util = require('util');

function Base() {
  this.name = 'base functon';
}
Base.prototype.say = function() {
  console.log('hello this is %s function %d year old',this.name,this.age);
  
}
class Derived {
  constructor() {
    this.name = 'Derived';
    this.age=22;
  }
}
util.inherits(Derived,Base);
let deri= new Derived();
deri.say();
