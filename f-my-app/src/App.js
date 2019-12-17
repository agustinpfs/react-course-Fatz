import React from 'react';
// import logo from './logo.svg';
import './App.css';

// function HelloWorld(props) {
//   return (
//     <div id="hello">
//       <h3>{props.myText}</h3>
//       {props.myText}
//     </div>
//   );
// }


// state: each component has its own state
class HelloWorld extends React.Component {

  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.myText}
          <button onClick={this.toggleShow}>Toggle show</button>
        </div>
      );    
    } else {
      return <h1>
        There are not elements
        <button onClick={this.toggleShow}>
          Toggle show
        </button>
      </h1>
    }
  }  
}

// class App extends React.Component {
//   render() {
//     return   <div> This is my component: <HelloWorld/> </div>
//   }
// }

// const App = () => <div> This is my component: <HelloWorld/> </div>

function App() {
  return (
    <div> 
      This is my component: 
      <HelloWorld myText="hello aguja" subtitle="lorem"/>
      <HelloWorld myText="hello world" subtitle="Ipsum"/>
      <HelloWorld myText="hello!" subtitle="dignissimos"/>
    </div>
  );
}

export default App;
