import React from 'react';
import './SeacchPanel.css';

export default class SearchPanel extends React.Component {

render() {
    const {term,onSearchChange} = this.props;
return (
    <div className="d-flex search-main">
    <input type="text" placeholder="search"  value={term} onChange={onSearchChange}/>
    </div>
);
}
}
