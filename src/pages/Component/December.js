import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './app.css';

const DecemberCalendar = () => {
  const [date, setDate] = useState(new Date());
  const today = new Date();

  const tileDisabled = ({ date }) => {
    return date.getMonth() !== 11 || date > today;
  };

  return (
    <div className='m-5'>
      <Calendar
        onChange={setDate}
        value={date}
        tileDisabled={tileDisabled}
      />
    </div>
  );
};

export default DecemberCalendar;
