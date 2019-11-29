 import React from 'react';
 import './Row.css';
 import PropsTypes from 'prop-types';

 const Row = ({left, right}) => {
    return (
      <div className="d-flex row">
        <div className="left">
          {left}
        </div>
        <div className="right">
          {right}
        </div>
      </div>
    );
  };
  Row.propsTypes={
    left: PropsTypes.node,
    right:PropsTypes.node
  }
  export default Row;