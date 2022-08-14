
import React, { Component } from 'react'
import { Addtodo } from './compoenent/Addtodo'
import { Todolist } from './compoenent/Todolist'
import './App.css'
import Swal from 'sweetalert2'

export default class App extends Component {
  state={
tasks:[
  {id:Math.random(),action:"learn js",isDone:true},
  {id:Math.random(),action:"learn HTML",isDone:true},
  {id:Math.random(),action:"learn CSS",isDone:true}
],
newtasks:{
  id:Math.random(),
  action:"",
  isDone:true
}
}
handleInput=(e)=>{
  this.setState({
    newtasks:{
      id:Math.random(),
      action:e.target.value,
      isDone:true
    }
  })
    
};
handleAdd=(e)=>{
  e.preventDefault()
  const todo=this.state.newtasks
  if(todo.action!==""){
    this.setState({
    tasks:[todo,...this.state.tasks],
  
  })
  }else{
    Swal.fire('add fucnking todo ')
  }
}

handleDelete=(x)=>(this.setState({tasks:this.state.tasks.filter(el=>x!==el.id)}))
handleComplete=(y)=>{
  this.setState({tasks:this.state.tasks.map(el=>el.id===y?{
    ...el,isDone:!el.isDone
  }:el)})
} 

  render() {
    return (
      <div>
        <Addtodo add={this.handleAdd}   inp={this.handleInput}/>
        <Todolist comp={this.handleComplete}  del={this.handleDelete} tasks={this.state.tasks}/>
      </div>
    )
  }
}

























