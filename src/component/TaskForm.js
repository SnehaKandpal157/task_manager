import React,{useContext,useState,useEffect} from "react";
import {TaskListContext} from "../context/TaskListContext";

const TaskForm=()=>{
  const [title,setTitle]=useState("");
  const {addTask,clearList,editTask,editItem}=useContext(TaskListContext);
  
  const handleChange=e=>{
    setTitle(e.target.value);
  }
  const handleSubmit=e=>{
   e.preventDefault();
   if(!editItem){
   addTask(title);
  setTitle("");
   }
   else{
     editTask(title,editItem.id);
   }
  }

  useEffect(()=>{
    if(editItem !== null){
      setTitle(editItem.title)
    }
    else{
      setTitle("")
    }

  }, [editItem])

return(
  <form onSubmit={handleSubmit} className="form">
  <input value={title} type="text" placeholder="Add Task..." required className="task-input" onChange={handleChange}/>
  <div className="buttons">
  <button className="btn-add task-btn" >{editItem?"Edit Task":"Add Task" }</button>
  <button onClick={clearList} className="btn clear-btn">Clear</button>
  </div>
  </form>
)
}

export default TaskForm;