import React, {Component} from 'react';
import './Task.css';


class Task extends Component {
    render(){
        const {task} = this.props;
        return <p>
            {task.title} - 
            {task.description} - 
            {task.done} - 
            {task.id}
            <input type ="checkbox" />
            <button style={btnDelete}>
                X
            </button>
            </p>
    }
}

const btnDelete = {
    fontSize : '18px'
}

export default Task;
