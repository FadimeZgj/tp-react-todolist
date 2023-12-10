import React, { useEffect, useState } from "react";

function Task({ taskProps, id, onDelete }) {
  const [status, setStatus] = useState(taskProps.isCompleted);
  const [color, setColor] = useState("#fff");

  const handleChangeStatus = () => {
    if (status === false) {
      setStatus(true);
    } else if (status === true) {
      setStatus(false);
    }
  };

  useEffect(() => {
    if (status === true) {
      setColor("#99c199");
    } else {
      setColor("#fff");
    }
  }, [status]);

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <>
      <div className="p-2" style={{ backgroundColor: color }}>
        <p className="fs-4">{taskProps.taskname}</p>
        <small>{status === false ? "En cours" : "Terminée"}</small>
      </div>
      <button className="col-3 me-5 btn btn-success" onClick={(e) => handleChangeStatus(e.target.value)}>
        {status === false ? "Terminée" : "En cours"}
      </button>
      <button className="col-3 btn btn-outline-danger" onClick={() => handleDelete(id)}>Supprimer</button>
    </>
  );
}

export default Task;
