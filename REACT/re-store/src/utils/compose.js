const compose =(...func)=>(comp)=>{
    console.log('func',func);
    console.log('comp',comp);
    
return func.reduceRight((wrapped,f)=>f(wrapped),comp);
}
export default compose;
