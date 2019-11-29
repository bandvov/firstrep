import React from 'react';

const composer=(...func)=>(comp)=>{
    return func.reduceRight((prevResult,f)=>f(prevResult),comp);
}
export default composer;