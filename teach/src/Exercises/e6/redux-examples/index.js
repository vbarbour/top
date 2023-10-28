import React from "react";
import HelloRedux from "./hello-redux";
import hello from "./reducers/hello";
import { Provider } from "react-redux";
import todos from './reducers/todo-reducer'

import { configureStore } from "@reduxjs/toolkit";


const store = createStore(hello);

function ReducExample() {
  return (
    <Provider store={store}>
      <div>
        <h2>Redux Example</h2>
        <HelloRedux/>
      </div>
    </Provider>
  );
}

export default ReducExample;
