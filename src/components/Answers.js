import React from "react";
import styled from "styled-components";

const AnswersContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const AnswerLetter = styled.span`
  position: absolute;
  left: 2px;
  top: 2px;
  font-size: 14px;
  font-weight: normal;
  line-height: 140%;
`;

const AnswerButton = styled.button`
  position: relative;
  width: 150px;
  height: 85px;
  background-color: ${({ isAnswerSelected }) =>
    isAnswerSelected ? "#fcc822" : "#d1d1d1"};
  border: none;
  font-weight: 600;
  font-size: 21px;
  line-height: 85%;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #fcc822;
  }
`;

const Answers = ({
  onAnswerClicked,
  selectedAnswer,
  answersTitle,
  questionNumber,
}) => {
  return (
    <AnswersContainer>
      {["A", "B", "C", "D"].map((letter, index) => (
        <AnswerButton
          key={letter + index}
          onClick={() =>
            onAnswerClicked(index, answersTitle[questionNumber - 1][index])
            
          }
          isAnswerSelected={selectedAnswer === index}
        >
          <AnswerLetter>{letter}.</AnswerLetter>
          {answersTitle[0] != null && answersTitle[questionNumber - 1][index]}
        </AnswerButton>
      ))}
    </AnswersContainer>
  );
};

export default Answers;
