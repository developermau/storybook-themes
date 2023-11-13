import React from "react";
import ThemeType from "../themes/themeTypes.ts";

export type WrapperThemeContextData = {
  theme: ThemeType;
  toggleTheme: () => void;
};

export const initialWrapperThemeContext: WrapperThemeContextData = {
  theme: "light",
  setTheme: () => {},
};

export const WrapperThemeContext = React.createContext(
  initialWrapperThemeContext,
);
