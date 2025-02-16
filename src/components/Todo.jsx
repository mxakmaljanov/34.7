import React, { useState } from 'react'
import imgpuls from "../assets/image/puls.svg"
import imgPercentage from "../assets/image/Percentage.svg"
import imgRatio from "../assets/image/Ratio.svg"
import '../index.css'
function Todo() {
    const [todos, setTodos] = useState([]);
    const [doneTodo, setDoneTodo] = useState([]);
    const [task, setTask] = useState("");

    function handleSubmit() {
        let copied = [...todos];
        copied.push(task);
        setTodos(copied)
        setTask('')
    }
    function handleDone(index) {
        const newTodos = [...todos];
        const doneTask = newTodos.splice(index, 1);
        setTodos(newTodos);
        setDoneTodo([...doneTodo, ...doneTask]);
    }
    function deleteTodo(index) {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }
    return (
   <div>
     <div className="container">
      <div className="todo-app">
        <div className="todo-post">
       <input
       value={task}     
     onChange={(e) => setTask(e.target.value)}
   className='post' type="text" placeholder='Ishni kiriting endi :)' />
  <button onClick={handleSubmit} className='button-puls'><img src={imgpuls} /></button>
 </div>
  <div className="section-todo">
  <h3>Tasks to do - {todos.length}</h3>
  {
     todos.length > 0 && todos.map(function (fd, index) {
     return (
    <div key={index} className="todo-item">
    <h4>{fd}</h4>
 <div className="button-task">
  <button className='gl' onClick={() => handleDone(index)}><img src={imgPercentage} /></button>
<button className='delete' onClick={() => deleteTodo(index)}>
    <img src={imgRatio} alt="Delete" />
 </button>
 </div>
 </div>
  )
 })
 }
 </div>
<div className="sectionDone">
<h3>Done - {doneTodo.length}</h3>
{
    doneTodo.length > 0 && doneTodo.map(function (done, index) {
return (
    <div key={index} className="todo-done">
        <h4>{done}</h4>
    </div>
 )
 })
  }
</div>
</div>
</div>
</div>
)
}
export default Todo;