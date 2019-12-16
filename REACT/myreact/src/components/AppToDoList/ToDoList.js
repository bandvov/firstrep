import React from "react";
import ToDoListItem from "../ToDoListItem";
import "./ToDoList.css";

export default function ToDoList({
  todos,
  onDeleted,
  onToggleDone,
  onToggleImportant
}) {
  const elements = todos.map(item => {
    const { id, ...itemsProps } = item;
    return (
      <li key={id} className="list-group-item">
        <ToDoListItem
          {...itemsProps}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
        />
      </li>
    );
  });
  return <ul className="list-group  todo-list">{elements}</ul>;
}
