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
      progress: 0
    };

    onStart = () => {
        console.log("started");
    }

    start = () => {
        
        
    }

    pause = () => {
        console.log("paused");
        this.setState({
            running: false,
            seconds: this.state.seconds,
        })
        
    }
    
    
    timer = () => {
        this.setState({
            seconds: this.state.seconds + 1,
        })
    }

    duration = (e)=>{
        console.log("duration", e);
    }

    progress = (e)=>{
        console.log("progress", e.playedSeconds);
        this.setState({
            progress: parseInt(e.playedSeconds),
        })
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
                onPause={(onPlay)=>this.start(onPlay)}
                
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
            </VideoWrapper>

            <div className="timeDisplay">
                <h1>Actual Video Time (AVT)</h1>
                <h2>{this.state.progress}</h2>
            </div>
            </VideoPageWrapper>
        );
    }
}

export const VideoPageWrapper = styled.div`
display: flex;

.timeDisplay {
    width: 20vw;
    color: white;
    text-align: center;
}
`;

export const VideoWrapper = styled.div`
height: 100vh;
width: 80vw;
background: black;
`;

export default Video;