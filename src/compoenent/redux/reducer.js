import { ADD, COMPLETE, DELETE } from "./actionsType";

const init=[
    {id:Math.random(),action:"learn Redux",isDone:true},
  {id:Math.random(),action:"learn HTML",isDone:true},
  {id:Math.random(),action:"learn CSS",isDone:true}
]
const reducer=(state=init,{type,payload})=>{
    switch (type) {
        case DELETE:
            
            return state.filter(el=>el.id!==payload)
         case COMPLETE:
            return state.map((el=>(el.id===payload?{...el,isDone:!el.isDone}:el)))
        case ADD:
            return [...state,payload]
        default:
            return state
    }
}
export default reducer