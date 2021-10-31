import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const GameBackground = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Container = styled.div`
  position: relative;
  background-color: #fff;
  margin: 15vh auto;
  width: 85vw;
  height: 70vh;
  text-align: center;
  padding: 1px;
  z-index: 2;
`;

const GameContainer = ({ children }) => {
  const history = useHistory();

  const goBack = (e) => {
    history.goBack()
  }

  return (
    <GameBackground onClick={(e) => goBack(e)}>
      <Container onClick={(e) => e.stopPropagation()}>{children}</Container>
    </GameBackground>
  );
};

export default GameContainer;
