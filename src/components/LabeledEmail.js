import './LabeledValue.css';

import React from 'react';
import { isEmail } from '../utils/typeHelpers';
import LabeledVoid from './LabeledVoid';

const LabeledEmail = ({ label, value, mailto }) => {
  if (!isEmail(value)) {
    return <LabeledVoid label={label} value={value} />;
  }

  const emailLink = mailto ? <a href={`mailto:${value}`}>{value}</a> : value;

  return (
    <div className="labeled-value labeled-email">
      {label && <div className="labeled-value-label">{label}</div>}
      <div className="labeled-value-value">{emailLink}</div>
    </div>
  );
};

export default LabeledEmail;
