import React, { Component } from 'react'


export default class Footer extends Component {

	state={allSelected:true,activeSelected:false,completedSelected:false}

	handleClearAllDone = () =>{
		this.props.clearAllDone()
	}

	handleAllClick = () =>{
		this.setState({allSelected:true,activeSelected:false,completedSelected:false})
		this.props.changeAllHide()
	}

	handleActiveClick = () =>{
		this.setState({allSelected:false,activeSelected:true,completedSelected:false})
		this.props.changeActiveHide()
	}

	handleCompletedClick = () =>{
		this.setState({allSelected:false,activeSelected:false,completedSelected:true})
		this.props.changeCompletedHide()
	}

  render() {
	const{todos}=this.props
	const doneCount = todos.reduce((pre,todo)=>{return pre + (todo.done?1:0) },0)
	const undoneCount = todos.length-doneCount
    return (
      <footer className="footer">
					<span className="todo-count">{undoneCount}{undoneCount==1?'item':'items'} left</span>
					<ul className="filters">
						<li>
							<a href="#/" className={this.state.allSelected?"selected":''} onClick={this.handleAllClick}>All</a>
						</li>
						<li>
						<a href="#/active"className={this.state.activeSelected?"selected":''} onClick={this.handleActiveClick}>Active</a>
						</li>
						<li>
						<a href="#/completed"className={this.state.completedSelected?"selected":''} onClick={this.handleCompletedClick}>Completed</a>
						</li>
					</ul>
					<button className="clear-completed" onClick={this.handleClearAllDone}>Clear completed</button>
				</footer>
    )
  }
}
