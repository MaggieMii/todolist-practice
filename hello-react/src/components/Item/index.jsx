import React, { Component } from 'react'

export default class Item extends Component {

  state={isRevisable:false}

  handleCheck=(id)=>{
    return(event)=>{
      this.props.updateTodo(id,event.target.checked)
    }
  }
  
  handleDelete = (id) =>{
    this.props.deleteTodo(id)
  }
  
  handleAmend = () =>{
    this.setState({isRevisable:true})
  }

  handleUnamend = () =>{
    this.setState({isRevisable:false})
  }

  handleChange=(id)=>{
    return(event)=>{
      this.props.changeTodo(id,event.target.value)
    }
  }

  handleConfirm = (id)=>{
  return(event)=>{
    const {keyCode,target}=event
    if(keyCode !== 13) return
    this.setState({isRevisable:false})
    if(target.value.trim()==='') this.handleDelete(id)
  }
}

  render() {
    const {id,name,done,hide}=this.props
    return (
      <li className={(done?'completed':'')+' '+(this.state.isRevisable?'editing':'')}style={hide?{display:'none'}:{display:'block'}}>
        <div className='view'>
          <input type="checkbox" className='toggle' checked={done} onChange={this.handleCheck(id)} />
          <label onDoubleClick={this.handleAmend} >{name}</label>
          <button className='destroy' onClick={()=> this.handleDelete(id)}></button>
        </div>
        <input className='edit' type='text' value={name} style={this.state.isRevisable?{display:'block'}:{display:'none'}} onBlur={this.handleUnamend} onChange={this.handleChange(id)} onKeyUp={this.handleConfirm(id)}/>
      </li>
    )
  }
}
