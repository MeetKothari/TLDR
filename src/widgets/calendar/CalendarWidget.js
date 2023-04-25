import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./dateandtime.css";
import Draggable from "react-draggable";

export default function CalendarWidget(props) {
  const [items, setItems] = useState([]);

  const handleDeleteWidgets = () => {
    const widgetsContainer = document.querySelector(".widgets-container");
    widgetsContainer.innerHTML = "";
    setItems([]);
  };

  return (
    <Draggable defaultPosition={{x: -500, y: 250}}>
      <div className="calendar-widget">
        <Calendar
          value={props.selectedDate}
          onChange={props.onDateChange}
          calendarType="US"
        />
        <button class="del-button" onClick={handleDeleteWidgets}>Delete</button>
      </div>
    </Draggable>
  );
}
