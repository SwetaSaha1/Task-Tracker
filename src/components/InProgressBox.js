import React from 'react';
import TaskItem from './TaskItem';

const InProgressBox = ({ inProgressTasks, onEdit, onDelete, onAssign }) => {
  return (
    <div className="box">
      <div className="box-title">In Progress</div>
      {inProgressTasks.map((task) => (
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

export default InProgressBox;