import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/atoms/Button",
  component: Button,
  tags: ["autodocs"],

  argTypes: {
    variant: { control: "radio", options: ["primary", "secondary"] },
    isLoading: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isLoading: false,
    children: "Button",
    width: 120,
  },
};

export const Primary: Story = {
  args: {
    isLoading: false,
    children: "Button",
    variant: "primary",
    width: 120,
  },
};

export const Secondary: Story = {
  args: {
    isLoading: false,
    children: "Button",
    variant: "secondary",
    width: 120,
  },
};
