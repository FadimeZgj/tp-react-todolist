import React from 'react'

function Task({taskProps, id, onDelete}) {

  const handleDelete =()=>{
    onDelete(id)
  }

  return <>
  {taskProps.taskname}
  <button onClick={handleDelete}>Supprimer</button>
    </>
  
}

export default Task