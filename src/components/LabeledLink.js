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
  
    export default LabeledLink;import React from 'react';
import PropTypes from 'prop-types';

const LabeledLink = ({ label, url }) => {
  return (
    <div className="labeled-link">
      <strong>{label}:</strong>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {url}
      </a>
    </div>
  );
};

LabeledLink.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default LabeledLink;
