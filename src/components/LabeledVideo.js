import React from 'react';
import { isVideo } from '../utils/typeHelpers';
import LabeledVoid from './LabeledVoid';

const LabeledVideo = ({ label, value }) => {
  if (!isVideo(value)) {
    return <LabeledVoid label={label} value={value} />;
  }

  const videoSrc = typeof value === 'string' ? value : URL.createObjectURL(value);

  return (
    <div className="labeled-value labeled-video">
      <div className="labeled-value-label">{label}</div>
      <div className="labeled-value-value">
        <video src={videoSrc} controls alt={label} />
      </div>
    </div>
  );
};

export default LabeledVideo;
