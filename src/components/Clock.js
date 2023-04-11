import React, { useState, useEffect } from "react";

function DigitalClock({ time }) {
  return <div className="clock">{time.toLocaleTimeString()}</div>;
}

function GrandfatherClock({ time }) {
  const hour = time.getHours() % 12;
  const minute = time.getMinutes();
  const second = time.getSeconds();

  const hourAngle = (hour * 30) + (minute * 0.5);
  const minuteAngle = minute * 6;
  const secondAngle = second * 6;

  const hourStyle = {
    transform: `rotate(${hourAngle}deg)`
  };

  const minuteStyle = {
    transform: `rotate(${minuteAngle}deg)`
  };

  const secondStyle = {
    transform: `rotate(${secondAngle}deg)`
  };

  return (
    <div className="clock">
      <div className="hour-hand" style={hourStyle}></div>
      <div className="minute-hand" style={minuteStyle}></div>
      <div className="second-hand" style={secondStyle}></div>
    </div>
  );
}

function Clock({ type }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return type === 'grandfather' ? (
    <GrandfatherClock time={time} />
  ) : (
    <DigitalClock time={time} />
  );
}

export default Clock;
