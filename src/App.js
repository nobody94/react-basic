import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestApp from './TestApp';
import Practice from './Practice';

function App() {
  const user = {
    name :"Prudence",
    instagram:"prudence#Night",
    fullname:"Prudence Night"
  }
  const list = {
     fruit: "Melon",
     music:"Pop",
     movie:"Horror"
  }
  return (
    <div className="App">
     <TestApp user={user} status="single" pet="dog"/>
     <Practice list={list}/>
    </div>
  );
}

export default App;
