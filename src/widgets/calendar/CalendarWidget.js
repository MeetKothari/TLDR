import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./dateandtime.css";
import Draggable from "react-draggable";

export default function CalendarWidget(props) {
  const [items, setItems] = useState([]);

  return (
    <Draggable>
      <div className="calendar-widget">
        <Calendar
          value={props.selectedDate}
          onChange={props.onDateChange}
          calendarType="US"
        />
      </div>
    </Draggable>
  );
}
