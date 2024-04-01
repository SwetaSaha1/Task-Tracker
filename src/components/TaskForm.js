// TaskForm.js
import React, { useState } from 'react';

function TaskForm({ onAdd, onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [team, setTeam] = useState('');
  const [assignee, setAssignee] = useState('');
  const [priority, setPriority] = useState('p2');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      description,
      team,
      assignee,
      priority,
      status: 'Pending',
      startDate: new Date(),
    };
    onAdd(newTask);
    setTitle('');
    setDescription('');
    setTeam('');
    setAssignee('');
    setPriority('p2');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ marginBottom: '10px', height: '100px' }}
        />
        <input
          type="text"
          placeholder="Team"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <input
          type="text"
          placeholder="Assignee"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={{ marginBottom: '10px' }}
        >
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
        </select>
        <button type="submit" style={{ alignSelf: 'flex-start' }}>
          Add Task
        </button>
      </form>
      <button onClick={onClose} style={{ marginTop: '10px' }}>
        Cancel
      </button>
    </div>
  );
}

export default TaskForm;