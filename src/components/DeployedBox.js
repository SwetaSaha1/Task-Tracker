import React from 'react';
import TaskItem from './TaskItem';

const DeployedBox = ({ deployedTasks, onEdit, onDelete, onAssign }) => {
  return (
    <div className="box">
      <div className="box-title">Deployed</div>
      {deployedTasks.map((task) => (
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

export default DeployedBox;