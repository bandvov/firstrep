import React from "react";
import AppToDoList from "../AppToDoList";
import AppSearchPanel from "../AppSearchPanel";
import AppHeader from "../AppHeader";
import ItemsStatusFilter from "../AppItemsStatusFilter";
import AppItemAddForm from "../AppItemAddForm";
import "./App.css";

export default class App extends React.Component {
  maxId = 100;
  state = {
    toDoData: [
      this.createToDoItem("drink coffee"),
      this.createToDoItem("eat icecream"),
      this.createToDoItem("buy car")
    ],
    term: "",
    filter: ""
  };

  createToDoItem(label) {
    return {
      label,
      tant: false,
      done: false,
      id: this.maxId++
    };
  }

  deleteItem = id => {
    this.setState(({ toDoData }) => {
      let filteredToDoData = toDoData.filter(item => item.id !== id);
      console.log(filteredToDoData);
      return {
        toDoData: filteredToDoData
      };
    });
  };
  addItem = text => {
    let newItem = this.createToDoItem(text);
    this.setState(({ toDoData }) => {
      let newArr = [...toDoData, newItem];
      return {
        toDoData: newArr
      };
    });
  };
  updateValue = evt => {
    this.setState({ inputValue: evt.target.value });
  };

  toggleProperty = (arr, id, prop) => {
    const idx = arr.findIndex(el => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [prop]: !oldItem[prop] };
    console.log(newItem);

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  onToggleDone = id => {
    this.setState(({ toDoData }) => {
      return {
        toDoData: this.toggleProperty(toDoData, id, "done")
      };
    });
  };

  onToggleImportant = id => {
    this.setState(({ toDoData }) => {
      return {
        toDoData: this.toggleProperty(toDoData, id, "tant")
      };
    });
  };
  search = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.label.indexOf(term) > -1;
    });
  };
  onSearchChange = e => {
    let term = e.target.value;
    this.setState({ term });
  };
  filter = (items, filter) => {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter(item => !item.done);
      case "done":
        return items.filter(item => item.done);
        default: return items;
    }
  };
  onFilterChange=(filter)=>{
    this.setState({filter});
  }
  render() {
    console.log(this.state);
    
    const doneCount = this.state.toDoData.filter(el => el.done).length;
    const toDoCount = this.state.toDoData.length - doneCount;
    const visibleItems = this.filter(
      this.search(this.state.toDoData, this.state.term),
      this.state.filter
    );
    return (
      <div className="header d-flex">
        <div>
          <AppHeader done={doneCount} todo={toDoCount} />
          <div className="d-flex status-filter">
            <AppSearchPanel onSearchChange={this.onSearchChange} />
            <ItemsStatusFilter filter={this.state.filter} onFilterChange={this.onFilterChange}/>
          </div>

          <AppToDoList
            todos={visibleItems}
            onDeleted={this.deleteItem}
            onToggleDone={this.onToggleDone}
            onToggleImportant={this.onToggleImportant}
          />
          <AppItemAddForm
            onItemAdded={this.addItem}
          />
        </div>
      </div>
    );
  }
}
