import React, {Component} from 'react';
import Task from './Task';
import { array } from 'prop-types';


// list tasks:
class Tasks extends Component {
    render(){
        return this.props.tasks.map(task => <Task task={task} key={task.id}></Task>) //key={e.id} -> so that no error
    }
}

export default Tasks;






// example map method:

// a = [1,2,3]
// a.map((e) => e + 3)

// return new array:
// [4,5,6]