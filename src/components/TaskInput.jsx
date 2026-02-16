import { useState } from 'react';

export default function TaskInput({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText('');
  };

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="מה עובר לך בראש? הוסף לתיבת הקלט..."
        autoFocus
      />
      <button type="submit">הוסף</button>
    </form>
  );
}
