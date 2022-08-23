
import React, { Component } from 'react'
import { Addtodo } from './compoenent/Addtodo'
import { Todolist } from './compoenent/Todolist'
import './App.css'

export default class App extends Component {


  render() {
    return (
      <div>
        <Addtodo />
        <Todolist />
      </div>
    )
  }
}

























