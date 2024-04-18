import React from 'react';
import { isString } from '../utils/typeHelpers';
import LabeledVoid from './LabeledVoid';

const LabeledFile = ({ label, value }) => {
  if (!isString(value)) {
    return <LabeledVoid label={label} value={value} />;
  }

  return (
    <div className="labeled-value labeled-file">
      <div className="labeled-value-label">{label}</div>
      <div className="labeled-value-value">
        <a href={value} download>
          Download File
        </a>
      </div>
    </div>
  );
};

export default LabeledFile;
