import React from 'react';
import { action } from '@storybook/addon-actions';
import moment from 'moment';
import FlatDatePicker from '../src/FlatDatePicker';
import '../src/style/index.scss';

export default {
  title: 'FlatDatePicker',
  component: FlatDatePicker,
};


export const HourMinute = () => (
  <FlatDatePicker
    pickerMode="normal"
    viewMode="Hm"
    format="H:m"
    onChange={action('onChange')}
  />
);

// Localization
// labels: { year, month, day, hour, minute }

export const HourMinute_CN = () => (
    <FlatDatePicker
      viewMode="Hm"
      format="HH:mm"
      onChange={action('onChange')}
      labels={{
        hour: '时',
        minute: '分',
      }}
    />
);

// History picker mode

export const YMD_History = () => (
  <FlatDatePicker
      originYear={1991}
      pickerMode="history"
      modifier="ymd"
      viewMode="YMD"
      yearRange={72}
      onChange={action('onChange')}
  />
)

export const YMD2_History = () => (
  <FlatDatePicker
      originYear={1991}
      pickerMode="history"
      modifier="ymd2"
      viewMode="YMD"
      yearRange={72}
      onChange={action('onChange')}
  />
)

export const YM_History = () => (
  <FlatDatePicker
    originYear={2020}
    pickerMode="history"
    viewMode="YM"
    yearRange={72}
    onChange={action('onChange')}
  />
)

// Future picker mode
export const CreditCard = () => (
  <FlatDatePicker
      viewMode="YM"
      format="YYYY-MM"
      yearRange={5}
      pickerMode="future"
      minDate={moment()
        .startOf('month')}
      maxDate={moment()
        .add(5, 'year')
        .toISOString()}
      onChange={action('onChange')}
    />
)

