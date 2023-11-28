import React from 'react'
import TaskProps from './TaskProps'

let tasksList = [
    new TaskProps("Tâche 1"),
    new TaskProps("Tâche 2"),
    new TaskProps("Tâche 3"),
    new TaskProps("Tâche 4")
]

function TaskList() {
  return <>
    {tasksList.map((task,index) =>(
        task.taskname
    ) )}
  </>
    
}

export default TaskList