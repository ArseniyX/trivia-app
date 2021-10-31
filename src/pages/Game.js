import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Answers from "../components/Answers";
import GameControllers from "../components/GameControllers";
import Stepper from "../components/Stepper";
import Template from "../template/Template";

const TitleContainer = styled.div`
  background-color: #fcc822;
  width: 100%;
  text-align: center;
  margin: 30px 0;
  padding: 30px;
`;

const Title = styled.h2`
  margin: auto 20px;
  color: #fff;
  padding: 0;
  font-size: 28px;
  line-height: 140%;
`;

const Game = ({ location }) => {
  let url = "";
  const [questionNumber, setQuestionNumber] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [selectedAnswers, setSelectedAnswers] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [questionTitle, setQuestionTitle] = useState("");
  const [score, setScore] = useState(0);

  const [questions, setQuestions] = useState(
    JSON.parse(localStorage.getItem("data"))
  );

  const [answersTitle, setAnswersTitle] = useState("");

  const increaseCount = () => {
    setQuestionNumber((curr) => (curr !== 5 ? curr + 1 : curr));
    setSelectedAnswer(-1);
  };

  const decreaseCount = () => {
    setQuestionNumber((curr) => (curr !== 1 ? curr - 1 : curr));
    setSelectedAnswer(-1);
  };

  const onAnswerClicked = (index, answer) => {
    setSelectedAnswer(index);
    const isCorrectAnswer = answer === correctAnswer[questionNumber - 1];
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionNumber - 1]: isCorrectAnswer,
    }));
  };

  const calculateScore = () => {
    let count = 0
    
    console.log(count)
    setScore(count)
  };

  try {
    url = location.data.url;
  } catch {
    url = localStorage.getItem("url");
  }

  useEffect(() => {
    const currArr = [];
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setQuestionTitle(data.map((question) => question.question));
        setAnswersTitle(
          data.map((answers) => {
            const allAnswers = answers.incorrectAnswers.slice(0, 3);
            allAnswers.push(answers.correctAnswer);
            currArr.push(answers.correctAnswer);
            return allAnswers.sort(() => Math.random() - 0.5);
          })
        );
      });
    setCorrectAnswer(currArr);
    setQuestionTitle(questions.map((question) => question.question));
    const scoreArr = Object.values(selectedAnswers);
    scoreArr.forEach((i) => {
      if (i) setScore(score + 1)
    });
  }, []);

  return (
    <Template>
      <Stepper
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
      />
      <TitleContainer>
        <Title onClick={() => console.log(answersTitle, selectedAnswers)}>
          {questionTitle[questionNumber - 1]}
        </Title>
      </TitleContainer>
      <Answers
        onAnswerClicked={onAnswerClicked}
        selectedAnswer={selectedAnswer}
        answersTitle={answersTitle}
        questionNumber={questionNumber}
      />
      <GameControllers
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
        questionNumber={questionNumber}
        score={score}
        calculateScore={calculateScore}
      />
    </Template>
  );
};

export default Game;
