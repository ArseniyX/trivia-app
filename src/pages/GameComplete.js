import React from "react";
import styled from "styled-components";
import GameContainer from "../components/GameContainer";
import completeImage from "../images/dayflow.png";

const CompleteImage = styled.img`
  max-width: 380px;
  width: 90%;
  margin: auto;
`;

const Score = styled.h2`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: max(170px, 50%);

  /* identical to box height */

  color: #ffffff;
`;

const GameComplete = ({location}) => {
  console.log(location.score)
  return (
    <GameContainer>
      <CompleteImage src={completeImage} alt="complete" />
      <Score>{location.score}</Score>
    </GameContainer>
  );
};

export default GameComplete;
