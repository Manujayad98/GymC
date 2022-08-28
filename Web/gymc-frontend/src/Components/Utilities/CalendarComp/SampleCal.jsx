import React, {useState} from 'react'
import { Calendar } from 'react-calendar'
import "react-calendar/dist/Calendar.css";

const SampleCal = () => {
    const[value,onChange]= useState(new Date());
  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      {/* <p>{value.toString()};</p>  */}
    </div>
  )
}

export default SampleCal
