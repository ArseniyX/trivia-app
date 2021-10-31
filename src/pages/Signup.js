import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AdditionalForm from "../components/AdditionalForm";
import Logo from "../components/Logo";
import { useAuth } from "../hooks/use-auth";
import { useHistory, useLocation } from "react-router-dom";

const LogoWrapper = styled.div`
  margin: 0 auto;
  width: 210px;
`;

const LoginHeader = styled.header`
  max-width: 500px;
  padding: 50px 60px;
`;

const Title = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14.4313px;
  line-height: 17px;
  text-align: center;
  width: 240px;

  margin: 0 auto;
  color: rgba(0, 0, 0, 0.6);
`;

const AuthForm = styled.form`
  margin-top: 30px;
`;

const StyledInput = styled.input`
  border: 1px solid #c1bbbb;
  width: 380px;
  height: 43px;
  padding-top: 20px;
  padding-left: 17px;
  box-sizing: border-box;
  outline: none;
  &:focus {
    border-left: 3px solid #fcc822;
  }
`;

const SaveButton = styled.button`
  width: 70px;
  height: 35px;
  background: linear-gradient(95.34deg, #fcc822 0%, #ffcd2e 100%);
  box-shadow: 0px 10.5px 23px -7px #fbe18f;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 11.5px;
  line-height: 17px;
  border: none;
  cursor: pointer;

  color: #ffffff;
  border: 0.6px solid #fcc822;
`;

const Signup = () => {
  const [name, setName] = useState("");
  const auth = useAuth();
  const history = useHistory()

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      await auth.updateName(name);
    } catch {}
    history.push("/")
  };
  

  return (
    <>
      <LoginHeader>
        <LogoWrapper>
          <Logo big link={Link} />
        </LogoWrapper>
        <Title>
          Welcome back! <br /> Please login/Signup to your account.
        </Title>
        <AuthForm onSubmit={onSubmitForm}>
          <StyledInput
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <AdditionalForm />
          <SaveButton className="login-button" type="submit" name="login">
            Save
          </SaveButton>
        </AuthForm>
      </LoginHeader>
    </>
  );
};

export default Signup;
