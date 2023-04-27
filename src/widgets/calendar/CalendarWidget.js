import React, { useState,useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./dateandtime.css";
import Draggable from "react-draggable";

export default function CalendarWidget(props) {
  const [items, setItems] = useState([]);
 // Calculate screen size and set bounds accordingly
 const [width, setWidth] = useState(window.innerWidth);
 const [height, setHeight] = useState(window.innerHeight);

 useEffect(() => {
   const handleResize = () => {
     setWidth(window.innerWidth);
     setHeight(window.innerHeight);
   };

   window.addEventListener("resize", handleResize);

   return () => window.removeEventListener("resize", handleResize);
 }, []);

 const bounds = {
   top: height * 0.05,
   left: width * -0.4,
   right: width * 0.0001,
   bottom: height * 0.6,
 };
  return (
    <Draggable bounds={bounds} grid={[25, 25]} defaultPosition={{x: -50, y: 220}}>
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
