import React, { Component } from "react";
import styled from "styled-components";
import Grid from "./Grid";

class Main extends Component {
  state = {};

  render() {
    return (
      <MainWrapper>
        
        <Grid />
      </MainWrapper>
    );
  }
}

export const MainWrapper = styled.div`
  margin: 0 auto;
  height: 400px;
  width: 400px;
  background: radial-gradient(#ffba08, #f48c06);
  color: black;
border-radius: 50%;
box-shadow: 0px 0px 175px #dc2f02;
position: relative;
z-index: 0;


.sea {
    content: "";
    height: 50vh;
    width: 100vw;
    background-image: radial-gradient(farthest-corner at 50% 0%,
      #ffba08 0%, #faa307 20%,#023e8a  60%, #03045e 100%);
    position: absolute;
    top: 18vh;
    left: -117%;
    perspective: 100px;
    transform: rotateX(45deg);
}

table {
    transform-style: preserve-3d;
}

tr {
    width: 100vw;
    height: 10vh;
    border: 0.5px solid white;
}

td {
    width: 40vw;
    border: 0.5px solid white;
    margin: 0px;
}
`;

export default Main;
