import { ADD, COMPLETE, DELETE } from "./actionsType"

export const del=(id)=>{
    return {
        type:DELETE,
        payload:id
    }
}
export const comp=(id)=>{
    return {
        type:COMPLETE,
        payload:id
    }
}
export const add=(newTask)=>{
    return {
        type:ADD,
        payload:newTask
    }
}