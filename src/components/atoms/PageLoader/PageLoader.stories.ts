import type { Meta, StoryObj } from "@storybook/react";

import { PageLoader } from "../PageLoader";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/atoms/PageLoader",
  component: PageLoader,
  tags: ["autodocs"],
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Custom PageLoader Component",
  },
};
