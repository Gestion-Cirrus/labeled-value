import React from 'react';
import { isNumber } from '../utils/typeHelpers';
import LabeledVoid from './LabeledVoid';

const LabeledNumber = ({ label, value, unit }) => {
  if (!isNumber(value)) {
    return <LabeledVoid label={label} value={value} />;
  }

  return (
    <div className="labeled-value labeled-number">
      <div className="labeled-value-label">{label}</div>
      <div className="labeled-value-value">{value}{unit && <span className="labeled-value-unit">{unit}</span>}</div>
    </div>
  );
};

export default LabeledNumber;
