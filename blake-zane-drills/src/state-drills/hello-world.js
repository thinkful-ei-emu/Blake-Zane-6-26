import React from 'react';

class HelloWorld extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    who: 'World'
  }
}

handleWhoClick(who) {
  this.setState(
    {who: who}
  );
}


render() {
  return(
    <div>
      <p>hello, {this.state.who}</p>
      <button onClick={() => this.handleWhoClick('World')}>World</button>
      <button onClick={() => this.handleWhoClick('Friend')}>Friend</button>
      <button onClick={() => this.handleWhoClick('React')}>React</button>
    </div>
  );
}


}

export default HelloWorld;