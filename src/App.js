import { useEffect, useState } from "react";

import "./App.css";
import Todo from "./Todo";
import { database } from "./firebase";
import { onValue, push, ref, remove, set, update } from "firebase/database";
import Header from "./Header";

export default function App() {
  const tasksRef = ref(database, "tasks")
  const [tasks, setTasks] = useState(null)

  useEffect(() => {
    return onValue(tasksRef, snapshot => {
      setTasks([])
      const data = snapshot.val()

      if (snapshot.exists()) {
        Object.values(data).map(taskObj => (
          setTasks(prev => [...prev, taskObj])
        ))
      }
    })
  }, [])
  // const [tasks, setTasks] = useState([
  //   { "id": 1, "task": "Read your Book" },
  //   { "id": 2, "task": "Apply for a Scholarship" },
  //   { "id": 3, "task": "Search for Jobs" },
  //   { "id": 4, "task": "Solve Olympiad Questions" }
  // ])

  const [newTask, setNewTask] = useState("")

  function handleSubmit(e) {
    e.preventDefault();

    const newTaskRef = push(tasksRef)
    set(newTaskRef, { "id": newTaskRef.key, "task": newTask })

    // setTasks(prev => [...prev, { "id": uuid(), "task": newTask }])
    setNewTask("")
  }

  function handleDelete(id) {
    const taskRef = ref(database, "tasks/" + id)
    remove(taskRef)
  }

  function handleDeleteAll() {
    remove(tasksRef)
  }

  function handleEdit(id, task) {
    const taskRef = ref(database, "tasks/" + id)
    update(taskRef, { "task": task })
  }

  return <div className="app">
    <Header handleSubmit={handleSubmit} handleDeleteAll={handleDeleteAll} newTask={newTask} setNewTask={setNewTask} />
    
    {tasks === null && <p className="info">Loading...</p>}
    {tasks && tasks.length === 0 && <p className="info">No pending tasks.</p>}
    {tasks !== null && <div className="tasks">{tasks.map(task =>
      <Todo key={task.id} task={task} onEdit={handleEdit} onDelete={handleDelete} />
    )}</div>}
    
    <footer>
      <p>Made by David3Emmanuel</p>
      <a id="github" href="https://www.github.com/david3emmanuel">
        <img src="/github.ico" alt="Github" />
      </a>
    </footer>
  </div>
}