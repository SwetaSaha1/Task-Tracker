import React from 'react';
import TaskItem from './TaskItem';

const InProgressBox = ({ inProgressTasks, onAssign }) => {
  return (
    <div className="box">
      <div className="box-title">In Progress</div>
      {inProgressTasks.map((task) => (
        <TaskItem key={task.id} task={task} onAssign={onAssign} />
      ))}
    </div>
  );
};

export default InProgressBox;