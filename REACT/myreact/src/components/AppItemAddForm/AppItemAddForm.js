import React from "react";
import "./AppItemAddForm.css";

export default class AppItemAddForm extends React.Component {
  
  state = {
    label: ""
  };
  onLabelChange = evt => {
    this.setState({ label: evt.target.value });
  };
  onSubmit = e => {
    this.props.onItemAdded(this.state.label);
    e.preventDefault();
    this.setState({ label: "" });
  };
  render() {
    return (
      <form className="d-flex item-add-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          onChange={this.onLabelChange}
          value={this.state.label}
        />
        <button type="submit" className="btn btn-outline-secondary">
          add item
        </button>
      </form>
    );
  }
}
