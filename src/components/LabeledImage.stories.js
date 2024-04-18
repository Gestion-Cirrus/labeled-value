import React from 'react';
import LabeledImage from './LabeledImage';

export default {
  title: 'Basic/Media/LabeledImage',
  component: LabeledImage,
};

export const Default = () => (
  <LabeledImage label="Image" value="https://via.placeholder.com/1200/img.png" />
);

export const InvalidType = () => (
  <LabeledImage label="Image" value={{ notAString: true }} />
);
