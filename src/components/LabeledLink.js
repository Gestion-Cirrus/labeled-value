import './LabeledValue.css';

import React from 'react';

const LabeledLink = ({ label, value }) => {
    const [copySuccess, setCopySuccess] = React.useState(false);
    const handleClick = () => {
        navigator.clipboard.writeText(value);
        setCopySuccess(true);
        setTimeout(() => {
            setCopySuccess(false);
        }, 1111);
    }
  
    return (
      <div className="labeled-value labeled-link">
        {label && <div className="labeled-value-label">{label}</div>}
        <div className="labeled-value-value">
          <a href={value} target="_blank" rel="noopener noreferrer">{value} ◳</a>
          <button className="labeled-link-copy" onClick={handleClick}>Copy {copySuccess && <span class="copy-success">✓</span>}</button>
        </div>
      </div>
    );
  };
  
    export default LabeledLink;