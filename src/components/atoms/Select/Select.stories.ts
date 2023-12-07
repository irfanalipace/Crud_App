import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/atoms/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    options: { control: "array" },
    label: { control: "text" },
    placeholder: { control: "text" },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [],
    label: "Name",
    placeholder: "Select option",
  },
};
