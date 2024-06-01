import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import TaskForm from '../components/TaskForm';
import ItemList from '../components/ItemList';
import './Home.css';

function Home() {
  const { tasks } = useContext(GlobalContext);

  return (
    <div className="home">
      <h1>Lista de Tarefas</h1>
      <TaskForm />
      <ItemList items={tasks.map((task, index) => ({ name: task, email: '' }))} />
    </div>
  );
}

export default Home;
