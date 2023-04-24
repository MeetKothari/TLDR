import React, { useState } from "react";
import Draggable from "react-draggable";
import { FaCheck } from "react-icons/fa";
import "./sticky.css";

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
  const [text, setText] = useState(note.content);

  const handleDelete = () => {
    onDelete(note.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setText(note.content);
    setIsEditing(false);
  };

  const handleSave = () => {
    onSave({ ...note, content: text });
    setIsEditing(false);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="StickyNote">
      {isEditing ? (
        <div>
          <textarea value={text} onChange={handleChange} />
          <div className="buttons">
            <button className="save" onClick={handleSave}>
              Save
            </button>
            <button className="cancel" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p>{note.content}</p>
          <div className="buttons">
            <button className="edit" onClick={handleEdit}>
              Edit
            </button>
            <button className="delete" onClick={handleDelete}>
              Delete
            </button>
          </div>
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
    <Draggable handle={isDragging ? null : ".todo-list"} onStart={() => setIsDragging(true)} onStop={() => setIsDragging(false)} defaultPosition={{x: -350, y: 500}}>
      <div className={`todo-list ${isDragging ? "dragging" : ""}`}>
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