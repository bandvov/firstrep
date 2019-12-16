import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./action";
import { objectMethod } from "@babel/types";

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron d-flex">
      <h2 id="counter">{counter}</h2>
      <button className="btn btn-primary btn-lg" id="dec" onClick={dec}>
        DEC
      </button>
      <button className="btn btn-primary btn-lg" id="inc" onClick={inc}>
        INC
      </button>
      <button className="btn btn-primary btn-lg" id="rnd" onClick={rnd}>
        RND
      </button>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    counter: state
  };
};


//    connect creates new component  "wrapper"  for Counter.
// it takes needed parameters from store and pass them to Counter
// if secon argument is object, function connect will bind itself

export default connect(mapStateToProps, actions)(Counter);
