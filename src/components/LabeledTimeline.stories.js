import React from 'react';
import LabeledTimeline from './LabeledTimeline';

export default {
  title: 'LabeledTimeline',
  component: LabeledTimeline,
};

const Template = (args) => <LabeledTimeline {...args} />;

export const Default = Template.bind({});
Default.args = {
  events: [
    { timestamp: '2023-01-01T00:00:00Z', label: 'New Year' },
    { timestamp: '2023-07-04T00:00:00Z', label: 'Independence Day' },
    { timestamp: '2023-12-25T00:00:00Z', label: 'Christmas Day' }
  ]
};

export const WithCustomFormat = Template.bind({});
WithCustomFormat.args = {
  events: [
    { timestamp: '2023-01-01T00:00:00Z', label: 'Start of the Year', format: 'MMM Do YYYY' },
    { timestamp: '2023-02-14T00:00:00Z', label: 'Valentine\'s Day', format: 'MMM Do YYYY' },
    { timestamp: '2023-10-31T00:00:00Z', label: 'Halloween', format: 'MMM Do YYYY' }
  ]
};
