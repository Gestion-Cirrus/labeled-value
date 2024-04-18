import React from 'react';
import LabeledEmail from './LabeledEmail';

export default {
  title: 'Basic/LabeledEmail',
  component: LabeledEmail,
};

export const Default = () => (
    <LabeledEmail label="Email" value="example@example.com" />
);

export const WithMailtoLink = () => (
    <LabeledEmail label="Email" value="example@example.com" mailto />
);

export const InvalidType = () => (
    <LabeledEmail label="Email" value={{ notAString: true }} />
);