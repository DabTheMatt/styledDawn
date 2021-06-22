import React, { Component } from "react";
import ReactPlayer from "react-player/youtube";
import styled from "styled-components";

class Video extends Component {
  state = {
    running: false,
    hours: 0,
    minutes: 0,
    seconds: 0,
    stratStopBtn: "Start",
    started: true,
    progress: 0,
    duration: 0,
    shotsArray: [{ time: 0 }],
    counter: 0,
    onAxisPositon: "",
    order: ""
  };

  onStart = () => {
    console.log("started");
  };

  start = () => {
    console.log("ddd");
    this.setState({
      running: true,
    });
  };

  pause = () => {
    console.log("ppp");
    this.setState({
      running: false,
    });
  };

  timer = () => {
    this.setState({
      seconds: this.state.seconds + 1,
    });
  };

  duration = (e) => {
    console.log("duration", e);
    this.setState({
      duration: e,
    });
  };

  progress = (e) => {
    console.log("progress", e.playedSeconds);
    let onAxis = (this.state.progress * 100) / this.state.duration;
    this.setState({
      progress: e.playedSeconds,
      onAxisPositon: onAxis,
    });
  };

  handleShot = () => {

    if (!this.state.running) {
      return;
    } else {
      console.log(this.state.running);
      const shot = {
        time: this.state.progress.toFixed(3),
        position: this.state.onAxisPositon,
        order: this.state.shotsArray.length
      };
      let tempArray = this.state.shotsArray;
      this.setState({
        shotsArray: [...tempArray, shot],
        running: true,
      });
      console.log("el.time", shot.time);
      console.log(this.state.shotsArray);
    }
  };

  render() {
    return (
      <OuterWrapper>
        <VideoPageWrapper>
          <VideoWrapper>
            <ReactPlayer
              controls={true}
              width={"auto"}
              height={"100%"}
              onDuration={(e) => this.duration(e)}
              onProgress={(e) => this.progress(e)}
              onPlay={this.start}
              onPause={this.pause}
              url="https://www.youtube.com/watch?v=RdSmokR0Enk"
            />
          </VideoWrapper>

          <div className="timeDisplay">
            <h1>Actual Video Time (AVT)</h1>
            <h2>{this.state.progress.toFixed(0)} s</h2>
            <h1>Video duration</h1>
            <h2>{this.state.duration} s</h2>
            <h1>Actual Shots Count:</h1>
            <h2>{this.state.shotsArray.length}</h2>

            <button id="count" onClick={this.handleShot}>
              +1
            </button>

            <div>
              {this.state.shotsArray.map((el) => {
                return <div>{el.time}</div>;
              })}
            </div>
          </div>
        </VideoPageWrapper>
        <GraphWrapper>
          <div className="graphBcg">
            <div className="graph">
              <div className="axisX">
                <div className="startTime">0</div>
                <div className="endTime">{this.state.duration}</div>
              {this.state.shotsArray.map((el)=>{
                  return(
                      <div className="shotOnAxis" style={{left: `${el.position-(0.3*el.order)}%`}}></div>
                  )
              })}
                

                <div
                  className="playHead"
                  style={{ left: `${this.state.onAxisPositon}%` }}
                >
                  <div className="timeOnAxis">
                    {this.state.progress.toFixed(0)} s
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GraphWrapper>
      </OuterWrapper>
    );
  }
}

export const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VideoPageWrapper = styled.div`
  display: flex;
  p {
    color: white;
  }
  .timeDisplay {
    width: 20vw;
    min-width: 250px;
    color: white;
    text-align: center;
    background: black;
  }
`;

export const VideoWrapper = styled.div`
  height: 80vh;
  width: 80vw;
  background: black;
`;

export const GraphWrapper = styled.div`
  height: 20vh;
  width: 100%;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  .graphBcg {
    height: 85%;
    width: 95%;
    background: grey;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .axisX {
    width: 90vw;
    height: 0.1vh;
    background: white;
    z-index: 1;
    position: relative;
    
  }
  .playHead {
    height: 2vh;
    background: red;
    width: 0.3%;
    position: relative;
    top: -8vh;
  }
  .timeOnAxis {
    width: 5vw;
    position: relative;
    top: 3vh;
    left: -1.5vw;
  }

  .startTime {
    width: auto;
    position: relative;
    top: -5vh;
    left: -0.3vw;
  }
  .endTime {
    width: auto;
    position: relative;
    top: -7vh;
    left: 88vw;
  }

  .shotOnAxis {
    height: 4vh;
    background: green;
    width: 0.3%;
    position: relative;
    top: -5vh;
    z-index: 3;
    display: inline-block;
  }
`;

export default Video;
