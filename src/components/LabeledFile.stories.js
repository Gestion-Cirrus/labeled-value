import React from 'react';
import LabeledFile from './LabeledFile';

export default {
  title: 'Basic/LabeledFile',
  component: LabeledFile,
};

export const Default = () => (
  <LabeledFile label="File" value="example.txt" />
);
export const PDF = () => (
  <LabeledFile label="File" value="example.pdf" />
);
export const Excel = () => (
  <LabeledFile label="File" value="example.xlsx" />
);
export const CSV = () => (
  <LabeledFile label="File" value="example.csv" />
);
export const InvalidType = () => (
  <LabeledFile label="File" value={{ notAString: true }} />
);
