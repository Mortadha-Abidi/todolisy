import './App.css';


// import React, { Component } from 'react'
// import List from './List';

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       todos:["hello","noooo","yeeeeeeeeeees"],
//       currentTodos:{
//         text:''
        
//       }

//     }
//     this.handleInput=this.handleInput.bind(this)
// this.addTodo=this.addTodo.bind(this)

//   }
//   handleInput(e){
//     this.setState({
//       currentTodos:{
//         text:e.target.value
//       }
//     })
//   }
//   addTodo(e){
//     e.preventDefault()
//    const todo=this.state.currentTodos
//     // console.log(todo);
//     if(todo.text!==""){
//        const newtodo=[...this.state.todos,todo]
//       this.setState({
//         todos:newtodo,
//         currentTodos:{
//           text:''
//         }
//       })
//     }else{
      // alert("enter todo")
    // }
//   }
//   render() {
//     return (
//       <div className="container">
      
//       <h1 className="title">Todo List</h1>
//       <form className="add" onSubmit={this.addTodo}>
//         <input type="text" value={this.state.currentTodos.text} onChange={this.handleInput} placeholder="add todos"/>
//         <button type="submit">add</button>
//       </form>
//       <p>{this.state.todos[0]}</p>
//       <p>{this.state.todos[1]}</p>
//       <p>{this.state.todos[2]}</p>
//    <List todos={this.state.todos}/>
//     </div>
//     )
//   }
// }
import React,{useState} from 'react'
import List from './List';


export const App = (props) => {
  const [todo,setTodo]=useState(["hello","no","ttt"])
  const [text,setText]=useState('')

 function addTodo(e){
  
    e.preventDefault()
    console.log(text,"me");
    const newTodo={
      value:text
    }
    
    if(text!==""){
       setTodo(todo=>[...todo,newTodo])
       console.log(todo);
      setText("")
    
    }else{
      alert("enter todo")
    }

  }
  return (
    <div>
       <h1 className="title">Todo List</h1>
       <form className="add" onSubmit={addTodo} >
         <input type="text" value={text} onChange={e=>setText(e.target.value)} placeholder="add todos"/>
         <button type='submit'>add</button>
       </form>
       <p>{todo[0]}</p>
       <p>{todo[1]}</p>
       <p>{todo[2]}</p>
       <List lol={todo}/>
    </div>
  )
}



export default App;
