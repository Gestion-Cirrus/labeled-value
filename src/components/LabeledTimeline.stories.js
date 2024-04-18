import React from 'react';
import LabeledTimeline from './LabeledTimeline';

export default {
  title: 'Dev/LabeledTimeline',
  component: LabeledTimeline,
};

const Template = (args) => <LabeledTimeline {...args} />;

export const Default = Template.bind({});
Default.args =[
  { type: 'active', start: '2024-04-14T08:00:00Z', end: '2024-04-14T12:00:00Z' },
  { type: 'paused', start: '2024-04-14T12:00:00Z', end: '2024-04-14T12:30:00Z' },
  { type: 'active', start: '2024-04-14T12:30:00Z', end: '2024-04-14T16:00:00Z' }
];

// export const WithCustomFormat = Template.bind({});
// WithCustomFormat.args = {
//   events: [
//     { timestamp: '2023-01-01T00:00:00Z', label: 'Start of the Year', format: 'MMM Do YYYY' },
//     { timestamp: '2023-02-14T00:00:00Z', label: 'Valentine\'s Day', format: 'MMM Do YYYY' },
//     { timestamp: '2023-10-31T00:00:00Z', label: 'Halloween', format: 'MMM Do YYYY' }
//   ]
// };
