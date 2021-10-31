import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 30px 0;
`;

const PreviousButton = styled.button`
  margin-left: 100px;
  background: linear-gradient(95.34deg, #d1d1d1 0%, #d1d1d1 100%);
  box-shadow: 0px 5.85029px 23.4012px -7.02035px #d1d1d1;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  color: #333333;
`;

const NextButton = styled(PreviousButton)`
  background: linear-gradient(95.34deg, #fcc822 0%, #ffcd2e 100%);
  box-shadow: 0px 5.85029px 23.4012px -7.02035px #fbe18f;
  margin-right: 100px;
`;

const CompleteButton = styled(NextButton)`
  text-decoration: none;
`

const GameControllers = ({ increaseCount, decreaseCount, questionNumber, calculateScore, score }) => {
  return (
    <FooterContainer>
      <PreviousButton onClick={decreaseCount}>Previous</PreviousButton>
      {questionNumber === 5 ? (
        <CompleteButton
          as={Link}
          to={{
            pathname: "/game-complete",
            score: score,
          }}
          onClick={calculateScore}
        >
          Complete
        </CompleteButton>
      ) : (
        <NextButton onClick={increaseCount}>Next</NextButton>
      )}
    </FooterContainer>
  );
};

export default GameControllers;
