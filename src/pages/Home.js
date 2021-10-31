import React from "react";
import styled from "styled-components";
import StyledButton from "../components/StyledButton";
import Template from "../template/Template";
import { ReactComponent as Triangle } from "../svg/triangle.svg";
import homeImg from "../images/home-img.png";
import { useHistory } from "react-router";
import { useAuth } from "../hooks/use-auth";

const Main = styled.main`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 37.1564px;
  line-height: 44px;

  color: #333333;
`;

const TagLine = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  border-left: 1.2px solid #333333;
  padding: 5px 10px;
  /* identical to box height */

  color: #828282;
`;

const SelectButton = styled.button`
  display: flex;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13.9337px;
  line-height: 16px;
  background: #fff;
  cursor: pointer;
  margin-left: 40px;
  /* identical to box height */

  color: #fcc822;
  padding: 10px;
  border: none;
`;

const Wrapper = styled.div`
  display: flex;
`;

const HomeImage = styled.img`
  height: 280px;
`;

const Container = styled.div`
  padding: 35px 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = () => {
  const auth = useAuth();
  const history = useHistory();

  const onStartSolving = () => {
    if(auth.user) {
      history.push("/choose-topic");
    }
    
  };

  return (
    <Template>
      <Container>
        <Main>
          <Title>
            Learn <br /> new concepts <br /> for each question
          </Title>
          <TagLine>We help you prepare for exams and quizes</TagLine>
          <Wrapper>
            <StyledButton onClick={onStartSolving}>Start solving</StyledButton>

            <SelectButton>
              <Triangle />
              Known more
            </SelectButton>
          </Wrapper>
        </Main>
        <HomeImage src={homeImg} alt="home-image" />
      </Container>
    </Template>
  );
};

export default Home;
