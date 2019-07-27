import React, { Component } from 'react';

class HelloWorld extends React.Component {
  constructor (props) {
        super(props)
        this.state = {
            who: 'world'
        };
  }

  handleClick = (word) => {
      this.setState({
          who: 'world'
      })
  }

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}!</p>
        <button onClick={() => this.handleClick('World')}>World</button>
        <br/>
        <button onClick={() => this.handleClick('Friend')}>Friend</button>
        <br />
        <button onClick={() => this.handleClick('React')}>React</button>
      </div>
    );
  }
}

export default HelloWorld;