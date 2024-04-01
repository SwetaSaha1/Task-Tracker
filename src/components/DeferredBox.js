import React from 'react';
import TaskItem from './TaskItem';

const DeferredBox = ({ deferredTasks }) => {
  return (
    <div className="box">
      <div className="box-title">Deferred</div>
      {deferredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default DeferredBox;