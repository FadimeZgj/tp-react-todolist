import React, { useState } from "react";
import TaskProps from "./TaskProps";

function NewTaskForm({ onSubmit }) {
  const [task, setTask] = useState({ taskname: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { taskname } = e.target;
    console.log(taskname.value);
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
