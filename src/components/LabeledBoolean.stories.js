import React from 'react';
import LabeledBoolean from './LabeledBoolean';

export default {
  title: 'Basic/LabeledBoolean',
  component: LabeledBoolean,
};

export const TrueValue = () => (
  <LabeledBoolean label="Boolean" value={true} />
);

export const FalseValue = () => (
  <LabeledBoolean label="Boolean" value={false} />
);

export const InvalidType = () => (
  <LabeledBoolean label="Boolean" value="not a boolean" />
);
