import React from 'react'


export default function List(props) {
    const todos=props.lol
    console.log(todos)
    
    const listTodo=todos.map((ele,index)=>{
        console.log(ele);
        return <div key={index}>
            
            <p>{ele.value}</p>
        </div>
    })
  return (
    <div>
        
        {listTodo}
        
        </div>
  )
}
