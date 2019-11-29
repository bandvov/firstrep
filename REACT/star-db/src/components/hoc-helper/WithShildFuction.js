import React from 'react';

const withChildFunction = fn => Wrapped => {
    return props => {
      console.log("withChildFunction props", props);
  
      return <Wrapped {...props}>{fn}</Wrapped>;
    };
  };
  export default withChildFunction;