import React from 'react';
import LabeledLink from './LabeledLink';

export default {
  title: 'Components/LabeledLink',
  component: LabeledLink,
};

const Template = (args) => <LabeledLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'GitHub',
  value: 'https://github.com',
};

export const WithLongURL = Template.bind({});
WithLongURL.args = {
  label: 'Long URL',
  value: 'https://example.com/this/is/a/very/long/url/that/might/wrap/or/be/truncated',
};
