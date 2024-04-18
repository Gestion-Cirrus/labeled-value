import React from 'react';
import LabeledString from './LabeledString';

export default {
  title: 'Basic/LabeledString',
  component: LabeledString,
};

export const Default = () => (
  <LabeledString label="String" value="This is a string" />
);

export const EmptyString = () => (
  <LabeledString label="String" value="" />
);

export const InvalidType = () => (
  <LabeledString label="String" value={1234} />
);
