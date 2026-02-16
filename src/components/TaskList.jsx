import TaskItem from './TaskItem';

export default function TaskList({ title, icon, tasks, onMove, onDelete }) {
  return (
    <div className="task-list">
      <h2>
        <span className="list-icon">{icon}</span>
        {title}
        <span className="task-count">{tasks.length}</span>
      </h2>
      {tasks.length === 0 ? (
        <p className="empty-message">אין משימות</p>
      ) : (
        <div className="tasks">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onMove={onMove}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
