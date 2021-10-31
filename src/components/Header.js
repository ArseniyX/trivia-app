import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import UserMenu from "./UserMenu";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.6px solid #ecece8;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 15px;
  margin: 20px 30px;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: auto 0;
  max-width: 70%;
  white-space: nowrap;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 13.9337px;
  line-height: 21px;
  color: #e0e0e0;
  padding: 6px 10px;
  &:hover{
    text-decoration: underline;
  }
`;


const Header = () => {
  return (
    <StyledHeader>
      <Logo link={Link} />
      <Navigation>
        <StyledLink to="how-it-works">How it works</StyledLink>
        <StyledLink to="features">Features</StyledLink>
        <StyledLink to="about-us">About us</StyledLink>
        <UserMenu />
      </Navigation>
    </StyledHeader>
  );
};

export default Header;
