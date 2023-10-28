import { Link } from "react-router-dom";
import Classes from "./classes";
import Nav from "../../nav";
import TodoList from "./todo/todo-list";

import TodoItem from "./todo/todo-item";

import Condfile from "./conditional-output/cond-if-else";
function Exercise5() {
  return (
    <div>
      <h1>Exercise-5</h1>
      <Nav />
      <Classes/>
      <Condfile/>
      <TodoList/>
    </div>
  );
}

export default Exercise5;
