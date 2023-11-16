import type { Meta, StoryObj } from "@storybook/react";

import { AppButton } from ".";

const meta = {
  title: "Buttons/AppButton",
  component: AppButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: { onClick: { action: "clicked" } },
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default button",
    onClick: () => {
      console.log("Default...");
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled button",
  },
};
