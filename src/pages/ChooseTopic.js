import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import GameContainer from "../components/GameContainer";
import { useHistory } from "react-router";

const Title = styled.h2`
  font-weight: 500;
  font-size: 37px;
  line-height: 44px;

  color: #333333;
  margin-top: 32px;
`;

const GameInstructions = styled.p`
  font-size: 15px;
  line-height: 18px;

  color: #333333;
`;

const Topics = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  max-height: 150px;
  margin: 10px;
  justify-content: center;
`;

const Topic = styled.label`
  display: flex;
  width: 110px;
  height: 30px;
  margin: 15px;
  cursor: pointer;
  background: ${({ isChecked }) => (isChecked ? "#fcc822" : "#d1d1d1")};
  &:hover {
    background-color: #fcc822;
  }
`;

const TagBadge = styled.div`
  position: relative;
  margin: auto;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 105%;
`;

const CancelButton = styled.button`
  top: 0px;
  right: -26px;
  width: 26px;
  height: 30px;
  background: ${({ isChecked }) => (isChecked ? "#333" : "#fff")};
  color: white;
  border: none;
  cursor: pointer;
`;

const Checkbox = styled.input`
  display: none;
  &:checked {
    ${CancelButton} {
      display: none;
    }
  }
`;

const StartButton = styled.button`
  text-decoration: none;
  position: absolute;
  right: 10px;
  bottom: 10px;
  border: none;
  padding: 8px 25px;
  background: linear-gradient(95.34deg, #fcc822 0%, #ffcd2e 100%);
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

  /* identical to box height */

  color: #ffffff;

  &:hover {
    box-shadow: 0px 10.4502px 23.2228px -6.96683px #fbe18f;
  }
`;

const ChooseTopic = () => {
  const { handleSubmit, register, watch } = useForm();
  const history = useHistory();
  const [apiUrl, setApiUrl] = useState(
    "https://api.trivia.willfry.co.uk/questions?limit=5"
  );

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    history.push({
      pathname: "/game",
      data: {
        url: apiUrl,
      },
    });
  }, [apiUrl]); // eslint-disable-line react-hooks/exhaustive-deps

  const onSubmit = (result) => {
    const link = generateLink(result);
    setApiUrl(link);
    localStorage.setItem("url", link);
  };

  const onStartClicked = () => {};

  const generateLink = (categories) => {
    let string = "";
    for (const key in categories) {
      if (categories[key]) string += key + ",";
    }
    return `https://api.trivia.willfry.co.uk/questions?categories=${string}&limit=5`;
  };

  const topics = [
    "food_and_drink",
    "history",
    "society_and_culture",
    "sport_and_leisure",
    "science",
    "music",
    "movies",
    "literature",
    "general_knowledge",
    "geography",
  ];

  return (
    <GameContainer>
      <Title>Choose your favorite topic</Title>
      <GameInstructions>
        Select more than 3 topics to start quiz
      </GameInstructions>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Topics>
          {topics.map((topicName) => (
            <Topic key={topicName} isChecked={watch(topicName)}>
              <TagBadge>
                {topicName
                  .split("_")
                  .map((word) => {
                    return word[0].toUpperCase() + word.substring(1);
                  })
                  .join(" ")}
                <Checkbox
                  type="checkbox"
                  id={topicName}
                  {...register(topicName)}
                />
              </TagBadge>
              <CancelButton
                type="button"
                onClick={() => document.getElementById(topicName).click()}
                isChecked={watch(topicName)}
              >
                ✕
              </CancelButton>
            </Topic>
          ))}
        </Topics>
        <StartButton onClick={onStartClicked} type="submit">
          Start Quiz
        </StartButton>
      </form>
    </GameContainer>
  );
};

export default ChooseTopic;
