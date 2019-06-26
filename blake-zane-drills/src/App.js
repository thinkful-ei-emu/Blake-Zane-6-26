import React from 'react';
import './App.css';
import HelloWorld from './state-drills/hello-world';
import Bomb from './state-drills/bomb';
import RouletteGun from './state-drills/RouletteGun';

function App() {
  return (
    <body>
      <HelloWorld/>
      <Bomb/>
      <RouletteGun bulletInChamber={8}/>
    </body>
  );
}

export default App;
