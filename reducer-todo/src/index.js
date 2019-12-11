import React from 'react';
import ReactDOM from "react-dom";
import App from "./App"

const data = [
    {
      task: "Clean Room",
      id: 1,
      completed: false
    },
    {
      task: "Buy Groceries",
      id: 2,
      completed: false
    },
    {
      task: "Wash Car",
      id: 3,
      completed: false
    },
    {
      task: "Go For A Walk",
      id: 4,
      completed: false
    },
    {
      task: "Study",
      id: 5,
      completed: false
    },
    {
      task: "Call Parents",
      id: 6,
      completed: false
    }
  ];
export default data;

 
        
        
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);