
import './App.css';
import TodoName from './components/TodoName';
import AddTodo from './components/AddTodo';
import TodoItems from './components/TodoItems';
import TodoItem from './components/TodoItem';
import "bootstrap/dist/css/bootstrap.min.css";
import WelcomeMessage from './components/WelcomeMessage';
import { useState } from 'react';

function App() {
  
  const [todoItems,setTodoItems] = useState([])

  const handleTodoItems = (todoName,dueDate) =>{
    const newtodoItems = [...todoItems,{name:todoName,duedate:dueDate}]
    setTodoItems(newtodoItems)
  }
  const handleDeletButton = (todoName) =>{
    const newtodoItems = todoItems.filter(item => item.name != todoName )
    setTodoItems(newtodoItems)
  }
  return (
    <center>
      <TodoName/>
      <AddTodo onNewItem={handleTodoItems}/>
      {todoItems.length === 0 && <WelcomeMessage/>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeletButton}/>      
    </center>
  )
}
export default App;
