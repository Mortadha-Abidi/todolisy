import React from 'react'
import { Todo } from './Todo'
import { useSelector } from 'react-redux'

export const Todolist = () => {
  const state=useSelector(state=>state)
  console.log('rani state',state);
  return (

    <div>
        {state.map(el=><Todo   task={el} key={el.id}/>)}
    </div>
  )
}
