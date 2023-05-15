import "./Header.css";

export default function Header({handleSubmit, newTask, setNewTask, handleDeleteAll}) {
    return <header>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
            <input value={newTask} placeholder="New task..." onChange={e => setNewTask(e.target.value)} />
        </form>
        <div className="menu-bar">
            <span className="material-icons">info</span>
            <p>Click on task to edit</p>
            <button onClick={handleDeleteAll}>Delete all</button>
        </div>
    </header>
}