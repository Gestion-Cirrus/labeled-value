import './LabeledValue.css';

import React from 'react';

const LabeledLink = ({ label, value }) => {
    const handleClick = () => navigator.clipboard.writeText(value);
  
    return (
      <div className="labeled-value labeled-link">
        {label && <div className="labeled-value-label">{label}</div>}
        <div className="labeled-value-value">
          <a href={value} target="_blank" rel="noopener noreferrer">{value}</a>
          <button onClick={handleClick}>Copy</button>
        </div>
      </div>
    );
  };
  
    export default LabeledLink;