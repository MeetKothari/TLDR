import React, { useState } from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable'; 

function WidgetPopup() {
  const [widgetType, setWidgetType] = useState('Square');
  const [widgetColor, setWidgetColor] = useState('black');
  const [widgetValue, setWidgetValue] = useState('');

  const handleWidgetTypeChange = (event) => {
    setWidgetType(event.target.value);
  };

  const handleWidgetColorChange = (event) => {
    setWidgetColor(event.target.value);
  };

  const handleWidgetValueChange = (event) => {
    setWidgetValue(event.target.value);
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
      <h2>Select a Widget:</h2>
      <select value={widgetType} onChange={handleWidgetTypeChange}>
        <option value="Small">Widget (Square)</option>
        <option value="Large">Widget (Rectangle)</option>
      </select>
      <h2>Choose a Color:</h2>
      <input type="color" value={widgetColor} onChange={handleWidgetColorChange} />
      <h2>Enter a Value:</h2>
      <input type="text" value={widgetValue} onChange={handleWidgetValueChange} />
      <button onClick={handleWidgetSubmit}>Add Widget</button>
    </div>
    
    </>
  );
}

export default WidgetPopup;
