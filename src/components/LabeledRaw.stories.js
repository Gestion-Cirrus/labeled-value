import React from 'react';
import LabeledRaw from './LabeledRaw';

export default {
  title: 'Independent/LabeledRaw',
  component: LabeledRaw,
};

export const Default = () => (
  <LabeledRaw label="Raw" value={{ key: 'value' }} />
);

export const FunctionValue = () => (
  <LabeledRaw label="Raw" value={() => console.log('Hello World')} />
);

export const InvalidType = () => (
  <LabeledRaw label="Raw" value={undefined} />
);
