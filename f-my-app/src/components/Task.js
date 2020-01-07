import React, {Component} from 'react';
// import './Task.css';
import PropTypes from 'prop-types';


class Task extends Component {

    StyleCompleted() {     /* when task is completed */
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'blak', //of the task I am receiving, if its "done" property is true, place the text in gray, if not in black
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render(){
        const {task} = this.props;
        return <p style={this.StyleCompleted()}>
            {task.title} - 
            {task.description} - 
            {task.done} - 
            {task.id}
            <input type ="checkbox" />
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>
                X
            </button>
            </p>
    }
}

Task.propTypes  = {                                    //specify the data type of properties 
    task : PropTypes.object.isRequired               //expect a property called task with data type "object"
}  

const btnDelete = {
    fontSize : '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task;
