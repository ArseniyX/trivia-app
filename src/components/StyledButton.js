import styled from "styled-components";

const StyledButton = styled.button`
  width: 120px;
  height: 37px;
  cursor: pointer;
  background: linear-gradient(95.34deg, #fcc822 0%, #ffcd2e 100%);
  box-shadow: 0px 10.4502px 23.2228px -6.96683px #fbe18f;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  border: none;

  /* identical to box height */

  color: #ffffff;
  &:hover {
    background-color: #fff;
    border: 1px solid #FCC822;
  }
`;

export default StyledButton