import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import TodoItems from "./components/TodoItems";

function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AppTodo></AppTodo>
      <TodoItems></TodoItems>
    </center>
  );
}

export default App;
