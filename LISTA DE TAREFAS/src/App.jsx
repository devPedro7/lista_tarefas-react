import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      categoria: "Trabalho",
      isComplete: false
    },
    {
      id: 2,
      text: "Ir na academia",
      categoria: "Pessoal",
      isComplete: false
    },
        {
      id: 3,
      text: "Comprar lembrancinha pra Mari",
      categoria: "Pessoal",
      isComplete: false
    }
  ])

  return <div className='app'>

    <h1>Lista de tarefas</h1>

    <div className='todo-list'>
      {todos.map((todo)=>(
      <Todo todo={todo}></Todo>
        
      ))}
    </div>
    <TodoForm>
      
    </TodoForm>
  </div>
}

export default App
