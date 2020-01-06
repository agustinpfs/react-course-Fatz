import React, {Component} from 'react';  //{Component} is to remove React from React.Component in the component
import './App.css';

import tasks from './sample/tasks.json';
import Tasks from './components/Tasks';

class App extends Component{

  state = {
    tasks: tasks 
  }

  render() {   //key={e.id} -> so that no error
    return <div> 
      <Tasks tasks={this.state.tasks}></Tasks>  {/* //iterate through tasks with map method*/}
    </div>
  }
}

export default App;
