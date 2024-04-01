import React, { useState } from 'react';
import './TaskItem.css';
import Modal from './Modal';
import EditTaskForm from './EditTaskForm';

const TaskItem = ({ task, onEdit, onDelete, onAssign }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleOptionsClick = () => {
    setShowOptions(!showOptions);
  };

  const handleEditClick = () => {
    setShowEditModal(true);
  };

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleEditSubmit = (updatedTask) => {
    onEdit(updatedTask);
    setShowEditModal(false);
  };

  const handleDeleteConfirm = () => {
    onDelete(task.id);
    setShowDeleteModal(false);
  };

  const handleAssignClick = () => {
    onAssign(task);
  };

  return (
    <div className="task-item">
      <h3>
        {task.title}
        <h6>[{task.priority}]</h6>
      </h3>

      <q>{task.description}</q>

      <p>
        @{task.assignee}
        <div className="task-buttons">
          <button className="options-button" onClick={handleOptionsClick}>
            &#8230;
          </button>
        </div>
      </p>

      {showOptions && (
        <div className="task-options">
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      )}

      <button className="assign-button" onClick={handleAssignClick}>
        Assign
      </button>

      {/* Edit Modal */}
      <Modal isOpen={showEditModal} onClose={() => setShowEditModal(false)}>
        <EditTaskForm task={task} onSubmit={handleEditSubmit} />
      </Modal>

      {/* Delete Modal */}
      <Modal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <div>
          <p>Are you sure you want to delete this task?</p>
          <button onClick={handleDeleteConfirm}>Yes</button>
          <button onClick={() => setShowDeleteModal(false)}>No</button>
        </div>
      </Modal>
    </div>
  );
};

export default TaskItem;