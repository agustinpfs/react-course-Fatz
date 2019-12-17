import React from 'react';
// import logo from './logo.svg';
import './App.css';

function HelloWorld() {
  return (
    <div id="hello">hello World</div>
  );
}

function App() {
  return (
    <div> This is my component: <HelloWorld/> <HelloWorld/></div>
  );
}

export default App;
