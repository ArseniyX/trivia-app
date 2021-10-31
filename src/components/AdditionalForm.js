import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 350px;
  margin: 20px 0;
`;

const RememberMeLabel = styled.div`
  font-family: Roboto;
  font-size: 10.5px;

  /* identical to box height */
  color: rgba(0, 0, 0, 0.61);
`;

const RememberMeCheckBox = styled.input`
  margin: auto 0;
  margin-right: 5px;
`;

const ForgotPassLink = styled(Link)`
  text-decoration: none;
  font-family: Roboto;
  font-size: 10.5px;
  line-height: 12px;

  color: rgba(0, 0, 0, 0.61);
`;

const LabelWrapper = styled.label`
  margin: auto 0;
  display: flex;
`

const AdditionalForm = () => {
  return (
    <Container>
      <LabelWrapper>
        <RememberMeCheckBox type="checkbox" />
        <RememberMeLabel>Remember Me</RememberMeLabel>
      </LabelWrapper>
      <ForgotPassLink to="auth/forgat-password">Forgot Password?</ForgotPassLink>
    </Container>
  );
};

export default AdditionalForm;
