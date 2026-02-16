import { LISTS, LIST_ORDER } from '../constants';

export default function TaskItem({ task, onMove, onDelete }) {
  return (
    <div className="task-item">
      <span className="task-text">{task.text}</span>
      <div className="task-actions">
        <select
          value={task.list}
          onChange={(e) => onMove(task.id, e.target.value)}
        >
          {LIST_ORDER.map((listId) => (
            <option key={listId} value={listId}>
              {LISTS[listId].icon} {LISTS[listId].name}
            </option>
          ))}
        </select>
        <button className="delete-btn" onClick={() => onDelete(task.id)} title="מחק">
          ✕
        </button>
      </div>
    </div>
  );
}
