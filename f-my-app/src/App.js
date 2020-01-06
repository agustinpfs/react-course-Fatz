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

  render() {   //key={e.id} -> so that no error
    return <div> 
      <TaskForm />
      <Tasks tasks={this.state.tasks}></Tasks>  {/* //iterate through tasks with map method*/}
    </div>
  }
}

export default App;
