import React, { useState,useEffect } from "react";
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

  const handleDelete  = () => {
    onDelete(item.id)
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

const TodoList = ({ todos, onCheck, onAdd,onDelete }) => {
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
  const handleDelete = (id) => {
    onDelete(id);
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
    left: 0,
    right: width * 0.87,
    bottom: height * 0.6,
  };

  return (
    <Draggable handle={isDragging ? null : ".todo-list"} onStart={onStart} onStop={onStop} defaultPosition={{x: 0, y: 500}} bounds={bounds} >
      <div className={`todo-list ${isDragging ? "dragging" : ""}`}>
        <h1>Todo List</h1>
        {todos.map((todo) => (
          <TodoItem key={todo.id} item={todo} onCheck={onCheck} onDelete={handleDelete} />
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
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return <TodoList todos={todos} onCheck={handleCheck} onAdd={handleAddTodo} onDelete={handleDeleteTodo} />;
}