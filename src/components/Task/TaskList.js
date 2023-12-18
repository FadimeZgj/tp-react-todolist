import React, { useEffect, useState } from "react";
import NewTaskForm from "./NewTaskForm";
import Task from "./Task";

function TaskList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    // Récupérer les tâches depuis le localStorage au chargement initial
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setList(storedTasks);
  }, []);

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

    // Mise à jour du localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedList));
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
