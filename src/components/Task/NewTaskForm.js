import React from "react";
import TaskProps from "./TaskProps";

function NewTaskForm({ onSubmit }) {

  // fonction envoie du formulaire
  const handleSubmit = (e) => {
    // annulation du comportement par défault du bouton submit
    e.preventDefault();

    const { taskname } = e.target;
    let newTask = new TaskProps(Date.now(),taskname.value) // instancie un nouvel objet TaskProps
    // Envoie du formulaire avec les données de l'état
    onSubmit(newTask)
    // effacer le contenu du input
    e.target.reset()
  };


  return (
    <>
      <form className="form-group mb-3" onSubmit={(e) => handleSubmit(e)}>
        <label className="form-label">Ajouter une nouvelle tâche</label>
        <input className="form-control" type="text" name="taskname" />
        <button type="submit" className="btn btn-primary mt-3">Ajouter</button>
      </form>
    </>
  );
}

export default NewTaskForm;
