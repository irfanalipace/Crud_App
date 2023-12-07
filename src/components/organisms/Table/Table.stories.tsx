import type { Meta, StoryObj } from "@storybook/react";

import { Table } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/organisms/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    isLoading: { control: "boolean" },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isLoading: false,
    columns: [
      { label: "Name", id: "name", variant: "primary", isSortable: true },
      { label: "Members", id: "members", variant: "secondary", isSortable: true },
      { label: "PBM", id: "pbm", variant: "secondary", isSortable: true },
      { label: "Report Date", id: "reportDate", variant: "secondary", isSortable: true },
      { label: "Last Date", id: "lastDate", variant: "secondary", isSortable: true },
    ],
    data: [
      {
        name: "FAST BANANA, INC.",
        members: "9,123",
        pbm: "Appro-Rx",
        reportDate: "07/24/2023",
        lastDate: "07/24/2023",
      },
      {
        name: "FAST BANANA, INC.",
        members: "9,123",
        pbm: "Appro-Rx",
        reportDate: "07/24/2023",
        lastDate: "07/24/2023",
      },
      {
        name: "FAST BANANA, INC.",
        members: "9,123",
        pbm: "Appro-Rx",
        reportDate: "07/24/2023",
        lastDate: "07/24/2023",
      },
      {
        name: "FAST BANANA, INC.",
        members: "9,123",
        pbm: "Appro-Rx",
        reportDate: "07/24/2023",
        lastDate: "07/24/2023",
      },
      {
        name: "FAST BANANA, INC.",
        members: "9,123",
        pbm: "Appro-Rx",
        reportDate: "07/24/2023",
        lastDate: "07/24/2023",
      },
    ],
  },
};
