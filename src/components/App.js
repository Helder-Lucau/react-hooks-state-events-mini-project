import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [categories , setCategories] = useState(CATEGORIES)

  function handleTaskItem(task) {
    const taskItem = [...tasks, task];
    setTasks(taskItem)
  }
  
  const deleteTask = (task) => {
    setTasks(tasks.filter(taskItem => {
      return taskItem.text !== task
    }))
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm categories={categories} addNewTask={handleTaskItem}/>
      <TaskList tasks={tasks} deleteButton={deleteTask}/>
    </div>
  );
}

export default App;
