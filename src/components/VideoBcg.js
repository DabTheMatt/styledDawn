import React, { Component } from 'react';
import styled from "styled-components";

class VideoBcg extends Component {
    state ={
        shots: 0,
        what: "",
        adress: "xSM_nz6gKOI",
        src: "https://www.youtube.com/embed/",
        nameInput: "",
        adressInput: "",
        formVisibility: true,
        shortName: "",
        warning: "",
        warningVis: "hidden"
    }

    handleShot = () => {
        this.setState({
            shots: this.state.shots + 1
        })
    }

    handleShot2 = () => {

        if (this.state.shots === 0 ) {
            return;
        } else {

            this.setState({
                shots: this.state.shots - 1
            })
        }
    }

    handleChange = (e) => {
        let shortName = e.target.value.slice(0, -1);
        this.setState({
            nameInput: e.target.value,
            shortName: shortName
        })

    }

    handleAdressChange = (e) => {
        this.setState({
            adressInput: e.target.value
        })
    }

    handleSend = (e) => {
       
            e.preventDefault();

           
        let adress = this.state.adressInput.split("=");
        this.setState({
            adress: adress[1],
            formVisibility: false
        })
    
    }

    render() {
        return (
            <VideoWrapper>
                <div className="videoBcg">
                    <div className="videoFwr">
                    <iframe width="100%" height="100%" src={this.state.src + this.state.adress} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>

              
                <div id="vidtopCnt">
<div class="vidInfo">
            {(this.state.formVisibility) ? 

    <form onSubmit={(e)=>this.handleSend(e)}
    style={{visibility:`${this.state.formVisibility}`}}>
        <label>
            What do you want to count?
        </label>
        <input
        onChange={this.handleChange}
        name="name"
        value={this.state.nameInput}
        placeholder="gun shots, f-words, kisses"
        />
        <label>
            YouTube adress:
        </label>
        <input
        onChange={this.handleAdressChange}
        name="adress"
        value={this.state.adressInput}
        placeholder="gun shots, f-words, kisses"
        />
        <button id="makeCounter">Make {this.state.nameInput} counter</button>
        <p id="warning" style={{visibility: `${this.state.warningVis}`}}></p>
        <p>
        With this application you can create an event count in YouTube videos. 
        </p>
        <p>
        You can count how many times John Wick fires his gun in the fight scene in the Museum (chapter two) or how many times in a scene from The Wire series the word Fuck is said.
        </p>

    <p>
    Use the counter to analyze your favorite movie scenes. Nothing stands in the way of creating a fart counter, a cry counter, a drink counter, etc.
    </p>
    <p>Have fun!</p>
    </form>
    : <div className="counter">
	  <h1>{this.state.nameInput} counter</h1>
      <h2>number of appearances:</h2> <p id="apperances">{this.state.shots}</p>
	  <p>If the action happens too fast remember that you can use the clip's settings to slow it down.</p>
     <button id="count" onClick={this.handleShot}>+1</button>
     <button id="count2" onClick={this.handleShot2}>-1 (My bad)</button>
     </div>
    }
	 </div></div>
  
            </VideoWrapper>
        );
    }
}



export const VideoWrapper = styled.div`
display: flex;


form {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
}

label {
        font-size: 1.2rem;
    }

    input {
        font-size: 1rem;
        margin-bottom: 1rem;
        margin-top: 0.5rem;
        width: 90%;
    }

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
    padding: 1rem;
    width: 30vw;
    height: 100vh;
    margin-bottom: 5rem;
    display: flex;
    align-items: centeer;
    justify-content: flex-start;
    flex-direction: column;

    

    p {
        text-align: right;
    }

    h1 {
        text-transform: uppercase;
        align-self: flex-end;
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

    #makeCounter {
        padding: 0.5rem;
         align-self: flex-end;
         background: rgba(255, 0, 0, 0.5);
         border: none;
         font-size: 1rem;
         text-transform: uppercase;
         border-radius: 2%;
         height: 3rem;
         width: 80%;
         color: white;
         font-weight: bold;
         margin-top: 1rem;
}

.counter {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
#apperances {
    font-size: 4rem;
    align-self: center;
    text-align: center;
    line-height: 1rem;
    width: 70%;
}
h1 {
        text-align: center;
        align-self: center;
    }
h2 {
        text-align: center;
    }
    p {
        text-align: center;
        align-self: center;
    }
}
#count {
    padding: 0.5rem;
         align-self: center;
         background: rgba(0, 255, 0, 0.5);
         border: none;
         font-size: 3rem;
         text-transform: uppercase;
         border-radius: 50%;
         height: 150px;
         width: 150px;
         color: white;
         font-weight: bold;
         margin-top: 3rem;
}
#count2 {
    
         align-self: center;
         background: rgba(255, 000, 0, 0.5);
         border: none;
         font-size: 0.8rem;
         text-transform: uppercase;
         border-radius: 5%;
         height: 45px;
         width: 150px;
         color: white;
         font-weight: bold;
         margin-top: 2rem;
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