import React, { useState,useEffect } from "react";
import Draggable from "react-draggable";
import { FaCheck } from "react-icons/fa";
import "./sticky.css";

const StickyNote = ({ note, onSave }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [text, setText] = useState(note.content);
  
    const handleBlur = () => {
      onSave({ ...note, content: text });
      setIsEditing(false);
    };
  
    const handleChange = (event) => {
      setText(event.target.value);
    };
  
    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };
  
    return (
      <div className="StickyNote" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => setIsEditing(true)}>
        {isEditing || isHovering ? (
          <div>
            <textarea rows={10} cols={20} style={{ border: "none" }} value={text} onChange={handleChange} onBlur={handleBlur} autoFocus />
          </div>
        ) : (
          <div>
            <p>{note.content}</p>
            <br/>
          </div>
        )}
      </div>
    );
  };

const StickyNotes = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [notes, setNotes] = useState([
    { id: 1, content: "Note 1" },
    
  ]);

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleSave = (note) => {
    setNotes(notes.map((n) => (n.id === note.id ? note : n)));
  };
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
    <Draggable handle={isDragging ? null : ".sticky-list"} onStart={() => setIsDragging(true)} onStop={() => setIsDragging(false)} defaultPosition={{x: 0, y: 500}} bounds={bounds} >
      <div className={`sticky-list ${isDragging ? "dragging" : ""}`}>
        <h1>Sticky Notes</h1>
        {notes.map((note) => (
          <StickyNote key={note.id} note={note} onDelete={handleDelete} onSave={handleSave} />
        ))}
      </div>
    </Draggable>
  );
};

export default function App() {
  return <StickyNotes />;
}