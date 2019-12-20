import React, {Component} from 'react';
import Task from './Task';


// list tasks:
class Tasks extends Component {
    render(){
        return this.props.tasks.map(task => <Task task={task} key={task.id}></Task>)
    }
}

export default Tasks;