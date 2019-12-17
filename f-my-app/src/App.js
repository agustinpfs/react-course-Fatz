import React from 'react';
// import logo from './logo.svg';
import './App.css';

function HelloWorld() {
  return (
    <div id="hello">hello World</div>
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
    <div> This is my component: <HelloWorld/></div>
  );
}

export default App;
