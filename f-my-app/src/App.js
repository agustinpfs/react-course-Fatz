import React from 'react';
// import logo from './logo.svg';
import './App.css';

function HelloWorld(props) {
  return (
    <div id="hello">
      <h3>{props.myText}</h3>
      {props.myText}
    </div>
  );
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
