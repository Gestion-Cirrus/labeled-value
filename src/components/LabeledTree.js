import React from 'react';
import LabeledValue from './LabeledValue';

const renderTree = (value, label) => {
  if (Array.isArray(value)) {
    return value.map((item, index) => (
      <LabeledTree key={index} label={`${label}[${index}]`} value={item} />
    ));
  } else if (typeof value === 'object' && value !== null) {
    return Object.keys(value).map((key) => (
      <LabeledTree key={key} label={`${label}.${key}`} value={value[key]} />
    ));
  } else {
    return <LabeledValue label={label} value={value} />;
  }
};

const LabeledTree = ({ label, value }) => {
  return (
    <div className="labeled-value labeled-tree">
      <div className="labeled-value-label">{label}</div>
      <div className="labeled-value-value">{renderTree(value, label)}</div>
    </div>
  );
};

export default LabeledTree;
