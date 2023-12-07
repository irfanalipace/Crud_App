import type { Meta, StoryObj } from "@storybook/react";

import { InfoCard } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/molecules/InfoCard",
  component: InfoCard,
  tags: ["autodocs"],

  argTypes: {
    title: { control: "text" },
    value: { control: "text" },
    percent: { control: "number" },
    prior: { control: "number" },
    total: { control: "number" },
    reversals: { control: "number" },
  },
} satisfies Meta<typeof InfoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Info Card",
    value: "34123",
    percent: 1.3,
    prior: 33890,
    total: 35217,
    reversals: 1094,
  },
};
