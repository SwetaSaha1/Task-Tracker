import React from 'react';
import TaskItem from './TaskItem';

const DeferredBox = ({ deferredTasks, onEdit, onDelete }) => {
  return (
    <div className="box">
      <div className="box-title">Deferred</div>
      {deferredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default DeferredBox;