import React, { useEffect, useState } from "react";

function Task({ taskProps, id, onDelete }) {
  const [status, setStatus] = useState(taskProps.isCompleted); // état du statut de la tâche 
  const [color, setColor] = useState("#fff"); // état de la couleur de fond initiale 

  // changer le statut de la tâche
  const handleChangeStatus = () => {
    if (status === false) {
      setStatus(true);
    } else if (status === true) {
      setStatus(false);
    }
  };

  // changement de la couleur de fond en fonction du statut
  useEffect(() => {
    if (status === true) {
      setColor("#99c199");
    } else {
      setColor("#fff");
    }
  }, [status]);

  // supression d'une tâche
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <>
      <div className="p-2" style={{ backgroundColor: color }}>
        <p className="fs-4">{taskProps.taskname}</p>
        <small className="fw-bold">{status === false ? "En cours" : "Fait"}</small>
      </div>
      <button className={status?"col-3 me-5 btn btn-warning":"col-3 me-5 btn btn-success"} onClick={(e) => handleChangeStatus(e.target.value)}>
        {status ? "Reprendre la tâche" : "Terminer la tâche"}
      </button>
      <button className="col-3 btn btn-outline-danger" onClick={() => handleDelete(id)}>Supprimer</button>
    </>
  );
}

export default Task;
