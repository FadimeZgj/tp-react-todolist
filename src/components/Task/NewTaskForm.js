import React, { useState } from "react";
import TaskProps from "./TaskProps";

function NewTaskForm({ onSubmit }) {

  const handleSubmit = (e) => {
    e.preventDefault();

    const { taskname } = e.target;
    let task = new TaskProps(taskname.value)
    
    onSubmit(task)

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
