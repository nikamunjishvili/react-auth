import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <Ul>
        <Li>
          <Link to="/">Home</Link>
        </Li>
        <Li>
          <Link to="/about">About</Link>
        </Li>
        <Li>
          <Link to="/profile">Profile</Link>
        </Li>
      </Ul>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
    width: 100%;
    height: 10vh;
    background-color: grey;
`

const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    line-height: 10vh;
`
const Li = styled.li`
    list-style-type: none;
    font-size: 27px;
`
