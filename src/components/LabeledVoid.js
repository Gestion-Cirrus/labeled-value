import './LabeledValue.css';

import React from 'react';
import { isNullish } from '../utils/typeHelpers';
const LabeledVoid = ({ label, value, block=false }) => {
  const valueBlock = block ? <div className="na-block"></div> : "n/a";
  return (
    <div className="labeled-value labeled-void">
      {label && <div className="labeled-value-label">{label}</div>}
      <div className="labeled-value-value">{ valueBlock }</div>
    </div>
  );
};

export default LabeledVoid;
