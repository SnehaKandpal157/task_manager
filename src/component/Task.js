import React, { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext)
  return (
    task?(
    <li className="list-item">
      <span>{task.title} </span>
      <div>
        <button
          className="btn-delete delete-btn"
          onClick={() => removeTask(task.id)}
        >
          Delete
        </button>
        <button className="btn-edit edit-btn" onClick={() => findItem(task.id)}>
         Edit
        </button>
      </div>
    </li>
    ):null
  )
}

export default Task;