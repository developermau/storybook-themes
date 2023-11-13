import type { Preview } from "@storybook/react";
import WrapperThemeProvider from "../src/providers/WrapperThemeProvider";

const preview: Preview = {
  decorators: [],
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
