import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import {add} from './redux/actions'

export const Addtodo = () => {
  const [ejdid,setEjdid]=useState("")
  const handleInp=(e)=>{
    setEjdid(e.target.value)
  }
  const dispatch=useDispatch()
 const handleform=(e)=>{
    e.preventDefault()
    ejdid===""?
    Swal.fire('add fucnking todo '):
    dispatch(add({id:Math.random(),
    action:ejdid,
    isDone:false
    
    }))
    setEjdid("")
  }
  return (
    <div>
        <form onSubmit={handleform} >
            <input  placeholder='add todo' onChange={handleInp} />
            <button type='submit' >add</button>
        </form>
    </div>
  )
}
