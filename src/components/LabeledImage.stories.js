import React from 'react';
import LabeledImage from './LabeledImage';

export default {
  title: 'LabeledImage',
  component: LabeledImage,
};

export const Default = () => (
  <LabeledImage label="Image" value="https://via.placeholder.com/150" />
);

export const InvalidType = () => (
  <LabeledImage label="Image" value={{ notAString: true }} />
);
