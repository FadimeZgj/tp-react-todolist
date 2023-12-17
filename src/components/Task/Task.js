import React, { useEffect, useState } from "react";

function Task({ taskProps, id, onDelete, onEdit }) {
  const [status, setStatus] = useState(taskProps.isCompleted);
  const [color, setColor] = useState("#fff");
  const [userInput, setUserInput] = useState(taskProps.taskname);

  // Changement du statut d'une tâche
  const handleChangeStatus = () => {
    setStatus(!status);
  };

  // Changement de la couleur du background selon le statut de la tâche
  useEffect(() => {
    setColor(status ? "#99c199" : "#fff");
  }, [status]);

  // suppression d'une tâche
  const handleDelete = () => {
    onDelete(id);
  };

  // Modification d'une tâche
  const handleEdit = () => {
    onEdit(id, userInput); // Modification ici pour transmettre la nouvelle valeur de l'input
  };

  return (
    <>
      <div className="p-2" style={{ backgroundColor: color }}>
        <p className="fs-4">{taskProps.taskname}</p>
        <small className="fw-bold">{status ? "Fait" : "En cours"}</small>
      </div>

      <div className="row">
      <button
        className={status ? "col-3 me-5 btn btn-warning" : "col-3 me-5 btn btn-success"}
        onClick={handleChangeStatus}
      >
        {status ? "Reprendre la tâche" : "Terminer la tâche"}
      </button>
      <div className="col-3">
      <input className="form-control" type="text" onChange={(e) => setUserInput(e.target.value)} value={userInput}></input></div>
      <button className="col-2 btn btn-outline-primary me-5" onClick={handleEdit}>Modifier</button>
      <button className="col-2 btn btn-outline-danger" onClick={() => handleDelete(id)}>
        Supprimer
      </button>
      </div>
    </>
  );
}

export default Task;
