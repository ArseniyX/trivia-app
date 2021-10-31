import React from "react";
import styled from "styled-components";

const StepperContainer = styled.div`
  display: flex;
  width: 600px;
  margin: auto;
  margin-top: 25px;
`;

const StepperNumber = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: ${({ isSelected }) => (isSelected ? "#333" : "rgba(51, 51, 51, 0.5)")};

  background: ${({ isSelected }) => (isSelected ? "#fff" : "#d1d1d1")};
  border-radius: 50%;
  border: 5px solid ${({ isSelected }) => (isSelected ? "#fcc822" : "#d1d1d1")};
  &:hover {
    transform: scale(1.1);
  }
`;

const StepLine = styled.hr`
  margin: auto -3px;
  width: 50px;
  height: 5px;
  background: ${({ isSelected }) => (isSelected ? "#fcc822" : "#d1d1d1")};
  border: none;
  z-index: -1;
`;

const Stepper = ({ questionNumber, setQuestionNumber }) => {
  return (
    <div>
      <StepperContainer>
        {[1, 2, 3, 4, 5].map((num) => (
          <>
            <StepperNumber
              isSelected={num <= questionNumber}
              key={num}
              onClick={() => setQuestionNumber(num)}
            >
              {num}
            </StepperNumber>
            {num !== 5 && (
              <>
                <StepLine isSelected={num <= questionNumber} />
                <StepLine
                  isSelected={
                    !num === questionNumber || num <= questionNumber - 1
                  }
                />
              </>
            )}
          </>
        ))}
      </StepperContainer>
    </div>
  );
};

export default Stepper;
