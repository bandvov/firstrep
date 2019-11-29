import React from "react";
import "./ItemDetails.css";
import ErrorButton from "../ErrorButton";

const Record = ({item,field, label}) => {
  return (
    <li className="list-group-item">
      <span>{label} </span>
      <span>{item[field]} </span>
    </li>
  );
};

export {
  Record
}

export default class ItemDetails extends React.Component {
  state = {
    item: null,
    image: null
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    console.log("updated");
    if (this.props.itemId !== prevProps.itemId ||this.props.getData !== prevProps.getData||this.props.getImageUrl!==prevProps.getImageUrl) {
      this.updateItem();
    }
  }

  updateItem() {
    const { getData, getImageUrl } = this.props;

    if (!this.props.itemId) {
      return;
    }

    getData(this.props.itemId).then(item => {
      this.setState({ item, image: getImageUrl(item) });
    });
  }
  render() {

    const { item, image } = this.state;
    if (!item) {
      return (
        <div className="details-placeholder">Select item from the list</div>
      );
    }
    return (
      <div className="d-flex person-details">
        
        <img src={image} />
        <ul className="list-group list-group-flush">
          <ErrorButton />
        {React.Children.map(this.props.children,(child)=>{
          return React.cloneElement(child,{item});
        })}
         
        </ul>
      </div>
    );
  }
}
