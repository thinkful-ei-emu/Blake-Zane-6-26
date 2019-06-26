import React from 'react';

class Bomb extends React.Component {
constructor(props){
  super(props);
  this.state = {
    count: 0,
  };
}
componentDidMount(){
  this.interval = setInterval(()=>{
  this.setState(
    {count: this.state.count + 1}
  );
  console.log(this.state.count);
  }
  , 1000);
}
componentWillUnmount(){
  clearInterval(this.interval);
}

  render() {
    let count = this.state.count;
    if(count>=8){clearInterval(this.interval)}
    return(
      <div>
      {count % 2 === 0 && count < 8 && <p>Tick</p>}
      {count % 2 !== 0 && count < 8 && <p>Tock</p>}
      {count >= 8 && <p>BOOM!!!</p>}
      </div>
    );
  }

}

export default Bomb;