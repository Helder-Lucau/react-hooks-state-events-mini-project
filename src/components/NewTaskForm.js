import React, { useState } from "react";

function NewTaskForm({ categories, addNewTask }) {
  const [textData, setTextData] = useState("")

  function handleSubmit(event) {
    event.preventDefault();
    
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={(e) => setTextData[e.target.value]} value={textData} />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
