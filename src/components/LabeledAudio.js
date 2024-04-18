import './LabeledValue.css';

import React, { useRef, useEffect } from 'react';
import { isAudio } from '../utils/typeHelpers';
import LabeledVoid from './LabeledVoid';

const LabeledAudio = ({ label, value }) => {
  const canvasRef = useRef(null);
  const audioRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);

  if (!isAudio(value)) {
    return <LabeledVoid label={label} value={value} block="true"/>;
  }
  const isDataUri = typeof value === 'string' && value.startsWith('data:audio/');
  const isAudioFileHttpUrl = typeof value === 'string' && value.startsWith('http');
  const isDownloadable = isDataUri || isAudioFileHttpUrl;
  const downloadFileName = label ? label.replace(/\s+/g, '_').toLowerCase() : 'audio';
  let figcaption;
  if (isDownloadable) {
    figcaption = (
      <figcaption>
        {label}
        {isDataUri && <a href={value} download={downloadFileName} target="_blank">◳</a>}
        {isAudioFileHttpUrl && <a href={value + '?dl'} download target="_blank">◳</a>}
      </figcaption>
    );
  } else {
    figcaption = <figcaption>{label}</figcaption>;
  }

  
  const audioSrc = typeof value === 'string' ? value : URL.createObjectURL(value);

  return (
    <div className="labeled-value labeled-audio">
      <div className="labeled-value-label">{label}</div>
      <figure className="labeled-value-value">
        <audio src={audioSrc} controls alt={label} />
        {figcaption}
      </figure>
    </div>
  );
};

export default LabeledAudio;
