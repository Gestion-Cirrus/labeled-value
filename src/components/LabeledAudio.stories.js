import React from 'react';
import LabeledAudio from './LabeledAudio';

export default {
  title: 'LabeledAudio',
  component: LabeledAudio,
};

export const Default = () => (
  <LabeledAudio label="Audio" value="audio.mp3" />
);

export const InvalidType = () => (
  <LabeledAudio label="Audio" value={{ notAString: true }} />
);
