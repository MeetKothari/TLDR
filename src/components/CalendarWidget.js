import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css"

export default function CalendarWidget(props) {
  return (
    <Calendar
      value={props.selectedDate}
      onChange={props.onDateChange}
      calendarType="US"
    />
  );
}
