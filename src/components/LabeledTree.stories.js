import React from 'react';
import LabeledTree from './LabeledTree';

export default {
  title: 'Routing/LabeledTree',
  component: LabeledTree,
};

export const Default = () => (
    <LabeledTree label="Tree" value={{ node1: 'value1', node2: 'value2' }} />
);

export const WithArray = () => (
    <LabeledTree label="Tree" value={['foo', 'bar', 'baz']} />
);

export const NestedObjects = () => (
    <LabeledTree label="Tree" value={{ foo: { bar: { baz: 'value' } } }} />
);

export const ArrayOfNestedObjects = () => (
    <LabeledTree label="Tree" value={[{ foo: 'bar' }, { baz: 'qux' }]} />
);

export const ArrayOfDeeplyNestedObjects = () => (
    <LabeledTree label="Tree" value={[{ foo: { bar: { baz: 'qux' } } }, { quux: { corge: 'grault' } }]} />
);

export const ArrayOfMixedObjects = () => (
    <LabeledTree label="Tree" value={[{ foo: 'bar' }, 'baz', { qux: 'quux' }]} />
);

export const ArrayOfMixedObjectsAndArrays = () => (
    <LabeledTree label="Tree" value={[{ foo: ['bar', 'baz'] }, 'qux', { quux: ['corge', 'grault'] }]} />
);