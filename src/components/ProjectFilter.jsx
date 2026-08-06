import React from 'react';

const CATEGORIES = [
  'ALL',
  'FULL-STACK',
  'CRYPTO',
  'COMMERCE',
  'GEODATA',
  'CINEMA',
  'BLOG SYSTEM',
];

const ProjectFilter = ({ activeTag, onSelectTag, searchQuery, onSearchChange }) => {
  return (
    <div className="project-filter-bar">
      
      {/* Category Tag Pills */}
      <div className="project-filter-tags" role="tablist">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`project-filter-pill ${activeTag === cat ? 'active' : ''}`}
            onClick={() => onSelectTag(cat)}
            role="tab"
            aria-selected={activeTag === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Real-time Keyword Search Bar */}
      <div className="project-search-wrapper">
        <span className="project-search-icon">🔍</span>
        <input
          type="text"
          className="project-search-input"
          placeholder="Filter by keyword (e.g. React, map, cart)..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchQuery && (
          <button className="project-search-clear" onClick={() => onSearchChange('')}>
            ✕
          </button>
        )}
      </div>

    </div>
  );
};

export default ProjectFilter;
