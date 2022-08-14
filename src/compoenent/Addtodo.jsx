import React from 'react'

export const Addtodo = ({add,inp}) => {
  
  return (
    <div>
        <form onSubmit={add} >
            <input  placeholder='add todo' onChange={inp} />
            <button type='submit' >add</button>
        </form>
    </div>
  )
}
