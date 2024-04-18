import React from 'react';
import { isImage } from '../utils/typeHelpers';
import LabeledVoid from './LabeledVoid';

const LabeledImage = ({ label, value }) => {
  if (!isImage(value)) {
    return <LabeledVoid label={label} value={value} />;
  }

  const imageSrc = typeof value === 'string' ? value : URL.createObjectURL(value);

  return (
    <div className="labeled-value labeled-image">
      <div className="labeled-value-label">{label}</div>
      <div className="labeled-value-value">
        <img src={imageSrc} alt={label} />
      </div>
    </div>
  );
};

export default LabeledImage;
