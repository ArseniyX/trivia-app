import React, { useRef } from "react";
import styled from "styled-components";
import { useAuth } from "../hooks/use-auth";
import profileImage from "../images/profile-icon.png";
import offButton from "../images/on-off-button.png";
import { ReactComponent as Triangle } from "../svg/triangle.svg";
import { Link } from "react-router-dom";

const DroppableMenu = styled.div`
  max-width: 130px;
  margin: auto 0px;
  cursor: pointer;
`;

const FirstElement = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MenuList = styled.ul`
  position: absolute;
  list-style-type: none;
  padding: 0 5px;
  width: 120px;
`;

const StyledLi = styled.li`
  text-decoration: none;
  margin: 5px;
  padding: 5px;
  color: #fcc822;
  background-color: #fff;
  border: 1px solid #fcc822;
  &:hover {
    text-decoration: underline;
  }
`;

const ProfileImage = styled.img`
  width: 14.5px;
  height: 19px;
`;

const UserName = styled.p`
  font-size: 14px;
  line-height: 21px;
  margin: 0 5px;
  /* identical to box height */

  color: #fcc822;
`;

const LoginButton = styled(Link)`
  text-decoration: none;
  font-size: 13.9337px;
  line-height: 21px;
  color: #e0e0e0;
  padding: 6px 10px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  color: #fcc822;
  border: 0.870854px solid #fcc822;

  &:hover {
    background-color: #fcc822;
    color: white;
    box-shadow: 0px 10.4502px 23.2228px -6.96683px #fbe18f;
    transition: background 0.5s ease-in-out;
  }
`;

const User = () => {
  const { signout, user } = useAuth();

  const hiddenRef = useRef();

  const onExit = () => {
    try {
      showMenu();
      signout();
    } catch (error) {}
  };

  const showMenu = () => {
    hiddenRef.current.hidden = !hiddenRef.current.hidden;
  };

  return user ? (
    <DroppableMenu>
      <FirstElement onClick={showMenu}>
        <ProfileImage src={profileImage} alt="profile" />
        <UserName>{user.displayName ? user.displayName : user.email}</UserName>
        <Triangle />
      </FirstElement>
      <MenuList ref={hiddenRef} hidden>
        <StyledLi as={Link} to={"/profile"}>Profile</StyledLi>
        <StyledLi onClick={onExit}>
          <img src={offButton} alt="exit-button" /> Exit
        </StyledLi>
      </MenuList>
    </DroppableMenu>
  ) : (
    <LoginButton to="auth">Login</LoginButton>
  );
};

export default User;
