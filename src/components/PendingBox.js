import React from 'react';
import TaskItem from './TaskItem'; // Assuming you have a TaskItem component

const PendingBox = ({ pendingTasks }) => {
  return (
    <div className="box">
      <div className="box-title">Pending</div>
      {pendingTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default PendingBox;