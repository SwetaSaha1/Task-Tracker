import React from 'react';
import TaskItem from './TaskItem';

const DeployedBox = ({ deployedTasks, onAssign }) => {
  return (
    <div className="box">
      <div className="box-title">Deployed</div>
      {deployedTasks.map((task) => (
        <TaskItem key={task.id} task={task} onAssign={onAssign} />
      ))}
    </div>
  );
};

export default DeployedBox;