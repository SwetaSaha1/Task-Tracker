// components/FilterBar.js
import React, { useState } from 'react';

function FilterBar({ onFilters, initialFilters, onSort }) {
  const [dateRange, setDateRange] = useState(initialFilters.dateRange);
  const [assignee, setAssignee] = useState(initialFilters.assignee);
  const [priority, setPriority] = useState(initialFilters.priority);
  const [sortBy, setSortBy] = useState(null);
  const handleFilters = () => {
    onFilters({ dateRange, assignee, priority });
  };

  return (
    <div>
      {/* Render date range filter */}
      <select value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
        <option value="All">All Dates</option>
        {/* Add more options for date range */}
      </select>

      {/* Render assignee filter */}
      <select value={assignee} onChange={(e) => setAssignee(e.target.value)}>
        <option value="All">All Assignees</option>
        {/* Add more options for assignees */}
      </select>

      {/* Render priority filter */}
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="All">All Priorities</option>
        {/* Add more options for priorities */}
      </select>

      <button onClick={handleFilters}>Apply Filters</button>
    </div>
  );
}

export default FilterBar;