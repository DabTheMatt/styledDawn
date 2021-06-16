import React, { Component } from 'react';
import styled from 'styled-components';


class Grid extends Component {
    render() {
        return (
            <GridW>
              <Sky>
              <h1></h1>
              </Sky>
              <Sea />
<div class="grid-wrapper">
  <div class="grid">
    <div class="vertical">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <div class="dots">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <div class="horizontal">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </div>
</div>
</GridW>
            
        );
    }
}

export const Sun = styled.div`
background: radial-gradient(yellow 10%, orange 40%, red 70%);
height: 10%;
width: 100px;
border-radius: 50%;
top: calc(50% - 173px);
left: 46%;
position: absolute;
z-index: 0;

.half {
  background: #09111e;
  height: 50%;
  top: 50px;
  position: relative;
 
}
`;

export const Sea = styled.div`
background: linear-gradient(purple, blue, darkblue);
height: 70vh;
width: 100%;
top: 0vh;
left: 0;
position: relative;
z-index: 1;
opacity: 0.4;
`;

export const Sky = styled.div`
background: linear-gradient(black 10%, darkblue 70%, purple);
height: 37.8vh;
width: 100%;
top: 0vh;
left: 0;
position: relative;
z-index: 0;
display: flex;
align-items: center;
justify-content: center;

h1 {
  font-family: 'Do Hyeon', sans-serif;
  margin-top: 7rem;
  color: white;
  font-size: 8rem;
  opacity: 1;
  text-shadow: 0.5rem 0.5rem black;
  opacity: 0.9;
  letter-spacing: 0.7rem;
}


}


`;

export const GridW = styled.div`
.grid-wrapper {
  position:absolute;
  width:100%;
  height:100%;
  left:0;
  bottom:0px;
  perspective:150px;
  z-index: 0;
}

.grid {
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  margin-top:-50px;
  transform: rotateX(45deg);
}

.line {
  position:absolute;
  background: red;
  -webkit-backface-visibility: hidden;
}

.vertical .line {
  top:0;
  left:0;
  bottom:0;
  width:1px;
  background: linear-gradient(orange 40%, red 70%);
  
  &:nth-child(1) {
    left:10%;
    background: linear-gradient(orange 50%, red 80%);
  }
  &:nth-child(2) {
    left:20%;
  }
  &:nth-child(3) {
    left:30%;
  }
  &:nth-child(4) {
    left:40%;
  }
  &:nth-child(5) {
    left:50%;
  }
  &:nth-child(6) {
    left:60%;
  }
  &:nth-child(7) {
    left:70%;
  }
  &:nth-child(8) {
    left:80%;
  }
  &:nth-child(9) {
    left:90%;
  }
  &:nth-child(10) {
    left:100%;
    margin-left:-1px;
  }
}

.horizontal .line {
  top:0;
  left:0;
  right:0;
  height:2px;
  z-index:2;
  
  
  @keyframes moove {
    100% {
      top: 20%;
    }
  }
  @keyframes moove2 {
    100% {
      top: 30%;
    }
  }
  @keyframes moove3{
    100% {
      top: 40%;
    }
  }
  @keyframes moove4 {
    100% {
      top: 50%;
    }
  }
  @keyframes moove5 {
    100% {
      top: 60%;
    }
  }
  @keyframes moove6 {
    100% {
      top: 70%;
    }
  }
  @keyframes moove7 {
    100% {
      top: 80%;
    }
  }
  @keyframes moove8 {
    100% {
      top: 90%;
    }
  }
  @keyframes moove9 {
    100% {
      top: 100%;
    }
  }
  @keyframes moove10 {
    100% {
      top: 110%;
    }
  }

  &:nth-child(1) {
    top:10%;
    opacity:0.2;
    animation: moove 1s linear infinite;
    
  }
  &:nth-child(2) {
    top:20%;
    opacity:0.3;
    animation: moove2 1s linear infinite;
  }
  &:nth-child(3) {
    top:30%;
    opacity:0.4;
    animation: moove3 1s linear infinite;
  }
  &:nth-child(4) {
    top:40%;
    opacity:0.5;
    animation: moove4 1s linear infinite;
  }
  &:nth-child(5) {
    top:50%;
    opacity:0.6;
    animation: moove5 1s linear infinite;
  }
  &:nth-child(6) {
    top:60%;
    opacity:0.7;
    animation: moove6 1s linear infinite;
  }
  &:nth-child(7) {
    top:70%;
    opacity:0.8;
    animation: moove7 1s linear infinite;
  }
  &:nth-child(8) {
    top:80%;
    opacity:0.9;
    animation: moove8 1s linear infinite;
  }
  &:nth-child(9) {
    top:90%;
    opacity:0.95;
    animation: moove9 1s linear infinite;
  }
  &:nth-child(10) {
    top:100%;
    margin-top:-1px;
    opacity:1;
    animation: moove10 1s linear infinite;
  }
  &:nth-child(11) {
    opacity:0.05;
  }
}
`;



export default Grid;