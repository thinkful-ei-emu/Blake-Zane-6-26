import React from 'react';

class AccordianItem extends React.Component{
  
  constructor(props){
    super(props);
  this.state = {
    expanded: false
  };
  }

  handelClick(){
    this.setState(
      {expanded: !this.state.expanded}
    );
    console.log(`expanded is ${this.state.expanded}`);
  }

  render(){
    return (
    <li>
      <button onClick={() => this.handelClick()} >{this.props.title}</button>
      {this.state.expanded && <p>{this.props.content}</p>}
    </li>
    );
  }

}

export default AccordianItem;