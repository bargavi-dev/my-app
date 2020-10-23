import React from 'react';
import './App.css';
import Greeter from './components/Greeter';


const names = [
  'Nelson',
  'Atom',
  'Emmy',
  'Cici'
] 


function App() {
  return (
    <div className="App">
      <h1 className="greeting">
        Hello React!
      </h1>
      {
        names.map((name, index) => {
          return <Greeter key={index} id={index} name={name}/>
        })
      }
      <Greeter name="Ted" />

    </div>
  );
}

export default App;
