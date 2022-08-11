import './App.css';


import React, { Component } from 'react'
import List from './List';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      todos:["hello","noooo","yeeeeeeeeeees"],
      currentTodos:{
        text:''
        
      }

    }
    this.handleInput=this.handleInput.bind(this)
this.addTodo=this.addTodo.bind(this)

  }
  handleInput(e){
    this.setState({
      currentTodos:{
        text:e.target.value
      }
    })
  }
  addTodo(e){
    e.preventDefault()
   const todo=this.state.currentTodos
    // console.log(todo);
    if(todo.text!==""){
       const newtodo=[...this.state.todos,todo]
      this.setState({
        todos:newtodo,
        currentTodos:{
          text:''
        }
      })
    }
  }
  render() {
    return (
      <div className="container">
      
      <h1 className="title">Todo List</h1>
      <form className="add" onSubmit={this.addTodo}>
        <input type="text" value={this.state.currentTodos.text} onChange={this.handleInput} placeholder="add todos"/>
        <button>add</button>
      </form>
      <p>{this.state.todos[0]}</p>
      <p>{this.state.todos[1]}</p>
      <p>{this.state.todos[2]}</p>
   <List todos={this.state.todos}/>
    </div>
    )
  }
}


export default App;
