import React, {Component} from 'react';

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = e => {
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault();
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value //pass the event data(e.target.value)
        })
    }

    render() {
        return (
            <form onSubmit = {this.onSubmit}>
                <input 
                    type = 'text'
                    name = 'title' 
                    placeholder = 'write a task' 
                    onChange={this.onChange} 
                    value = {this.state.title} />
                <br />
                <br />
                <textarea 
                    name = 'description'
                    placeholder = 'write a description' 
                    onChange={this.onChange} 
                    value = {this.state.description}>
                </textarea>
                <input type='submit'></input>
            </form>
        )
    }
}


// export default TaskForm;