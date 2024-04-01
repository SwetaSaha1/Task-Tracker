import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import FilterBar from './components/FilterBar';
import PendingBox from './components/PendingBox';
import InProgressBox from './components/InProgressBox';
import CompletedBox from './components/CompletedBox';
import DeployedBox from './components/DeployedBox';
import DeferredBox from './components/DeferredBox';
import SortComponent from './components/SortComponent';
import './styles.css';

function App() {
  const [pendingTasks, setPendingTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [deployedTasks, setDeployedTasks] = useState([]);
  const [deferredTasks, setDeferredTasks] = useState([]);
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const [filters, setFilters] = useState({
    dateRange: 'All',
    assignee: 'All',
    priority: 'All',
  });

  const handleEditTask = (updatedTask) => {
    setPendingTasks(pendingTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const handleDeleteTask = (taskId) => {
    setPendingTasks(pendingTasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = (newTask) => {
    setPendingTasks([...pendingTasks, newTask]);
    setShowNewTaskModal(false);
  };

  const openNewTaskModal = () => {
    setShowNewTaskModal(true);
  };

  const handleFilters = (filters) => {
    setFilters(filters);
  };

  const handleSort = (sortBy) => {
    setSortBy(sortBy);
  };

  const handleAssignTask = (task, currentBox) => {
    if (currentBox === 'pending') {
      setPendingTasks(pendingTasks.filter((t) => t.id !== task.id));
      setInProgressTasks([...inProgressTasks, task]);
    } else if (currentBox === 'inProgress') {
      setInProgressTasks(inProgressTasks.filter((t) => t.id !== task.id));
      setCompletedTasks([...completedTasks, task]);
    } else if (currentBox === 'completed') {
      setCompletedTasks(completedTasks.filter((t) => t.id !== task.id));
      setDeployedTasks([...deployedTasks, task]);
    } else if (currentBox === 'deployed') {
      setDeployedTasks(deployedTasks.filter((t) => t.id !== task.id));
      setDeferredTasks([...deferredTasks, task]);
    }
  };

  return (
    <div className="app-container">
      <div className="top-bar">
        <FilterBar
          onFilters={handleFilters}
          initialFilters={filters}
          onSort={handleSort}
        />
        <button onClick={openNewTaskModal}>Add Task</button>
      </div>

      <div className="sort-bar">
        <SortComponent sortBy={sortBy} onSort={handleSort} />
      </div>

      <div className="box-container">
        <PendingBox
          pendingTasks={pendingTasks}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
          onAssign={(task) => handleAssignTask(task, 'pending')}
        />
        <InProgressBox
          inProgressTasks={inProgressTasks}
          onAssign={(task) => handleAssignTask(task, 'inProgress')}
        />
        <CompletedBox
          completedTasks={completedTasks}
          onAssign={(task) => handleAssignTask(task, 'completed')}
        />
        <DeployedBox
          deployedTasks={deployedTasks}
          onAssign={(task) => handleAssignTask(task, 'deployed')}
        />
        <DeferredBox deferredTasks={deferredTasks} />
      </div>

      {showNewTaskModal && (
        <div className="modal">
          <TaskForm onAdd={handleAddTask} onClose={() => setShowNewTaskModal(false)} />
        </div>
      )}
    </div>
  );
}

export default App;