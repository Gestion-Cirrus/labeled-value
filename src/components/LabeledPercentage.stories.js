import React from 'react';
import LabeledPercentage from './LabeledPercentage';

export default {
  title: 'Independent/LabeledPercentage',
  component: LabeledPercentage,
};

const Template = (args) => <LabeledPercentage {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Success Rate',
  value: '79',
};

export const WithHighPrecision = Template.bind({});
WithHighPrecision.args = {
  label: 'Conversion Rate',
  value: '33.3333',
};

export const WithLowValue = Template.bind({});
WithLowValue.args = {
  label: 'Error Rate',
  value: '0.1234',
};
