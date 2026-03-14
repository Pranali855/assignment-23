import {useEffect, useState} from 'react';
import TaskCard from './TaskCard.js';
import NotFound from './assets/NotFound.png';

function App() {
const [tasks, setTasks] = useState([]);
const [newTak , setNewTask] = useState("");

useEffect(() => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")); 
  if (savedTasks) {
    setTasks(savedTasks);
  }
}, []);
const savedTasks = (tasks) =>{
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
 const addtask=()=>{
  if(newTak.trim())return;
  const updatedTasks = [...tasks, newTak];
  setTasks(updatedTasks);
  savedTasks(updatedTasks);
   setNewTask("");
 };
 constdeleteTask=(taskName)=>{
  const filteredTasks = tasks.filter((t)=> t !== taskName);
  setTasks(filteredTasks);
  savedTasksLocalStorage(filteredTasks);
 };

 return(
  <div className='min-h-screen bg-[#f5f6fa] flex flex-col justify-center px-4 py-8'>
    <h2 className='text-center text-3xl font-bold text-[#333] mb-6 max-sm:text-[26px]'>Todo App</h2>
    <p className='text-center text-[#6c6c8a] mb-6 max-sm:text-[14px] max-sm:mb-[18px]'>Add your tasks </p>
 <div className='p-5 w-[480px] h-[50vh] overflow-y-auto max-auto mb-5 rounded-2xl bg-white
 shadow-[0_12px_30px_rgba(0,0,0,0.2)]
 max-sm:w-full max-sm:h-[55vh] max-sm:p-4 max-sm:rounded-[14px]'>
 );


  export default App;