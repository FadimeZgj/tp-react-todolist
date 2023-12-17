import React, { useState } from "react";
import TaskProps from "./TaskProps";
import NewTaskForm from "./NewTaskForm";
import Task from "./Task";

// Liste des tâches initiale
let tasksList = [
  new TaskProps(0, "Tâche 1"),
  new TaskProps(1, "Tâche 2"),
];

function TaskList() {
  const [list, setList] = useState(tasksList);

  // Ajout d'une nouvelle tâche
  const handleNewTask = (data) => {
    let newTaskList = [...list];
    newTaskList.push(data);
    setList(newTaskList);
  };

  // Suppression d'une tâche
  const handleTaskDelete = (id) => {
    let newTaskList = [...list];
    newTaskList = newTaskList.filter((elem) => elem.id !== id);
    setList(newTaskList);
  };

  // Edition d'une tâche
  const handleTaskEdit = (id, updatedTaskName) => {
    // Recherche de l'élément à éditer
    const updatedList = list.map((item) =>
      item.id === id ? { ...item, taskname: updatedTaskName } : item
    );
    setList(updatedList); //maj de l'état de list
  };

  return (
    <>
      <div className="row">
        <div className="col-6 mb-4">
          <NewTaskForm onSubmit={(data) => handleNewTask(data)} />
        </div>
        <ul className="list-group text-center">
          {list.map((task) => (
            <li className="list-group-item" key={task.id} style={{ backgroundColor: task.isCompleted ? "green" : "" }}>
              <Task
                id={task.id}
                taskProps={task}
                onDelete={() => handleTaskDelete(task.id)}
                onEdit={(id, updatedTaskName) => handleTaskEdit(id, updatedTaskName)}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TaskList;
