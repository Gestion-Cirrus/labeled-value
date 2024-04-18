import './LabeledValue.css';

import './LabeledBoolean.css';
import React from 'react';
import { isBoolean } from '../utils/typeHelpers';
import LabeledVoid from './LabeledVoid';

const LabeledBoolean = ({ label, value }) => {
  if (!isBoolean(value)) {
    return <LabeledVoid label={label} value={value} />;
  }

  return (
    <div className="labeled-value labeled-boolean">
      <div className="labeled-value-label">{label}</div>
      <div className={`labeled-value-value ${value ? 'boolean-true' : 'boolean-false'}`}>{value ? '✓' : '✗'}</div>
    </div>
  );
};

export default LabeledBoolean;
