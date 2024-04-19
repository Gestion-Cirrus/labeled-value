import React from 'react';
import LabeledValue from './LabeledValue';

export default {
  title: 'Routing/LabeledValue',
  component: LabeledValue,
};

export const StringValue = () => (
  <LabeledValue label="String" value="This is a string" />
);

export const NumberValue = () => (
  <LabeledValue label="Number" value={42} />
);

export const BooleanValue = () => (
  <LabeledValue label="Boolean" value={true} />
);

export const DateValue = () => (
  <LabeledValue label="Date" value={new Date().toISOString()} />
);

export const JsonValue = () => (
  <LabeledValue label="JSON" value={{ key: 'value' }} />
);

export const VoidValue = () => (
  <LabeledValue label="Void" value={null} />
);

export const MultipleValues = () => (
  <div>
    <LabeledValue label="String" value="This is a string" />
    <LabeledValue label="Number" value={42} />
    <LabeledValue label="Boolean" value={true} />
    <LabeledValue label="Date" value={new Date().toISOString()} />
    <LabeledValue label="JSON" value={JSON.stringify({ key: 'value' })} />
    <LabeledValue label="Void" value={null} />
  </div>
);
