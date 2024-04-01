import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import FilterBar from './components/FilterBar';
import PendingBox from './components/PendingBox';
import InProgressBox from './components/InProgressBox';
import CompletedBox from './components/CompletedBox';
import DeployedBox from './components/DeployedBox';
import DeferredBox from './components/DeferredBox';
import SortComponent from './components/SortComponent';
import TaskItem from './components/TaskItem';
import './styles.css';
import './components/TaskItem.css';

function App() {
  const [tasks, setTasks] = useState([]); //handeleADDTask
  const [pendingTasks, setPendingTasks] = useState([]); //handeleADDTask
  const [showNewTaskModal, setShowNewTaskModal] = useState(false); //handeleADDTask, openNewTaskModal
  const [sortBy, setSortBy] = useState(null); //handleSort
  const [filters, setFilters] = useState({ //handleFilters
    dateRange: 'All',
    assignee: 'All',
    priority: 'All',
  });

  const handleEditTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setPendingTasks([...pendingTasks, newTask]);
    setShowNewTaskModal(false);
  };

  const openNewTaskModal = () => {
    setShowNewTaskModal(true);
  };

  const handleFilters = (filters) => {
    setFilters(filters);
  };
  const filteredTasks = tasks.filter((task) => {
    // Apply filters based on filters object
  });

  const handleSort = (sortBy) => {
    setSortBy(sortBy);
  };
  const sortedTasks = filteredTasks.sort((a, b) => {
    // Sort tasks based on sortBy value
  });

  const TaskList = ({ tasks, onEdit, onDelete }) => (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );

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
        <PendingBox pendingTasks={pendingTasks} />
        <InProgressBox />
        <CompletedBox />
        <DeployedBox />
        <DeferredBox />
      </div>

      {showNewTaskModal && (
        <div className="modal">
          <TaskForm onAdd={handleAddTask} onClose={() => setShowNewTaskModal(false)} />
        </div>
      )}

   {sortedTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
        />
      ))}
    </div>
  );
}

export default App;