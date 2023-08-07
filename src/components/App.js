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
  
  const deleteTask = (index) => {
    const newTaskArray = tasks.filter((task) => task.index !== index);
    setTasks(newTaskArray)
  }

  // const taskToDisplay = tasks.filter((task) => {
  //   if (categories === "All") {
  //     return true;
  //   } else {
  //     return task.category === categories;
  //   }
  // });

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
