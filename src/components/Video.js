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
    order: "",
    greenShots: 0,
    greenArray: [],
    greenBtn: "",
    whiteShots: 0,
    whiteArray: [],
    whiteBtn: "",
    orangeShots: 0,
    orangeArray: [],
    orangeBtn: "",
    showVideo: false,
    youtubeUrl: "",
    time: "00:00:00"

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
    this.displayTime();
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
    var pad = function(num, size) { return ('000' + num).slice(size * -1); },
    time = parseFloat(e.playedSeconds).toFixed(3),
    hours = Math.floor(time / 60 / 60),
    minutes = Math.floor(time / 60) % 60,
    seconds = Math.floor(time - minutes * 60)
    this.setState({
      progress: e.playedSeconds,
      onAxisPositon: onAxis,
      time: ( pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2))
    });

  };

  

displayTime = () => {
  let time = this.state.progress;
  if (this.state.running === true) {
    if (this.state.seconds === 60) {
      this.setState({
        minutes: this.state.minutes + 1,
        seconds: 0
      })
    }
    if (this.state.minutes === 60) {
      this.setState({
        hours: this.state.hours + 1,
        minutes: 0,
        seconds: 0
      })
    }
  }
}

  handleShot = (color, size) => {
    switch (color) {
      case "#0a9396":
      this.setState({greenShots: this.state.greenShots + 1})
      break;

      case "#94d2bd":
      this.setState({whiteShots: this.state.whiteShots + 1})
      break;

      case "#ee9b00":
      this.setState({orangeShots: this.state.orangeShots + 1})
      break;
    }
    
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
      let greenArray = this.state.shotsArray.filter((shot)=> {
        return (
          shot.shotColor === "#0a9396"
        )
      })
      let whiteArray = this.state.shotsArray.filter((shot)=> {
        return (
          shot.shotColor === "#94d2bd"
        )
      })
      let orangeArray = this.state.shotsArray.filter((shot)=> {
        return (
          shot.shotColor === "#ee9b00"
        )
      })
      console.log("green", greenArray);
      this.setState({
        shotsArray: [...tempArray, shot],
        running: true,
        greenArray: greenArray,
        whiteArray: whiteArray,
        orangeArray: orangeArray
      });
      console.log("el.time", shot.time);
      console.log(this.state.shotsArray);
    }
  };

  handleSend = (e) => {
    e.preventDefault();
    console.log(e.target.urlInput.value);
    this.setState({
      youtubeUrl: e.target.urlInput.value,
      showVideo: true,
      greenBtn: e.target.greenInput.value,
      whiteBtn: e.target.whiteInput.value,
      orangeBtn: e.target.orangeInput.value
    })
  }

  handleHome = () => {
    this.setState({
      showVideo: false,
      progress: 0,
      duration: 0,
      greenBtn: "",
      whiteBtn: "",
      orangeBtn: "",
      shotsArray: [],
      greenArray: [],
      whiteArray: [],
      orangeArray: [],
      greenShots: 0,
      whiteShots: 0,
      orangeShots: 0,
      time: 0
    })
  }

  render() {
    return (
      <OuterWrapper>
        <VideoPageWrapper>
          <VideoWrapper>
            {this.state.showVideo ? 
            
            <ReactPlayer
              controls={true}
              width={"auto"}
              height={"100%"}
              onDuration={(e) => this.duration(e)}
              onProgress={(e) => this.progress(e)}
              onPlay={this.start}
              onPause={this.pause}
              url={this.state.youtubeUrl}
            /> : <div><FormWrapper>
              
                  <form onSubmit={(e)=>this.handleSend(e)}>
                    <h1 className="title">Moovielyzer</h1>
                    <h2 className="subTitle">Event Instance Analyzer</h2>
                    <label id="url">Paste YouTube URL</label>
                    <input className="longInput"
                    name="urlInput"
                    placeholder="Paste URL"
                    />
                    <label id="greenInput">First Counter</label>
                    <input className="shortInput"
                    name="greenInput"
                    placeholder="shots"
                    />
                    <label id="whiteInput">Second Counter</label>
                    <input className="shortInput"
                    name="whiteInput"
                    placeholder="kisses"
                    />
                    <label id="orangeInput">Third Counter</label>
                    <input className="shortInput"
                    name="orangeInput"
                    placeholder="punches"
                    />
                    <button className="send">Send</button>
                    </form>
                  </FormWrapper>
                </div>
          }
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
                    {this.state.time}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GraphWrapper>
          </VideoWrapper>

          <div className="timeDisplay">
            <h1>Actual Video Time</h1>
            <h2 className="showTime"> {this.state.time}</h2>
            
            <h3 className="showTime" >{this.state.progress.toFixed(0)}s</h3>
            <h1>Video duration</h1>
            <h2 className="showTime">{this.state.duration}s</h2><br></br>
            <h3>left</h3>
            <h3 className="showTime">{parseInt(this.state.duration-this.state.progress)}s</h3>
            <h1>Total Events Count:</h1>
            <h2 className="showTime" style={{color: "#ee9b00"}}>{this.state.shotsArray.length}</h2>

            <button id="countGreen" onClick={(green, big)=>this.handleShot("#0a9396", "120px")}>
              <div className="btnTitle">{this.state.greenBtn}</div>
              <div className="btnValue showTime">{this.state.greenShots}</div>
            </button>
            <button id="countWhite" onClick={(white, small)=>this.handleShot("#94d2bd", "80px")}>
            <div className="btnTitle">{this.state.whiteBtn}</div>
              <div className="btnValue showTime">{this.state.whiteShots}</div>
            </button>
            <button id="countOrange" onClick={(blue, medium)=>this.handleShot("#ee9b00", "100px")}>
            <div className="btnTitle">{this.state.orangeBtn}</div>
              <div className="btnValue showTime">{this.state.orangeShots}</div>
            </button>
            

            <div className="info">
              <p>If the action happens too fast remember that you can use the clip's settings to slow it down.</p>

              <button id="home" onClick={this.handleHome}>
              &#60;&#60; Home
            </button>
            </div>
          </div>
        </VideoPageWrapper>
        
      </OuterWrapper>
    );
  }
}

