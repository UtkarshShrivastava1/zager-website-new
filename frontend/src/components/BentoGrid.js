// BentoGrid.js
import React from 'react';
import './BentoGrid.css';

export const BentoGrid = ({ className, children }) => {
  return (
    <div className={`bento-grid ${className || ''}`}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, description, header, icon }) => {
  return (
    <div className={`bento-grid-item ${className || ''}`}>
      {header}
      <div className="content-wrapper">
        {icon}
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};