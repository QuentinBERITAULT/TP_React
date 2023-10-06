import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function App() {
    const [count, setCount] = React.useState(0);
    const [taskName, setTaskName] = React.useState('');
    const [tasks, setTasks] = React.useState([]);
  
    const addTask = () => {
      if (taskName) {
        setTasks([...tasks, taskName]); // Ajoute la tâche dans le tableau
        setTaskName(''); // Efface le champ de texte après ajout
        setCount(count + 1); // Met à jour le compteur
      }
    };

    const removeTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks); 
        setCount(count - 1); 
      };
  
    return (
      <div className='container'>
        <p>You have {count} Todos</p>
        {tasks.length > 0 && (
                <div style={{ border: '1px solid red', padding: '10px', marginTop: '10px' }}>
                  <h2>All Tasks:</h2>
                  <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            {task}
                            <button onClick={() => removeTask(index)}>Supprimer</button>
                        </li>
                    ))}
                  </ul>
                </div>
              )}
        <input
          type='text'
          placeholder='Enter task'
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button onClick={addTask}>Submit</button>
  
        
      </div>
    );
  }
  
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);