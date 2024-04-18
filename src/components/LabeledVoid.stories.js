import React from 'react';
import LabeledVoid from './LabeledVoid';

export default {
  title: 'LabeledVoid',
  component: LabeledVoid,
};

export const Default = () => (
  <LabeledVoid label="Void" />
);

export const WithBlock = () => (
  <LabeledVoid label="Void" block={true} />
);
