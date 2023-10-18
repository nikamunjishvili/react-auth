import React from "react";
import { styled } from "styled-components";

const Button = ({ value, onClick }) => {
  return <ButtonComponent onClick={onClick}>{value}</ButtonComponent>;
};

export default Button;


const ButtonComponent = styled.button`
  background-color:blue;
  width: 80%;
  height: 6vh;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  &:hover{
    transform: scale(1.1);
    transition: 1s;
  }
  transition: 1s;
`