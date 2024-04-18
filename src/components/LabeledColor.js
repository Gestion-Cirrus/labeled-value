import React from 'react';
import { isColor } from '../utils/typeHelpers';
import LabeledVoid from './LabeledVoid';

const LabeledColor = ({ label, value }) => {
  if (!isColor(value)) {
    return <LabeledVoid label={label} value={value} />;
  }

  return (
    <div className="labeled-value labeled-color">
      <div className="labeled-value-label">{label}</div>
      <div className="labeled-value-value" style={{ backgroundColor: value, width: '50px', height: '50px' }}></div>
    </div>
  );
};

export default LabeledColor;
