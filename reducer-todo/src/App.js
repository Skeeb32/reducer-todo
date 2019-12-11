import React, { useReducer } from 'react';
import { initialState, myReducer } from "./reducers/reducer";
import TodoList from './components/ToDoList';
import TodoForm from './components/ToDoForm';


function App() {

  const [todoList, dispatch] = useReducer(myReducer, initialState)

  console.log("App.js todoList", todoList)

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList
        todoList={todoList}
        dispatch={dispatch} />
      <TodoForm
        dispatch={dispatch}
        todoList={todoList} />
    </div>
  );
}

export default App;