import React, { useState } from "react";
import Draggable from "react-draggable";
import { FaCheck } from "react-icons/fa";
import "./todo.css";

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

const TodoList = ({ todos, onCheck }) => {
  const [isDragging, setIsDragging] = useState(false);

  const onStart = () => {
    setIsDragging(true);
  };

  const onStop = () => {
    setIsDragging(false);
  };

  return (
    <Draggable handle={isDragging ? null : ".todo-list"} onStart={onStart} onStop={onStop} defaultPosition={{x: -1050, y: 500}}>
      
      
      <div className={`todo-list ${isDragging ? "dragging" : ""}`}>
      <h1>Todo List</h1>
        {todos.map((todo) => (
          <TodoItem key={todo.id} item={todo} onCheck={onCheck} />
        ))}
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

  return (
    
      <TodoList todos={todos} onCheck={handleCheck} />
    
  );
}
