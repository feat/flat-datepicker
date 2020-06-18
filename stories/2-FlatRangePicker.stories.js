import React from 'react';
import { action } from '@storybook/addon-actions';
import { FlatRangePicker } from '../src';
import '../src/style/index.scss';

export default {
  title: 'FlatRangePicker',
  component: FlatRangePicker,
};

export const Demo = () => (
  <FlatRangePicker
    viewMode="Hm"
    format="HH:mm"
    onChange={action('onChange')}
  />
)