import React from 'react';
import LabeledRating from './LabeledRating';

export default {
  title: 'Independent/LabeledRating',
  component: LabeledRating,
};

const Template = (args) => <LabeledRating {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Customer Satisfaction',
  value: 3,
};

export const FullStars = Template.bind({});
FullStars.args = {
  label: 'Quality Rating',
  value: 5,
};

export const NoStars = Template.bind({});
NoStars.args = {
  label: 'Poor Rating',
  value: 0,
};
