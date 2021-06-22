import React, { Component } from 'react';
import ReactPlayer from "react-player/youtube";
import styled from 'styled-components';

class Video extends Component {
    state = {
        running: false,
      hours: 0,
      minutes: 0,
      seconds: 0,
      stratStopBtn: "Start",
      started: true,
      progress: 0,
      duration: "",
      shotsArray: [{time: 0}],
      counter: 0
    };

    onStart = () => {
        console.log("started");
    }

    start = () => {
       console.log("ddd");
       this.setState({
           running: true
       })
        
    }

    pause = () => {
        console.log("ppp");
        this.setState({
            running: false,
            
        })
        
    }
    
    
    timer = () => {
        this.setState({
            seconds: this.state.seconds + 1,
        })
    }

    duration = (e)=>{
        console.log("duration", e);
        this.setState({
            duration: e
        })
    }

    progress = (e)=>{
        console.log("progress", e.playedSeconds);
        this.setState({
            progress: e.playedSeconds,
        })
    }

    handleShot = () => {
        if (!this.state.running) {
            return;
        } else {
        console.log(this.state.running);
        const shot = {
            time: this.state.progress.toFixed(3),
            
        }
        let tempArray = this.state.shotsArray;
        this.setState({
            shotsArray: [...tempArray, shot],
            running: true
        })
        console.log("el.time", shot.time);
        console.log(this.state.shotsArray);
        }
    }

   

    render() {
        return (
            <VideoPageWrapper>
            <VideoWrapper>
                <ReactPlayer 
                controls={true}
                width={"auto"}
                height={"100%"}
                onDuration={(e)=>this.duration(e)}
                onProgress={(e)=>this.progress(e)}
                onPlay={this.start}
                onPause={this.pause}
                
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
            </VideoWrapper>

            <div className="timeDisplay">
                <h1>Actual Video Time (AVT)</h1>
                <h2>0:{this.state.progress.toFixed(0)} s</h2>
                <h1>Video duration</h1>
                <h2>{this.state.duration} s</h2>
                <h1>Actual Shots Count:</h1>
                <h2>{this.state.shotsArray.length}</h2>

                <button id="count" onClick={this.handleShot}>+1</button>
                
                <div>
                    {this.state.shotsArray.map(el=>{
                        return(
                            <div>{el.time}</div>
                        )
                    })}
                </div>
            </div>
            </VideoPageWrapper>
        );
    }
}

export const VideoPageWrapper = styled.div`
display: flex;
p{
    color: white;
}
.timeDisplay {
    width: 20vw;
    min-width: 250px;
    color: white;
    text-align: center;
    background:black;
}
`;

export const VideoWrapper = styled.div`
height: 100vh;
width: 80vw;
background: black;
`;

export default Video;