import React from "react";
import { styled } from "styled-components";

const Input = ({ type, onChange, placeholder }) => {
  return <InputComponent type={type} placeholder={placeholder} onChange={onChange} />;
};

export default Input;


const InputComponent = styled.input`
    width: 100%;
    height: 8vh;
    border: none;
    border-bottom: 1px solid grey;
    background: transparent;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: #000000;
    }
`