import React from 'react';
import { isDate } from '../utils/typeHelpers';
import LabeledVoid from './LabeledVoid';

const LabeledDate = ({ label, value, format }) => {
  if (!isDate(value)) {
    return <LabeledVoid label={label} value={value} />;
  }

  const date = new Date(value);
  const displayValue = format ? date.toLocaleDateString(undefined, format) : date.toLocaleDateString();

  return (
    <div className="labeled-value labeled-date">
      <div className="labeled-value-label">{label}</div>
      <div className="labeled-value-value">{displayValue}</div>
    </div>
  );
};

export default LabeledDate;
