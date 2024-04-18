import React from 'react';
import LabeledFile from './LabeledFile';

export default {
  title: 'LabeledFile',
  component: LabeledFile,
};

export const Default = () => (
  <LabeledFile label="File" value="example.txt" />
);

export const InvalidType = () => (
  <LabeledFile label="File" value={{ notAString: true }} />
);
