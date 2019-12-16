import React from "react";
import "./ItemStatusFilter.css";

export default class ItemStatusFilter extends React.Component {
buttons = [
    {name:'all',label:'all'},
    {name:'active',label:'active'},
    {name:'done',label:'done'}
]

  render() {
      let buttons = this.buttons.map(({name,label})=>{
          const isActive = this.props.filter ===name;
          const clazz = isActive?'btn-info':'btn-outline-secondary';
        return(
            <button type="button" className={`btn ${clazz}`} key={name}  onClick={()=>this.props.onFilterChange(name)}>{label}</button>
        )
      })

   
    return <div className="btn-group buttons">{buttons}</div>;
  }
}
