import { render, fireEvent, screen } from "@testing-library/react";

import { Table, TableProps } from "../Table";
import "@testing-library/jest-dom";

const columns: TableProps["columns"] = [
  { id: "id", label: "ID", variant: "primary", isSortable: true },
  { id: "name", label: "Name", variant: "secondary", isSortable: false },
];

const data: TableProps["data"] = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Doe" },
];

test("renders Table component with columns and data", () => {
  const { getByText } = render(<Table columns={columns} data={data} />);

  columns.forEach(column => {
    if (!Array.isArray(column.label)) {
      const columnElement = getByText(column.label);
      expect(columnElement).toBeInTheDocument();
    }
  });

  data.forEach(item => {
    Object.values(item).forEach(value => {
      if (!Array.isArray(value)) {
        const valueElement = getByText(value as string);
        expect(valueElement).toBeInTheDocument();
      }
    });
  });
});

test("handles click event and toggles column sorting", async () => {
  const { getByText } = render(<Table columns={columns} data={data} />);

  const sortableColumn = getByText("ID");

  fireEvent.click(sortableColumn);

  const svgElement = sortableColumn.parentElement!.querySelector("svg");

  expect(svgElement).toBeInTheDocument();
  expect(svgElement?.parentElement).toHaveStyle("transform: rotate(0)");
  expect(svgElement?.parentElement).toHaveStyle("opacity: 1");

  fireEvent.click(sortableColumn);

  expect(svgElement).toBeInTheDocument();
  expect(svgElement?.parentElement).toHaveStyle("transform: rotate(180deg)");
  expect(svgElement?.parentElement).toHaveStyle("opacity: 1");

  fireEvent.click(sortableColumn);
  expect(svgElement?.parentElement).toHaveStyle("transform: rotate(180deg)");
  expect(svgElement?.parentElement).toHaveStyle("opacity: 0");
});

test("does not handle click event for non-sortable columns", () => {
  const { getByText } = render(<Table columns={columns} data={data} />);
  const nonSortableColumn = getByText("Name");
  fireEvent.click(nonSortableColumn);

  expect(nonSortableColumn.querySelector("svg")).toBeNull();
});

it("content should be hidden & render skeleton loading when isLoading is true", async () => {
  render(<Table columns={columns} data={data} isLoading={true} />);

  const contentElements = screen.queryAllByText("loading");

  contentElements.forEach(contentElement => {
    const skeletonElement = contentElement!.parentElement;

    expect(contentElement).toHaveStyle("visibility: hidden");
    expect(skeletonElement).toHaveClass("chakra-skeleton");
    expect(skeletonElement).toHaveStyle("visibility: visible");
  });
});
