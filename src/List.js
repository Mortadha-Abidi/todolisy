import React from 'react'


export default function List(props) {
    const todos=props.todos
    
    const listTodo=todos.map((ele,index)=>{
        console.log(ele);
        return <div key={index}>
            
            <p>{ele.text}</p>
        </div>
    })
  return (
    <div>
        
        {listTodo}
        
        </div>
  )
}
