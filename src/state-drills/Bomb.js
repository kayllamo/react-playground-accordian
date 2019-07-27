import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        };
    }
    // using lifecycle method to register an interval when component mounts
    componentDidMount() {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
          console.log('setInterval')
          let newCount = this.state.count;
          this.setState({
            count: newCount + 1
          })
        }, 1000)
      }

      componentWillUnmount() {
          console.log('componentWillUnmount')
          clearInterval(this.interval);
      }

      render() {
            let tick = <p>tick..</p>;
            let tock = <p>..tock..</p>;
            let boom = <p>BOOM!</p>;

        if (this.state.count >= 8) {
              return boom;
       } else if (this.state.count % 2 === 0) {
            return tick;
       } else {
           return tock;
       }
    }
}

export default Bomb;