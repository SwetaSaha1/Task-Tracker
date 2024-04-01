import React from 'react';
import TaskItem from './TaskItem';

const CompletedBox = ({ completedTasks, onEdit, onDelete, onAssign }) => {
  return (
    <div className="box">
      <div className="box-title">Completed</div>
      {completedTasks.map((task) => (
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

export default CompletedBox;