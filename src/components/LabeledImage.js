import './LabeledValue.css';

import React from 'react';
import { isImage } from '../utils/typeHelpers';
import LabeledVoid from './LabeledVoid';

const LabeledImage = ({ label, value }) => {
  if (!isImage(value)) {
    return <LabeledVoid label={label} value={value} block="true" />;
  }

    const isDataUri = typeof value === 'string' && value.startsWith('data:image');
    const isImageFileHttpUrl = typeof value === 'string' && value.startsWith('http');
    const isDownloadable = isDataUri || isImageFileHttpUrl;
    const downloadFileName = label ? label.replace(/\s+/g, '_').toLowerCase() : 'image';
    let figcaption;
    if (isDownloadable) {
      figcaption = (
        <figcaption>
          {label}
          {isDataUri && <a href={value} download={downloadFileName} target="_blank">◳</a>}
          {isImageFileHttpUrl && <a href
          ={value + '?dl'} download target='_blank'>◳</a>}
        </figcaption>
      );
    }
    else {
      figcaption = <figcaption>{label}</figcaption>;
    }

  const imageSrc = typeof value === 'string' ? value : URL.createObjectURL(value);

  return (
    <div className="labeled-value labeled-image">
      {label && <div className="labeled-value-label">{label}</div>}
      <figure className="labeled-value-value">
        <img src={imageSrc} alt={label} />
        {figcaption}
      </figure>
    </div>
  );
};

export default LabeledImage;
