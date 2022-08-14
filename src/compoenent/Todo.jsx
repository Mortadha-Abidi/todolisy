import React from 'react'

export const Todo = ({comp,task,del}) => {
  return (
    <div className={task.isDone?"complete":""}>
        <h1>{task.action}</h1>
        <button onClick={()=>{del(task.id)}}>delete</button>
        <button onClick={()=>{comp(task.id)}}>{task.isDone?"undo":"complete"}</button>
    </div>
  )
}