export const FormWrapper = styled.div`
height: 60vh;
color: white;
display:flex;
  flex-direction: column;
form {
  height: 100%;
  font-size: 1.5rem;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
}
label {
  color: #ee9b00;
}
#url {
  color: white;
}

#greenInput {
  color: #0a9396;
}

#whiteInput {
  color: #94d2bd;
}

#orangeInput {
  color: #ee9b00;
}

.send {
  font-family: 'Oswald', sans-serif;
  font-weight: 200;
  font-size: 1.5rem;
  width: 20%;
  margin-top: 2rem;
  background: #bb3e03;
  color: white;
  border: none;
  cursor: pointer;
  transition: 0.1s linear;
}

.send:hover {
  background: #ae2012;
  
}

.shortInput {
  width: 30%;
}
.longInput {
  margin-bottom: 2rem;
}
input {
  width: 60%;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
  border: 1px solid #0a9396;
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  margin-bottom: 1rem;
}

.title {
  font-weight: 400;
  letter-spacing: 0.4rem;
}

.subTitle {
  font-size: 1.5rem;
  font-weight: 200;
  margin-top: -2rem;
  margin-bottom: 2rem;
}

input::placeholder {
  font-family: 'Oswald', sans-serif;
  font-weight: 200;
  text-align: center;
  opacity: 0.8;
}



`;

export const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VideoPageWrapper = styled.div`
  display: flex;
  p {
    color: white;
  }
  .showTime {
    font-family: 'Space Mono', monospace;
    
  }

  .timeDisplay {
    width: auto;
    height: 100vh;
    
    color: white;
    text-align: center;
    background: black;
    font-weight: 200;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    

    button  {
      width: 60%;
      height: 70px;
      font-size: 2rem;
      font-weight: 500;
      font-family: 'Oswald', sans-serif;
      opacity: 0.8;
      border: none;
      margin: 0.1rem;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    #countGreen {
      background: #0a9396;
      opacity: 0.6;
      
    }

    .btnTitle {
      font-size: 1rem;
    }

    #countWhite {
      background: #94d2bd;
    }

    #countOrange {
      background: #ee9b00;
    }

    #home {
      font-size: 1rem;
      height: 2rem;
      width: 100%;
      transition: 0.1s;
    }

    #home:hover {
      background: #94d2bd;
    }


    h1, h2, h3 {
      font-weight: 200;
    }

    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-weight: 500;
      line-height: 1rem;
      margin-top: -0.3rem;
    }

    h3 {
      margin-top: -1rem;
    }

    .info {
      width: 60%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-direction: column;

       

    }

    p {
      
      text-align: right;
    }
@media (max-width: 1000px) {
  h1 {
    font-size: 1rem;
  }
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
    opacity: 0.8;
    transition: 0.2s ;
  }

  .shotOnAxis:hover {
    
  }

  .shotTimeVertical {
    
  }
`;

export default Video;
