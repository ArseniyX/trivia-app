import React from "react";
import styled from "styled-components";
import academyHat from "../images/academy-hat.png";

const LogoSpan = styled.span`
  color: ${({ yellow }) =>
    yellow ? "rgba(252, 200, 34, 1)" : "rgba(51, 51, 51, 1)"}; ;
`;

const StyledLogo = styled.h1`
  text-decoration: none;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({lineheight }) => lineheight};
  position: relative;
  margin: 0;
`;

const LogoImage = styled.img`
  position: absolute;
  top: 6px;
  left: ${({ left }) => left};
  width: ${({ width }) => width};
  transform: matrix(0.89, -0.35, 0.49, 0.92, 0, 0);
`;

const Logo = ({ big, link }) => {
  let fontSize = "26.5905px";
  let lineheight = "40px";
  let width = "20px";
  let left = "-5px";

  if (big) {
    fontSize = "45.7042px";
    lineheight = "69px";
    width = "40px";
    left = "-10px";
  }

  return (
    <StyledLogo as={link} to="/" fontSize={fontSize} lineheight={lineheight}>
      <LogoImage src={academyHat} alt="academy-hat" width={width} left={left} />
      <LogoSpan>Quiz</LogoSpan>
      <LogoSpan yellow>Grad</LogoSpan>
    </StyledLogo>
  );
};

export default Logo;
