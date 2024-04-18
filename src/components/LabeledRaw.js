import React from 'react';

const LabeledRaw = ({ label, value }) => {
  const stringValue = typeof value === 'function' ? value.toString() : JSON.stringify(value, null, 2);

  return (
    <div className="labeled-value labeled-raw">
      <div className="labeled-value-label">{label}</div>
      <pre className="labeled-value-value">{stringValue}</pre>
    </div>
  );
};

export default LabeledRaw;
