import { useState } from 'react'
import './App.css'

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
        <div className="todo">
          <div className="content">
            <p>{todo.text}</p>
            <p className='category'>({todo.categoria})</p>
          </div>
          <div>
            <button>Completar</button>
            <button>X</button>
          </div>
        </div>
        
      ))}
    </div>
  </div>
}

export default App
