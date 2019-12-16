import React from "react";
import "./ItemList.css";
import PropTypes from 'prop-types';

const ItemList = (props) => {
  const { data, onItemSelected, children: renderLabel } = props;
console.log('itemlist props',props);

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

ItemList.propTypes={
  onItemSelected:PropTypes.func,
  data:PropTypes.arrayOf(PropTypes.object).isRequired,
  children:PropTypes.func.isRequired
}
  return (
    <div className="item-list">
      <ul className="list-group list-group-flush">{items}</ul>
    </div>
  );
};


export default ItemList;
