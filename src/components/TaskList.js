import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteButton }) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, index) => {
        return <Task key={index} text={task.text} category={task.category} deleteButton={deleteButton} />
      })}
    </div>
  );
}

export default TaskList;
