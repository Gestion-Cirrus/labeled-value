import React from 'react';
import LabeledTree from './LabeledTree';

export default {
  title: 'LabeledTree',
  component: LabeledTree,
};

export const Default = () => (
    <LabeledTree label="Tree" value={{ node1: 'value1', node2: 'value2' }} />
);

export const WithArray = () => (
    <LabeledTree label="Tree" value={['value1', 'value2', 'value3']} />
);

export const NestedObjects = () => (
    <LabeledTree label="Tree" value={{ level1: { level2: { level3: 'value' } } }} />
);
