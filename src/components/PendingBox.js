import React from 'react';
import TaskItem from './TaskItem';

const PendingBox = ({ pendingTasks, onEdit, onDelete, onAssign }) => {
  return (
    <div className="box">
      <div className="box-title">Pending</div>
      {pendingTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onAssign={onAssign}
        />
      ))}
    </div>
  );
};

export default PendingBox;