import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/atoms/Switch",
  component: Switch,
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { value: 1, label: "Option 1" },
      { value: 2, label: "Option 2" },
    ],
  },
};
