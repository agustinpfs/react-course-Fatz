import React, {Component} from 'react';
import './Task.css';


class Task extends Component {
    render(){
        const {task} = this.props;
        return <p className='red'>
            {task.title} - 
            {task.description} - 
            {task.done} - 
            {task.id}
            <input type ="checkbox" />
            <button>
                X
            </button>
            </p>
    }
}

export default Task;
