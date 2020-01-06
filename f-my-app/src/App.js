import React, {Component} from 'react';  //{Component} is to remove React from React.Component in the component
import './App.css';

import tasks from './sample/tasks.json';

// Components
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';


class App extends Component{

  state = {
    tasks: tasks 
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    // console.log(newTask)
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  render() {   //key={e.id} -> so that no error
    return <div> 
      <TaskForm addTask={this.addTask}/>
      <Tasks tasks={this.state.tasks}></Tasks>  {/* //iterate through tasks with map method*/}
    </div>
  }
}

export default App;