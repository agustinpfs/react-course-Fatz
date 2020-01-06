import React, {Component} from 'react';
// import './Task.css';


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
            <button style={btnDelete}>
                X
            </button>
            </p>
    }
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
