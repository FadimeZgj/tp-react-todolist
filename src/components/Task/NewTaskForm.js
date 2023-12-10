import React, { useState } from "react";
import TaskProps from "./TaskProps";

function NewTaskForm({ onSubmit }) {
  const [task, setTask] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();

    const { taskname } = e.target;
    let newTask = new TaskProps(Date.now(),taskname.value)
    setTask(newTask)
    onSubmit(newTask)
    e.target.reset()
  };


  return (
    <>
      <form className="form-group mb-3" onSubmit={(e) => handleSubmit(e)}>
        <label className="form-label">Ajouter une nouvelle tâche</label>
        <input className="form-control" type="text" name="taskname" />
        <button type="submit" className="btn btn-primary mt-3">Ajouter</button>
      </form>
    </>
  );
}

export default NewTaskForm;
