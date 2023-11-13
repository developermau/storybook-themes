import React from "react";
import { lightTheme } from "../../themes/light.ts";
import { darkTheme } from "../../themes/dark.ts";
import { ThemeProvider } from "styled-components";
import {
  WrapperThemeContext,
  WrapperThemeContextData,
} from "./WrapperThemeContext";
import { ThemeType } from "../../themes/themeTypes.js";

type WrapperThemeProviderProps = {
  children: React.ReactNode;
};

export default function WrapperThemeProvider({
  children,
}: WrapperThemeProviderProps) {
  const [theme, setTheme] = React.useState<ThemeType>(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme._name === "light" ? darkTheme : lightTheme
    );
  };

  const value: WrapperThemeContextData = {
    theme,
    toggleTheme,
  };

  return (
    <WrapperThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </WrapperThemeContext.Provider>
  );
}
