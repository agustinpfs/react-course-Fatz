import React, { Component } from 'react'

export default class Posts extends Component {

    async componentDidMount(){
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')       //makes requests to an external server
        const data = await res.json();
        console.log(data)
    }

    render() {
        return (
            <div>
                <h1>Posts</h1>
            </div>
        )
    }
}
