import './LabeledValue.css';

import React from 'react';
import { isString } from '../utils/typeHelpers';
import LabeledVoid from './LabeledVoid';

const LabeledFile = ({ label, value }) => {
  if (!isString(value)) {
    return <LabeledVoid label={label} value={value} />;
  }
  let isDataUri = value.startsWith('data:');
  let downloadFileName='';
  if(isDataUri){
    let parts = value.split(';');
    let mimeType = parts[0].split(':')[1];
    let extension = mimeType.split('/')[1];
    downloadFileName = `file.${extension}`;
  } else {
    let parts = value.split('/');
    downloadFileName = parts[parts.length-1];
  }
  return (
    <div className="labeled-value labeled-file">
      {label && <div className="labeled-value-label">{label}</div>}
      <div className="labeled-value-value">
        <a href={value} download={downloadFileName} target="_blank">
          {downloadFileName} ◳
        </a>
      </div>
    </div>
  );
};

export default LabeledFile;
