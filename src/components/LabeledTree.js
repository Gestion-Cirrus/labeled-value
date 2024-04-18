import './LabeledValue.css';

import './LabeledTree.css';
import React from 'react';
import LabeledValue from './LabeledValue';

const renderTree = (value, label) => {
  if (Array.isArray(value)) {
    return value.map((item, index) => (
      <LabeledTree key={`${label}[${index}]`} label="" value={item} />
    ));
  } else if (typeof value === 'object' && value !== null) {
    return Object.keys(value).map((key) => {
      return <LabeledTree key={key} label={key} value={value[key]} />;
    });
  } else {
    // Pass an empty label for LabeledValue to avoid duplicate label rendering
    return <LabeledValue label="" value={value} />;
  }
};

const LabeledTree = ({ label, value }) => {
  return (
    <ul className="labeled-value labeled-tree">
      <li>
        {label && <div className="labeled-value-label">{label}</div>}
        <div className="labeled-value-value">{renderTree(value, label)}</div>
      </li>
    </ul>
  );
};

export default LabeledTree;
