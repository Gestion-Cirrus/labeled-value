import React from 'react';
import LabeledAudio from './LabeledAudio';

export default {
  title: 'Basic/Media/LabeledAudio',
  component: LabeledAudio,
};

export const Default = () => (
  <LabeledAudio label="Audio" value="https://www.w3schools.com/html/horse.ogg" />
);

export const InvalidType = () => (
  <LabeledAudio label="Audio" value={{ notAString: true }} />
);
