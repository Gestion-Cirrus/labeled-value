import './LabeledValue.css';

import React from 'react';
import { isString } from '../utils/typeHelpers';
import LabeledVoid from './LabeledVoid';

const LabeledString = ({ label, value }) => {
  if (!isString(value) || value === '') {
    return <LabeledVoid label={label} value={value} />;
  }

  return (
    <div className="labeled-value labeled-string">
      {label && <div className="labeled-value-label">{label}</div>}
      <div className="labeled-value-value">{value}</div>
    </div>
  );
};

export default LabeledString;
