import React, { Component } from 'react';
import './App.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import TaskList from "./componetns/tasklist";
import TaskForm from "./componetns/taskform";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoaded: false,
      tasks: []
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        {!this.state.isLoaded ? <CircularProgress /> : <TaskForm createTask={(task) => this.createTask(task)} />}
        {this.state.isLoaded ? <TaskList tasks={this.state.tasks} removeTask={(taskIndex)=> this.removeTask(taskIndex)} /> : null}
      </div>
    );
  }
  componentDidMount(){
    let savedTasks = localStorage.getItem('tasks');
    if(savedTasks){
      this.setState({...this.state, ...{isLoaded: true, tasks: JSON.parse(savedTasks)}});
    }else{
      this.setState({...this.state, isLoaded: true});
    }
  }
  createTask(task){
    this.setState({...this.state, ...{tasks: [...this.state.tasks, task]}}, () => {
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    });
  }
  removeTask(taskIndex){
    let tasks = [...this.state.tasks];
    tasks.splice(taskIndex, 1);
    this.setState({...this.state, tasks: tasks},() => {
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    });
    console.log(taskIndex, tasks, this.state);
  }
}

export default App;
