import React from 'react';
import { storiesOf } from '@storybook/react';
import LabeledTree from './LabeledTree';

storiesOf('LabeledTree', module)
  .add('default', () => (
    <LabeledTree label="Tree" value={{ node1: 'value1', node2: 'value2' }} />
  ))
  .add('with array', () => (
    <LabeledTree label="Tree" value={['value1', 'value2', 'value3']} />
  ))
  .add('nested objects', () => (
    <LabeledTree label="Tree" value={{ level1: { level2: { level3: 'value' } } }} />
  ));
