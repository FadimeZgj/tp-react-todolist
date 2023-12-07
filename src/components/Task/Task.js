import React, { useEffect, useState } from 'react'

function Task({taskProps, id, onDelete}) {
  const [status, setStatus] = useState("En cours")
  const [color, setColor] = useState("#fff")

  const handleChangeStatus =()=>{
    if (status === "En cours") {
      setStatus("Terminée")
    } else if (status === "Terminée") {
      setStatus("En cours")
    }
    
  }
  
  useEffect(() => {
    if (status === "Terminée") {
      setColor("green")
    }else{
      setColor("#fff")
    }
  }, [status])
  

  const handleDelete =()=>{
    onDelete(id)
  }

  return <>
  <div style={{backgroundColor:color}}>
  {taskProps.taskname}
  {status}
  </div>
  <button onClick={(e)=>(handleChangeStatus(e.target.value))}>{status === "Terminée" ? "En cours":"Terminée"}</button>
  <button onClick={handleDelete}>Supprimer</button>
    </>
  
}

export default Task