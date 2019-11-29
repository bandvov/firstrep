import React from "react";
import "./AppHeader.css";

export default class AppHeader extends React.Component {
  render() {
    let {done,todo} = this.props;
    return (
      <div className="app-header">
        <h1 className="top-panel">to do list</h1>
        <h2>{done} items done.  {todo} items to do
        </h2>
      </div>
    );
  }
}
