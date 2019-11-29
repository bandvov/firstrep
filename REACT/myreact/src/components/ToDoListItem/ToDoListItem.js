import React from "react";
import "./ToDolIstItem.css";

export default class ToDoListItem extends React.Component {

  render() {
    
    console.log(this.props);
    
    const { label,onDeleted,onToggleDone, onToggleImportant, tant,done } = this.props;
    let classNames = "list-group-item";
    if (done) {
      classNames += " done";
    }
    if (tant) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span className="list-group-item-label" onClick={onToggleDone}>
          {label}
        </span>
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant} 
        >
          <i className="fa fa-exclamation" />
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right" onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
// the same in function
//  destructuring -- props => {label:'label'}
// function ToDoListItemFunc({ label, tant = false }) {
// let style = {
//   color: tant ? "tomato" : "black"
// };
// return (
//   <span className="list-group-item">
//     <span className="list-group-item-label" style={style}>
//       {label}
//     </span>
//     <button
//       type="button"
//       className="btn btn-outline-success btn-sm float-right"
//     >
//       <i className="fa fa-exclamation" />
//     </button>
//     <button
//       type="button"
//       className="btn btn-outline-danger btn-sm float-right"
//     >
//       <i className="fa fa-trash-o" />
//     </button>
//   </span>
// );
// }
