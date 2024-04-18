import React from 'react';
import LabeledVideo from './LabeledVideo';

export default {
  title: 'Basic/Media/LabeledVideo',
  component: LabeledVideo,
};

export const Default = () => (
  <LabeledVideo label="Video" value="video.mp4" />
);

export const InvalidType = () => (
  <LabeledVideo label="Video" value={{ notAString: true }} />
);
