import { styled } from "styled-components";
import Button from "../components/_atoms/Button";
import Input from "../components/_atoms/Input";
import { useState } from "react";
import Home from "./Home";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogedin, setIsLogedin] = useState(false);

  const handleClick = () => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    setIsLogedin(true);
  };

  return (
    <>
      {!isLogedin ? (
        <Wrapper>
          <LoginContainer>
            <Input
              typ="email"
              placeholder="Enter your email..."
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Enter your password..."
              onChange={(e) => setPassword(e.target.value)}
            />
            <ButtonContainer>
              <Button value="Signup" onClick={handleClick} />
            </ButtonContainer>
          </LoginContainer>
        </Wrapper>
      ) : (
        <Home logout={setIsLogedin} />
      )}
    </>
  );
};

export default Signup;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginContainer = styled.div`
  width: 300px;
  background-color: #ccc;
  padding: 30px;
  border-radius: 10px;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;
