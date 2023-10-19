import { styled } from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  width: 100%;
  height: 100vh;
  transition: 0.6s;
`;
