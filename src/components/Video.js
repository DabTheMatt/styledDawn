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
    shotsArray: [],
    shotColor: "",
    shotSize: "",
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

  handleShot = (color, size) => {

    if (!this.state.running) {
      return;
    } else {
      console.log(this.state.running);
      const shot = {
        time: this.state.progress.toFixed(3),
        position: this.state.onAxisPositon,
        order: this.state.shotsArray.length,
        shotColor: color,
        shotSize: size
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
              url="https://www.youtube.com/watch?v=G0QGi7_KWFE"
            />
            <GraphWrapper>
          <div className="graphBcg">
            <div className="graph">
              <div className="axisX">
                <div className="startTime">0</div>
                <div className="endTime">{this.state.duration}</div>
                <div className="shotOnAxis" style={{background: "black"}}></div>
              {this.state.shotsArray.map((el)=>{
                  return(
                      <div className="shotOnAxis" style={{left: `${el.position-(0.25*el.order)}%`, background: `${el.shotColor}`, height: `${el.shotSize}`}}></div>
                  )
              })}
                

                <div
                  className="playHead"
                  style={{ left: `${this.state.onAxisPositon+0.2}%` }}
                >
                  <div className="timeOnAxis">
                    {this.state.progress.toFixed(0)} s
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GraphWrapper>
          </VideoWrapper>

          <div className="timeDisplay">
            <h1>Actual Video Time (AVT)</h1>
            <h2 style={{color: "#ae2012"}}>{this.state.progress.toFixed(0)} s</h2>
            <h1>Video duration</h1>
            <h2>{this.state.duration} s</h2>
            <h1>Actual Shots Count:</h1>
            <h2 style={{color: "#ee9b00"}}>{this.state.shotsArray.length}</h2>

            <button id="countGreen" onClick={(green, big)=>this.handleShot("#0a9396", "120px")}>
              +1
            </button>
            <button id="countWhite" onClick={(white, small)=>this.handleShot("#94d2bd", "80px")}>
              +1
            </button>
            <button id="countOrange" onClick={(blue, medium)=>this.handleShot("#ee9b00", "100px")}>
              +1
            </button>
            

            <div className="info">
              <p>If the action happens too fast remember that you can use the clip's settings to slow it down.</p>
            </div>
          </div>
        </VideoPageWrapper>
        
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
    height: 100vh;
    min-width: 250px;
    
    color: white;
    text-align: center;
    background: black;
    font-weight: 200;

    button  {
      width: 60%;
      height: 80px;
      font-size: 2rem;
      font-weight: 500;
      font-family: 'Oswald', sans-serif;
      opacity: 0.8;
      border: none;
      margin: 0.1rem;
    }

    #countGreen {
      background: #0a9396;
      opacity: 0.6;
    }

    #countWhite {
      background: #94d2bd;
    }

    #countOrange {
      background: #ee9b00;
    }

    h1, h2, h3 {
      font-weight: 200;
    }

    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-weight: 500;
    }

    .info {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    p {
      text-align: right;
    }
  }
`;

export const VideoWrapper = styled.div`
  height: 60vh;
  width: 80vw;
  background: black;
`;

export const GraphWrapper = styled.div`
  height: 20vh;
  width: 80vw;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  .graphBcg {
    height: 85%;
    width: 100%;
    background: black;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    
    z-index: 0;
  }
  .axisX {
    width: 78vw;
    height: 0.01vh;
    background: white;
    z-index: 0;
    position: relative;
    opacity: 1;
  }
  .playHead {
    height: 90px;
    background: #ae2012;
    width: 0.4%;
    position: relative;
    top: -200px;
    opacity: 1;
    transition: 1s linear;
    z-index: 0;
  }
  .timeOnAxis {
    width: 5vw;
    position: relative;
    top: 5vh;
    left: -0.5vw;
  }

  .startTime {
    width: auto;
    position: relative;
    top: -5vh;
    left: -0.3vw;
    z-index: 4;
  }
  .endTime {
    width: auto;
    position: relative;
    top: -7vh;
    left: 77vw;
    z-index: 1;
  }

  .shotOnAxis {
    height: 120px;
    
    width: 0.25%;
    position: relative;
    top: -88px;
    z-index: 3;
    display: inline-block;
    opacity: 0.6;
    transition: 0.2s ;
  }

  .shotOnAxis:hover {
    
  }

  .shotTimeVertical {
    
  }
`;

export default Video;
