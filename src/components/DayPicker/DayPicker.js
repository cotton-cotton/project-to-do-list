import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

import CustomInput from './CustomInput/CustomInput';
import './datepicker.scss';

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
      className="border border-black text-30px"
      dateFormat={DATE_FORMAT}
      dateFormatCalendar={DATE_FORMAT_CALENDAR}
      customInput={<CustomInput inputType={type} />}
    />
  );
};

export default DayPicker;
