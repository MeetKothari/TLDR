import React, { useState } from "react";
import Draggable from "react-draggable";
import { FaCheck } from "react-icons/fa";
import "./sticky.css";
import DelSvg from './del.svg'

const TodoItem = ({ item, onCheck }) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
    onCheck(item.id);
  };
  return (
    <div className="todo-item">
      <div className={`check ${checked ? "checked" : ""}`} onClick={handleCheck}>
        <FaCheck />
      </div>
      <div className={`title ${checked ? "checked" : ""}`}>{item.title}</div>
    </div>
  );
};

const StickyNote = ({ note, onDelete, onSave }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [text, setText] = useState(note.content);
  
    const handleDelete = () => {
      onDelete(note.id);
    };
  
    const handleCancel = () => {
      setText(note.content);
      setIsEditing(false);
    };
  
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
            {/* <div className="buttons">
              <button className="delete" onClick={handleDelete}>
            <img width="20px"src={DelSvg} alt="delete"/>
              </button>
            </div> */}
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

  return (
    <Draggable handle={isDragging ? null : ".sticky-list"} onStart={() => setIsDragging(true)} onStop={() => setIsDragging(false)} defaultPosition={{x: -350, y: 500}} bounds={{ top: 200, left: -1100, right: -50, bottom: 1000 }} >
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