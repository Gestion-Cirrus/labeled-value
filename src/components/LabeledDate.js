import './LabeledValue.css';

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
      {label && <div className="labeled-value-label">{label}</div>}
      <time className="labeled-value-value" dateTime={date.toISOString()}>{displayValue}</time>
    </div>
  );
};

export default LabeledDate;
