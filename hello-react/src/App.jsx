import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import './App.css'
import Footer from './components/Footer'
export default class App extends Component {

  state = {todos:[
    {id:'001',name:'吃',done:false,Hide:false},
    {id:'002',name:'喝',done:true,Hide:false}
  ]

  }

  addToDo=(todoObj)=>{
    const newTodos =[todoObj,...this.state.todos]
    this.setState({todos:newTodos})
  }
  updateTodo=(id,done)=>{
    const{todos}=this.state
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.id===id)return {...todoObj,done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }

  deleteTodo=(id)=>{
    const {todos}=this.state
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id
  })
  this.setState({todos:newTodos})
  }
  checkAllTodo = (done)=>{
    const {todos} = this.state
   const newTodos = todos.map((todoObj)=>{
      return {...todoObj,done}
    })
    this.setState({todos:newTodos})
  }
  handleCheckAll=(event)=>{
    return this.checkAllTodo(event.target.checked)
  }

  clearAllDone = ()=>{
    const {todos} =this.state
    const newTodos= todos.filter((todoObj)=>{
      return !todoObj.done
    })
    this.setState({todos:newTodos})

  }
  changeTodo =(id,name)=>{
    const{todos}=this.state
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.id===id)return {...todoObj,name}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }

  changeAllHide = ()=>{
    const{todos}=this.state
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj,hide:false}
    })
    this.setState({todos:newTodos})
  }

  changeActiveHide=()=>{
    const{todos}=this.state
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.done===true)return {...todoObj,hide:true}
      else return {...todoObj,hide:false}
    })
    this.setState({todos:newTodos})
  }

  changeCompletedHide=()=>{
    const{todos}=this.state
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.done===true)return {...todoObj,hide:false}
      else return {...todoObj,hide:true}
    })
    this.setState({todos:newTodos})
  }

  render() {

    const doneCount = this.state.todos.reduce((pre,todo)=>{return pre + (todo.done?1:0) },0)
	const undoneCount = this.state.todos.length-doneCount

    return (
      <div>
        <section className="todoapp">
          <Header addToDo={this.addToDo}/>
          <section style={this.state.todos.length==0?{display:'none'}:{display:'block'}} className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" checked={doneCount==this.state.todos.length} onChange={this.handleCheckAll}/>
            <label htmlFor="toggle-all">Mark all as complete</label>
            <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} changeTodo={this.changeTodo}/>
            <Footer todos={this.state.todos} clearAllDone={this.clearAllDone} changeAllHide={this.changeAllHide} changeActiveHide={this.changeActiveHide} changeCompletedHide={this.changeCompletedHide}/>
			    </section>
		    </section>
		  <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Written by <a href="http://twitter.com/lukeed05">Luke Edwards</a></p>
        <p>Refactored by <a href="https://github.com/xorgy">Aaron Muir Hamilton</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
		  </footer>
      </div>
    )
  }
}
