import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
    };
    this.tick = this.tick.bind(this);
  }

  tick () {
    this.setState({time: new Date()});
  }

  componentDidMount () {
    this.intervalId = setInterval(this.tick,1000);
  }

  componentWillUnmount () {
    clearInterval(this.intervalId);
  }

  render () {
    return (
      <div className="clock">
        <h1>clock</h1>
        <div className="clock-box">
          <p className="time">
            <span>Time: </span>
            <span>{this.state.time.getHours()}:
            {this.state.time.getMinutes()}:
            {this.state.time.getSeconds()}</span>
          </p>
          <p className="date">
            <span>Date: </span>
            <span>{this.state.time.toDateString()}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Clock;
