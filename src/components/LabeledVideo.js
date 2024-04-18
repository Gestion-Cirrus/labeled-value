import './LabeledValue.css';

import React from 'react';

import { isVideo } from '../utils/typeHelpers';
import LabeledVoid from './LabeledVoid';

const LabeledVideo = ({ label, value }) => {
  if (!isVideo(value)) {
    return <LabeledVoid label={label} value={value} block="true" />;
  }
  const isDataUri = typeof value === 'string' && value.startsWith('data:video/');
  const isVideoFileHttpUrl = typeof value === 'string' && value.startsWith('http');
  const isDownloadable = isDataUri || isVideoFileHttpUrl;
  const downloadFileName = label ? label.replace(/\s+/g, '_').toLowerCase() : 'video';
  let figcaption;
  if (isDownloadable) {
    figcaption = (
      <figcaption>
        {label}
        {isDataUri && <a href={value} download={downloadFileName} target="_blank">◳</a>}
        {isVideoFileHttpUrl && <a href
        ={value + '?dl'} download target="_blank">◳</a>}
      </figcaption>
    );
  }else{
    figcaption = <figcaption>{label}</figcaption>;
  }
  const videoSrc = typeof value === 'string' ? value : URL.createObjectURL(value);

  return (
    <div className="labeled-value labeled-video">
      <div className="labeled-value-label">{label}</div>
      <figure className="labeled-value-value">
        <video src={videoSrc} controls alt={label} />
        {figcaption}
      </figure>
    </div>
  );
};

export default LabeledVideo;
