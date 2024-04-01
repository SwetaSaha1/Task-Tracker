import React from 'react';
import TaskItem from './TaskItem';

const CompletedBox = ({ completedTasks, onAssign }) => {
  return (
    <div className="box">
      <div className="box-title">Completed</div>
      {completedTasks.map((task) => (
        <TaskItem key={task.id} task={task} onAssign={onAssign} />
      ))}
    </div>
  );
};

export default CompletedBox;