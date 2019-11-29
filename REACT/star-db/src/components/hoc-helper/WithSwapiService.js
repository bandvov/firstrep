import React from "react";
import AppContext from "../SwapiServiceContext";

const withSwapiService =(mapMethodsToProps)=> (Wrapped) => {
  return props => {
    return (
      <AppContext.Consumer>
        {swapiService => {
          const serviceProps = mapMethodsToProps(swapiService);
          return <Wrapped {...props} {...serviceProps}></Wrapped>;
        }}
      </AppContext.Consumer>
    );
  };
};

export default withSwapiService;
