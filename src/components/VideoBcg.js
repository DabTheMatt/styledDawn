import React, { Component } from 'react';
import styled from "styled-components";

class VideoBcg extends Component {
    state ={
        shots: 0,
        what: ""
    }

    handleShot = () => {
        this.setState({
            shots: this.state.shots + 1
        })
    }

    render() {
        return (
            <VideoWrapper>
                <div className="videoBcg">
                    <div className="videoFwr">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/aDF97Ebilps" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>

              
                <div id="vidtopCnt">
<div class="vidInfo">
	  <h1>F-word counter</h1>
      <h2>F-words: {this.state.shots}</h2>
	  <p>You can use this counter to count.</p>
     <button onClick={this.handleShot}>F-word</button>
	 </div></div>
  
            </VideoWrapper>
        );
    }
}



export const VideoWrapper = styled.div`
display: flex;
.videoBcg {
    background: black;
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    z-index: 0;
    box-shadow: 5px 5px 5px black;
    width: 70vw;
}

.videoFwr {
    position: absolute;
    top: -10vh;
    left:0;
    width: 100%;
    height: 80%;
    
    z-index: 1;
    padding: 2rem;
}

.vidtopCnt {
    top: 0px;
    color: white;
    
}

.vidInfo {
    position:relative;
    top: 0;
    left: 70vw;
    
    background: rgba(0,0,0,0.4);
    color: white;
    padding: 2rem;
    width: 30vw;
    height: 100vh;
    margin-bottom: 5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: column;

    p {
        text-align: right;
    }

    h1 {
        text-decoration: uppercase;
    }
    button {
        padding: 1rem;
         align-self: center;
         background: rgba(255, 0, 0, 0.5);
         border: none;
         font-size: 0.7rem;
         text-transform: uppercase;
         border-radius: 50%;
         height: 5rem;
         width: 5rem;
         color: white;
         font-weight: bold;
         margin-top: 1rem;
        
    }

    button:hover {
        cursor: pointer;
        
    }
}


@media (min-aspect-ratio: 16/9) {
  .videoFwr{ height: 100%; top: 10vh; }
}
@media (max-aspect-ratio: 16/9) {
  .videoFwr { width: 100%; left: -0%; }
}


`;

export default VideoBcg;