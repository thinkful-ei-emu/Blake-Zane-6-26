import React from 'react';
import './App.css';
import HelloWorld from './state-drills/hello-world';
import Bomb from './state-drills/bomb';
import RouletteGun from './state-drills/RouletteGun';
import Accordian from './state-drills/accordian';

function App() {
  const sections = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ];
  return (
    <body>
      <HelloWorld/>
      <Bomb/>
      <RouletteGun bulletInChamber={8}/>
      <Accordian sections={sections}/>
      
    </body>
  );
}

export default App;
