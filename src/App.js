import React, { Component } from 'react';
import uuid from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Item from "./components/TodoItem";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          
          <TodoInput />
          <TodoList />
        
        </div>
      </div>
    );
  }
}

export default App;
