import type { Preview } from "@storybook/react";
import WrapperThemeProvider from "../src/providers/WrapperThemeProvider";

const withStyledTheme = (Story) => (
  <WrapperThemeProvider>
    <Story />
  </WrapperThemeProvider>
);

const preview: Preview = {
  decorators: [withStyledTheme],
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
