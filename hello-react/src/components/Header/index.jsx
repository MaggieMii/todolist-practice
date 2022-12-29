import React, { Component } from 'react'
import PropTypes from  'prop-types'
import{nanoid} from 'nanoid'

export default class Header extends Component {

  static propTypes = {
    addToDo:PropTypes.func.isRequired
  }

  handleKeyUp = (event)=>{
    const {keyCode,target}=event
    if(keyCode !== 13) return
    if(target.value.trim()==='')return
    const todoObj = {id:nanoid(),name:target.value,done:false,Hide:false}

    this.props.addToDo(todoObj)
    target.value=''
  }

  render() {
    return (
      <header className="header">
				<h1>todos</h1>
				<input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyUp={this.handleKeyUp}/>
			</header>
    )
  }
}
