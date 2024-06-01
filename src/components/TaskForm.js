import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './TaskForm.css';

function TaskForm() {
  const { addTask } = useContext(GlobalContext);
  const [task, setTask] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!task) errors.task = "A tarefa é obrigatória";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      addTask(task);
      setTask('');
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="form-group">
        <label>Tarefa:</label>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        {errors.task && <span className="error">{errors.task}</span>}
      </div>
      <button type="submit" className="btn">Adicionar Tarefa</button>
    </form>
  );
}

export default TaskForm;
