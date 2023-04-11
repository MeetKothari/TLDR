import React, { useState } from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable'; 

function WidgetPopup() {
  const [widgetType, setWidgetType] = useState('Square');
  const [widgetColor, setWidgetColor] = useState('black');
  const [widgetValue, setWidgetValue] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleWidgetTypeChange = (event) => {
    setWidgetType(event.target.value);
  };

  const handleWidgetColorChange = (event) => {
    setWidgetColor(event.target.value);
  };

  const handleWidgetValueChange = (event) => {
    setWidgetValue(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleWidgetSubmit = (event) => {
    event.preventDefault();
    const widgetElement = document.createElement('div');
    widgetElement.classList.add(`widget-${widgetType.toLowerCase()}`);
    widgetElement.classList.add('widget');
    widgetElement.style.backgroundColor = widgetColor;
    widgetElement.innerText = widgetValue;
    const widgetContainer = document.querySelector('.widget-container');
    widgetContainer.appendChild(widgetElement);
    $('.widget').draggable()
  };


  return (
    <>
    <div className="widget-popup">
      <div className="popup-info">
        <h2>Widget:</h2>
        <select value={widgetType} onChange={handleWidgetTypeChange}>
          <option value="Square">Sports</option>
          <option value="Rectangle">Traffic</option>
          <option value="Rectangle">Weather</option>
        </select>
        <h2>Size:</h2>
        <select value={widgetType} onChange={handleWidgetTypeChange}>
          <option value="Square">Small</option>
          <option value="Rectangle">Large</option>
        </select>
        <h2>Color:</h2>
        <input type="color" value={widgetColor} onChange={handleWidgetColorChange} />
        <br />
        <button id="add-button" onClick={handleWidgetSubmit}>Add Widget</button>
      </div>
    </div>
    
    </>
  );
}

export default WidgetPopup;
