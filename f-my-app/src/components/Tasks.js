import React, {Component} from 'react';
import Task from './Task';
// import { array } from 'prop-types';
import PropTypes from 'prop-types';



// list tasks:
class Tasks extends Component {
    render(){
        return this.props.tasks.map(task => 
        <Task
            task={task} 
            key={task.id} 
            deleteTask={this.props.deleteTask} 
            checkDone={this.props.checkDone} 
        />) //key={task.id} -> so that no error
    }
}

Tasks.propTypes  = {                                    //specify the data type of properties 
    tasks : PropTypes.array.isRequired               //expect a property called task with data type "object"
} 

export default Tasks;






// example map method:

// a = [1,2,3]
// a.map((e) => e + 3)

// return new array:
// [4,5,6]