import React from 'react';
import { isNullish } from '../utils/typeHelpers';

const LabeledVoid = ({ label, value }) => {
  const displayValue = isNullish(value) ? 'n/a' : value;

  return (
    <div className="labeled-value labeled-void">
      <div className="labeled-value-label">{label}</div>
      <div className="labeled-value-value">{displayValue}</div>
    </div>
  );
};

export default LabeledVoid;
