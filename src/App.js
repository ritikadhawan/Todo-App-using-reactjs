import React from 'react';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid'; //uuid is used to generate random ids

class App extends React.Component {
  state = {
    todos : [
      {
        id:uuid.v4(),
        title: "Take out trash",
        completed: false
      },
      {
        id:uuid.v4(),
        title: "Dinner tonight",
        completed: false
      },
      {
        id:uuid.v4(),
        title: "Meeting with boss",
        completed: false
      }

    ]
      
  }
  markComplete = (id)=>{
    
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id)
        {
          todo.completed = !todo.completed;  //toggling the value on click
        }
        return todo;
      })
    });

  }
  //delete todo
  delTodo = (id) =>{
    console.log(id);
    this.setState(
      {
        todos: [...this.state.todos.filter(todo => todo.id !== id)]   //using spread operatior we are copying elements and filtering out 
      });
  }
  //add todo
  addTodo = (title)=>{
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos,newTodo] })
  }


  render(){
    return (
      <div className = "App">
        <div className = "container">
          <Header/>
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/>
        </div>
        
      </div>
    );
  }
  
}

export default App;
