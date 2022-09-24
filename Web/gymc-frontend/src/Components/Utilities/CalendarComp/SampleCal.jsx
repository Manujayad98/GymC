import React, { useState } from 'react'
import { Calendar } from 'react-calendar'
import "react-calendar/dist/Calendar.css";
import PropTypes from 'prop-types';

const SampleCal = ({ mindate, maxdate }) => {
  const [value, onChange] = useState(new Date());
  const now = new Date();
  const day = now.getDay();
  const monday = now.getDate() - day + (day == 0 ? -6 : 1);

  // const myEvents = [
  //   {
  //     title: "Big Meeting",
  //     allDay: true,
  //     start: new Date(2021, 6, 0),
  //     end: new Date(2021, 6, 0),
  //   },
  //   {
  //     title: "Vacation",
  //     start: new Date(2021, 6, 7),
  //     end: new Date(2021, 6, 10),
  //   },
  //   {
  //     title: "Conference",
  //     start: new Date(2021, 6, 20),
  //     end: new Date(2021, 6, 23),
  //   },
  // ];
  return (
    <div>
      <Calendar
        onChange={onChange}
        // data={myEvents}
        value={value}
        minDate={mindate}
        maxDate={maxdate}
      />
      <p>{value.toString()};</p>
    </div>
  )
}

SampleCal.propTypes = {
  mindate: PropTypes.instanceOf(Date),
  maxdate: PropTypes.instanceOf(Date),

};
export default SampleCal
