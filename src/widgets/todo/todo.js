import React, { useState } from "react";
import Draggable from "react-draggable";
import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import "./todo.css";

const TodoItem = ({ item, onCheck, onDelete }) => {
  const [checked, setChecked] = useState(false);
  const [items, setItems] = useState([]);

  const handleCheck = () => {
    setChecked(!checked);
    onCheck(item.id);
  };

  const handleDelete = () => {
    
  };

  const handleDeleteWidgets = () => {
  const widgetsContainer = document.querySelector(".widgets-container");
  widgetsContainer.innerHTML = '';
  setItems([]);
};

 return (
    <div className="todo-item">
      <div className={`check ${checked ? "checked" : ""}`} onClick={handleCheck}>
        <FaCheck />
      </div>
      <div className={`title ${checked ? "checked" : ""}`}>{item.title}</div>
      <div className="delete" onClick={handleDelete}>
        <FaTrash />
      </div>
    </div>
  );
};

const TodoList = ({ todos, onCheck, onAdd }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      onAdd(newTodo);
      setNewTodo("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && newTodo.trim() !== "") {
      onAdd(newTodo);
      setNewTodo("");
    }
  };

  const onStart = () => {
    setIsDragging(true);
  };

  const onStop = () => {
    setIsDragging(false);
  };

  return (
    <Draggable handle={isDragging ? null : ".todo-list"} onStart={onStart} onStop={onStop} defaultPosition={{x: -1050, y: 500}} bounds={{ top: 200, left: -1100, right: -50, bottom: 1000 }} >
      <div className={`todo-list ${isDragging ? "dragging" : ""}`}>
        <h1>Todo List</h1>
        {todos.map((todo) => (
          <TodoItem key={todo.id} item={todo} onCheck={onCheck} />
        ))}
        <div className="add-todo">
          <input
            style={{ border: "none",outline:"none", borderBottom: "2px solid black" }}
            placeholder="Add new todo"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </Draggable>
  );
};

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Complete task A" },
    { id: 2, title: "Read book B" },
    { id: 3, title: "Finish project C" },
  ]);

  const handleCheck = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleAddTodo = (newTitle) => {
    const newTodo = { id: todos.length + 1, title: newTitle };
    setTodos([...todos, newTodo]);
  };

  return <TodoList todos={todos} onCheck={handleCheck} onAdd={handleAddTodo} />;
}