import React from 'react';
import LabeledEmail from './LabeledEmail';

export default {
  title: 'LabeledEmail',
  component: LabeledEmail,
};

export const Default = () => (
    <LabeledEmail label="Email" value="example@example.com" />
);

export const WithMailtoLink = () => (
    <LabeledEmail label="Email" value="example@example.com" mailto />
);
