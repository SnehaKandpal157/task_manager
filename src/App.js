import React from 'react';
import TaskList from "./component/TaskList";
import Header from "./component/Header";
import Task from "./component/Task";
import TaskForm from "./component/TaskForm";
import "./App.css";
import TaskListContextProvider from "./context/TaskListContext";
const App = ()=>{
  return(
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <Header/>
            <TaskForm/>
            <Task/>
            <TaskList/>
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  )
}

export default App;