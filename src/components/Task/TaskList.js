import React, { useState } from "react";
import TaskProps from "./TaskProps";
import NewTaskForm from "./NewTaskForm";
import Task from "./Task";

// liste des tâches
let tasksList = [
  new TaskProps(0, "Tâche 1"),
  new TaskProps(1, "Tâche 2"),
];

function TaskList() {
  const [list, setList] = useState(tasksList);

  // Ajout d'une nouvelle tâche
  const handleNewTask = (data) => {
    let newTaskList = [...list]; // clonage de la liste
    newTaskList.push(data); // ajout de la nouvelle tâche dans la liste clonée
    setList(newTaskList); // changement de l'état de la liste avec le tableau cloné
  };

  // supression d'une tâche
  const handleTaskDelete = (id) => {
    let newTaskList = [...list];
    newTaskList = newTaskList.filter((elem) => elem.id !== id);
    setList(newTaskList);
  };
  
  return (
    <>
      <div className="row">
        <div className="col-6 mb-4">
        <NewTaskForm onSubmit={(data) => handleNewTask(data)} />
        </div>
        <ul className="list-group text-center">
          {list.map((task) => (
            <li className="list-group-item" key={task.id} style={{backgroundColor: task.isCompleted ? "green" : ""}}>
              <Task
                id={task.id}
                taskProps={task}
                onDelete={() => handleTaskDelete(task.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TaskList;
