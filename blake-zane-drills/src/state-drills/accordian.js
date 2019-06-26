import React from 'react';
import AccordianItem from './accordian-item';

class Accordian extends React.Component {


render(){

  let itemList = this.props.sections.map( (section , key) => <AccordianItem title={section.title} content={section.content} key={key}/>); 

  return(
   <ul>
    {itemList}
   </ul>
  );
}

}
export default Accordian;