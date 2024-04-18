import React from 'react';
import { storiesOf } from '@storybook/react';
import LabeledEmail from './LabeledEmail';

storiesOf('LabeledEmail', module)
  .add('default', () => (
    <LabeledEmail label="Email" value="example@example.com" />
  ))
  .add('with mailto link', () => (
    <LabeledEmail label="Email" value="example@example.com" mailto />
  ));
