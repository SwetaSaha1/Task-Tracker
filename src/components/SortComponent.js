// components/SortComponent.js
import React from 'react';

const SortComponent = ({ sortBy, onSort }) => {
  const handleSort = (e) => {
    onSort(e.target.value);
  };

  return (
    <select value={sortBy} onChange={handleSort}>
      <option value="">Sort by</option>
      <option value="priorityAsc">Priority (Ascending)</option>
      <option value="priorityDesc">Priority (Descending)</option>
      <option value="startDateAsc">Start Date (Ascending)</option>
      <option value="startDateDesc">Start Date (Descending)</option>
      <option value="endDateAsc">End Date (Ascending)</option>
      <option value="endDateDesc">End Date (Descending)</option>
    </select>
  );
};

export default SortComponent;