import React, { Component } from "react";
import styled from "styled-components";



class Clock extends Component {
  state = {
      running: false,
    hours: 0,
    minutes: 0,
    seconds: 0,
    stratStopBtn: "Start"
  };

 
  

start = () => {

    if (this.state.running) {
      clearInterval(this.stoper)
      
      this.setState({
        running: false,
        stratStopBtn: "Start"
      })
      console.log("actual running:", this.state.running);
    }
    else if (!this.state.running) {
        this.setState({
            running: true,
            stratStopBtn: "Stop"
        })
        this.stoper = setInterval(()=> this.timer(), 10);
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
        <button onClick={this.start}>{this.state.stratStopBtn}</button>
        
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
