import React from "react";

function Task({text, category, deleteButton}) {

  function handleDeleteTask() {
    deleteButton(text)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteTask}>X</button>
    </div>
  );
}

export default Task;
