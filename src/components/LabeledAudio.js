import React from 'react';
import { isAudio } from '../utils/typeHelpers';
import LabeledVoid from './LabeledVoid';

const LabeledAudio = ({ label, value }) => {
  if (!isAudio(value)) {
    return <LabeledVoid label={label} value={value} />;
  }

  const audioSrc = typeof value === 'string' ? value : URL.createObjectURL(value);

  return (
    <div className="labeled-value labeled-audio">
      <div className="labeled-value-label">{label}</div>
      <div className="labeled-value-value">
        <audio src={audioSrc} controls alt={label} />
      </div>
    </div>
  );
};

export default LabeledAudio;
