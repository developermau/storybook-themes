import React from "react";
import ThemeType from "../themes/themeTypes.ts";
import { lightTheme } from "../../themes/light.ts";

export type WrapperThemeContextData = {
  theme: ThemeType;
  toggleTheme: () => void;
};

export const initialWrapperThemeContext: WrapperThemeContextData = {
  theme: lightTheme,
  setTheme: () => {},
};

export const WrapperThemeContext = React.createContext(
  initialWrapperThemeContext
);
