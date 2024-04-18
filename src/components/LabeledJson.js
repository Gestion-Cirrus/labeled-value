import React from 'react';
import { isJson } from '../utils/typeHelpers';
import LabeledVoid from './LabeledVoid';

const LabeledJson = ({ label, value }) => {
  if (!isJson(value)) {
    return <LabeledVoid label={label} value={value} />;
  }

  const jsonObject = typeof value === 'string' ? JSON.parse(value) : value;
  const prettyJson = JSON.stringify(jsonObject, null, 2);

  return (
    <div className="labeled-value labeled-json">
      <div className="labeled-value-label">{label}</div>
      <details className="labeled-value-value">
        <summary>View JSON</summary>
        <pre>{prettyJson}</pre>
      </details>
    </div>
  );
};

export default LabeledJson;
