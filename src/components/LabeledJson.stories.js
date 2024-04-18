import React from 'react';
import LabeledJson from './LabeledJson';

const sampleJson = {
  name: "John Doe",
  age: 30,
  city: "New York"
};

export default {
  title: 'LabeledJson',
  component: LabeledJson,
};

export const Default = () => (
  <LabeledJson label="JSON" value={sampleJson} />
);

export const InvalidType = () => (
  <LabeledJson label="JSON" value="Not a JSON" />
);
