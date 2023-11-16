import type { Preview } from "@storybook/react";
import WrapperThemeProvider from "../src/providers/WrapperThemeProvider";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

/* TODO: update import for your custom theme configurations */
import { darkTheme } from "../src/themes/dark.ts";
import { lightTheme } from "../src/themes/light.ts";

/* TODO: replace with your own global styles, or remove */
const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  `;

/*
const withStyledTheme = (Story) => (
  <WrapperThemeProvider>
    <Story />
  </WrapperThemeProvider>
);
*/

const preview: Preview = {
  decorators: [
    //withStyledTheme,
    withThemeFromJSXProvider({
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
      defaultTheme: "light",
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
