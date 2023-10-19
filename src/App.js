import { useState } from "react";
import { ThemeProvider, styled } from "styled-components";
import { darkMode, lightMode } from "./themes";
import { Container } from "./themes/styled";
import TodoApp from "./components/_organisms/TodoApp";
import Image from "./components/_atoms/Image";
import BgImage from './assets/spiderman.jpg'

function App() {
  const [themes, setThemes] = useState("light");

  const handleChangeTheme = () => {
    setThemes((prevItem) => (prevItem === "light" ? "dark" : "light"));
  };

  return (
    <MainContainer BgImage={BgImage}>
      {/* <ThemeProvider theme={themes === "light" ? lightMode : darkMode}> */}
        <Container>
          <button onClick={handleChangeTheme}>light/dark</button>
          <h1>Hello World!!</h1>
          <p>This is Home Page!!</p>
          <div
            style={{
              width: "100%",
              height: "70vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TodoApp />
            {/* <Image
              width={250}
              height={250}
              url="https://wallpapers.com/images/featured/spiderman-p4ashmgeamn2mvkn.jpg"
              alt="dogImage"
            /> */}
          </div>
          {/* <img src={require("./assets/spiderman.jpg")} alt="sdsd" /> */}
        </Container>
      {/* </ThemeProvider> */}
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
background-image: url(${({BgImage}) => (BgImage)});
background-size: 100%;
background-repeat: no-repeat;
`;
