import React from 'react';
import LabeledDate from './LabeledDate';

export default {
  title: 'LabeledDate',
  component: LabeledDate,
};

export const Default = () => (
  <LabeledDate label="Date" value={new Date().toISOString()} />
);

export const CustomFormat = () => (
  <LabeledDate label="Date" value={new Date().toISOString()} format={{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }} />
);

export const InvalidType = () => (
  <LabeledDate label="Date" value="Not a date" />
);
