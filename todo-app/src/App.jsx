import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  return (
   <div className='todo-app'>
    <TodoList/>
   </div> 
  );
}

export default App
