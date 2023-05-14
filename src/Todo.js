import { useState } from "react";
import "./Todo.css";

export default function Todo({ task:taskObj, onDelete, onEdit }) {
    const [edit, setEdit] = useState(false)
    const [task, setTask] = useState(taskObj.task)

    function handleEdit(e) {
        e.preventDefault()
        onEdit(taskObj.id, task)
        setEdit(false)
    }

    return <div className="todo">
        {edit && <form className="task-name" onSubmit={handleEdit}>
            <input value={task} onChange={e => setTask(e.target.value)} onBlur={handleEdit} />
        </form>}
        {!edit && <p className="task-name">{taskObj.task}</p>}
        <span className="edit material-icons" onClick={() => setEdit(true)}>edit</span>
        <span className="delete material-icons" onClick={() => onDelete(taskObj.id)}>delete</span>
    </div>
}