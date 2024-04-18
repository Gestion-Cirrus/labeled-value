import './LabeledValue.css';
import './LabeledJson.css';
import React from 'react';
import { isNullish } from '../utils/typeHelpers';
import LabeledVoid from './LabeledVoid';

const LabeledJson = ({ label, value }) => {
  if (isNullish(value)) {
    return <LabeledVoid label={label} value={value} />;
  }

  // Serialize JSON with indentation
  let jsonObject;
  try{
   jsonObject = typeof value === 'string' ? JSON.parse(value) : value;
  } catch (e) {
    return <LabeledVoid label={label} value={value} />;
  }
  let prettyJson = JSON.stringify(jsonObject, null, 2);

  // Function to add syntax highlighting
  function highlightSyntax(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    json = json.replace(/("(\\u[\da-fA-F]{4}|\\[^u]|[^"\\])*")/g, function (match) {
      if (/:$/.test(match)) {
        return `<span class="json-key">${match}</span>`;
      } else {
        return `<span class="json-string">${match}</span>`;
      }
    });
    json = json.replace(/\b(true|false|null)\b/g, '<span class="json-boolean">$1</span>');
    json = json.replace(/\b(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)\b/g, '<span class="json-number">$1</span>');
    return json;
  }

  prettyJson = highlightSyntax(prettyJson);
  const summaryJson = JSON.stringify(jsonObject);
  const summary = summaryJson.length > 20 ? `${summaryJson.slice(0, 20)}...` : summaryJson;

  return (
    <div className="labeled-value labeled-json">
      {label && <div className="labeled-value-label">{label}</div>}
      <details className="labeled-value-value">
        <summary dangerouslySetInnerHTML={{__html: summary}} />
        <pre dangerouslySetInnerHTML={{__html: prettyJson}} />
      </details>
    </div>
  );
};

export default LabeledJson;
