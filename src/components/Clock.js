import React, { Component } from "react";
import styled from "styled-components";



class Clock extends Component {
  state = {
      running: false,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

 


start = () => {
    if (!this.state.running) {
        this.setState({
            running: true
        })
        const stoper = setInterval(()=> this.timer(), 10);
    } else {
        clearInterval(this.stoper);
        this.setState({
            running: false
        })
        
    }
}



timer = () => {
    this.setState({
        seconds: this.state.seconds + 1,
    })
}

  render() {
    return (
     
         
        <ClockWrapper><h2>Time:</h2>
          <div className="container">{this.state.hours}:</div>
          <div className="container">{this.state.minutes}:</div>
          <div className="container">{this.state.seconds}</div><br/>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
        </ClockWrapper>
        
      
    );
  }
}

export const ClockWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  .container {
    padding: 0.5rem;
    font-size: 1.4rem;
  }
`;

export default Clock;
