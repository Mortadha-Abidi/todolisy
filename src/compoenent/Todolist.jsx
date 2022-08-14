import React from 'react'
import { Todo } from './Todo'

export const Todolist = ({comp,tasks,del}) => {
  return (

    <div>
        {tasks.map(el=><Todo comp={comp} del={del} task={el} key={el.id}/>)}
    </div>
  )
}
