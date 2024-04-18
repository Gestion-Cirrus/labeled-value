import React from 'react';
import LabeledCurrency from './LabeledCurrency';

export default {
  title: 'Independent/LabeledCurrency',
  component: LabeledCurrency,
};

const Template = (args) => <LabeledCurrency {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Total Balance',
  value: '1024.50',
  currency: 'USD',
};

export const WithLargeAmount = Template.bind({});
WithLargeAmount.args = {
  label: 'Debt',
  value: '987654321.99',
  currency: 'EUR',
};
