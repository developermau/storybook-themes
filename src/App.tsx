import React from "react";
import styled from "styled-components";
import { AppButton } from "./stories/AppButton";
import { WrapperThemeContext } from "./providers/WrapperThemeProvider/WrapperThemeContext";

const WrapperApp = styled.main`
  align-items: center;
  display: flex;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

function App() {
  const { theme, toggleTheme } = React.useContext(WrapperThemeContext);

  return (
    <WrapperApp>
      <AppButton onClick={toggleTheme}>{theme._name}</AppButton>
    </WrapperApp>
  );
}

export default App;
