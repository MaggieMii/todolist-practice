import React, { Component } from 'react'
import PropTypes from  'prop-types'
import Item from '../Item'
export default class List extends Component {

	static propTypes = {
		todos:PropTypes.array.isRequired,
		updateTodo:PropTypes.func.isRequired,
		deleteTodo:PropTypes.func.isRequired
	  }

  render() {
	const{todos,updateTodo,deleteTodo,changeTodo}=this.props
    return (
		<ul className="todo-list">
			{
				todos.map((todo)=>{
					return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} changeTodo={changeTodo}/>
				})
			}

		</ul>
	)
  }
}
