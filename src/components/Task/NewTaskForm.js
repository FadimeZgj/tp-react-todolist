import React, { useState } from "react";
import TaskProps from "./TaskProps";

function NewTaskForm({ onSubmit }) {
  const [task, setTask] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();

    const { taskname } = e.target;
    let newTask = new TaskProps(taskname.value)
    setTask(newTask)
    
    onSubmit(newTask)
    e.target.reset()
  };


  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Ajouter une nouvelle tâche</label>
        <input type="text" name="taskname" />
        <button>Ajouter</button>
      </form>
    </>
  );
}

export default NewTaskForm;
