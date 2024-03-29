import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.scss';

import CustomInput from './CustomInput/CustomInput';

const START_DATE_TYPE = 'startDate';
const END_DATE_TYPE = 'endDate';
const START = 'start';
const DATE_FORMAT = 'yyyy년 MM월 dd일';
const DATE_FORMAT_CALENDAR = 'yyyy년 MM월';

const DayPicker = ({ type, dateInput, adjustDate }) => {
  return (
    <DatePicker
      selected={type === START ? dateInput.startDate : dateInput.endDate}
      startDate={dateInput.startDate}
      endDate={dateInput.endDate}
      onChange={date =>
        adjustDate(type === START ? START_DATE_TYPE : END_DATE_TYPE, date)
      }
      minDate={type === START ? new Date() : dateInput.startDate}
      className="border border-black"
      dateFormat={DATE_FORMAT}
      dateFormatCalendar={DATE_FORMAT_CALENDAR}
      customInput={<CustomInput inputType={type} />}
    />
  );
};

export default DayPicker;
