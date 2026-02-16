import { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { LISTS, LIST_ORDER } from './constants';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useLocalStorage('gtd-tasks', []);
  const [activeList, setActiveList] = useState('inbox');

  const addTask = (text) => {
    const newTask = {
      id: crypto.randomUUID(),
      text,
      list: 'inbox',
      createdAt: Date.now(),
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const moveTask = (taskId, newList) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, list: newList } : t))
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
  };

  const filteredTasks = tasks.filter((t) => t.list === activeList);

  return (
    <div className="app">
      <header className="app-header">
        <h1>ניהול משימות GTD</h1>
        <TaskInput onAdd={addTask} />
      </header>

      <nav className="sidebar">
        {LIST_ORDER.map((listId) => {
          const list = LISTS[listId];
          const count = tasks.filter((t) => t.list === listId).length;
          return (
            <button
              key={listId}
              className={`nav-item ${activeList === listId ? 'active' : ''}`}
              onClick={() => setActiveList(listId)}
            >
              <span className="nav-icon">{list.icon}</span>
              <span className="nav-name">{list.name}</span>
              {count > 0 && <span className="nav-count">{count}</span>}
            </button>
          );
        })}
      </nav>

      <main className="main-content">
        <TaskList
          title={LISTS[activeList].name}
          icon={LISTS[activeList].icon}
          tasks={filteredTasks}
          onMove={moveTask}
          onDelete={deleteTask}
        />
      </main>
    </div>
  );
}
