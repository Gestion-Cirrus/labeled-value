import React from 'react';
import LabeledColor from './LabeledColor';

export default {
  title: 'Basic/LabeledColor',
  component: LabeledColor,
};

export const Default = () => (
  <LabeledColor label="Color" value="#ff0000" />
);

export const InvalidType = () => (
  <LabeledColor label="Color" value="not a color" />
);
