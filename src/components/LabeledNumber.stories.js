import React from 'react';
import LabeledNumber from './LabeledNumber';

export default {
  title: 'Basic/LabeledNumber',
  component: LabeledNumber,
};

export const Default = () => (
  <LabeledNumber label="Number" value={42} />
);

export const WithUnit = () => (
  <LabeledNumber label="Weight" value={70} unit="kg" />
);

export const InvalidType = () => (
  <LabeledNumber label="Number" value="Not a number" />
);
