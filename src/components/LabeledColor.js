import './LabeledValue.css';

import React from 'react';
import { isColor } from '../utils/typeHelpers';
import LabeledVoid from './LabeledVoid';

const LabeledColor = ({ label, value }) => {
  if (!isColor(value)) {
    return <LabeledVoid label={label} value={value} />;
  }

  return (
    <div className="labeled-value labeled-color">
      {label && <div className="labeled-value-label">{label}</div>}
      <div className="labeled-value-value" >
        <div className='color-square' style={{backgroundColor: value}}></div>
      </div>
    </div>
  );
};

export default LabeledColor;
