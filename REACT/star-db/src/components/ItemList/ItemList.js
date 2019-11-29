import React from "react";
import "./ItemList.css";
import PropTupes from 'prop-types';

const ItemList = (props) => {
  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
    console.log('item in itemlist',item);
    
    const { id } = item;
    const label = renderLabel(item);
    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });
  ItemList.defaultProps ={
    onItemSelected:()=>{}
  }

ItemList.propTupes={
  onItemSelected:PropTupes.func,
  data:PropTupes.arrayOf(PropTupes.object).isRequired,
  children:PropTupes.func.isRequired
}

  return (
    <div className="item-list">
      <ul className="list-group list-group-flush">{items}</ul>
    </div>
  );
};


export default ItemList;
