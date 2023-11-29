import React, { useState } from "react";
import TaskProps from "./TaskProps";
import NewTaskForm from "./NewTaskForm";

let tasksList = [
  new TaskProps("Tâche 1"),
  new TaskProps("Tâche 2"),
  new TaskProps("Tâche 3"),
  new TaskProps("Tâche 4"),
];

function TaskList() {
  const [list,setList] = useState(tasksList)

  const handleNewTask = (data)=>{
    let newTaskList = [...list]
    newTaskList.push(data)
    setList(newTaskList)

  }
  return (
    <>
      <NewTaskForm onSubmit={(data)=>handleNewTask(data)}/>
      {list.map((task, index) => task.taskname)}
    </>
  );
}

export default TaskList;
