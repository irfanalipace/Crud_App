import { render, screen, fireEvent } from "@testing-library/react";

import { Select } from "../Select";
import "@testing-library/jest-dom";

test("render Select component with Label", () => {
  render(<Select options={[]} label="Name" placeholder="Select option" />);

  const labelElement = screen.getByText("Name");
  const role = screen.getByRole("heading");

  expect(role).not.toBeNull();
  expect(labelElement).not.toBeNull();
  expect(labelElement).toBeInTheDocument();
  expect(labelElement).toHaveStyle("font-family: Lato,sans-serif");
});

test("render Select component without Label", () => {
  render(<Select options={[]} placeholder="Select option" />);

  const labelElement = screen.queryByText("Name");
  const role = screen.queryByRole("heading");

  expect(role).toBeNull();
  expect(labelElement).toBeNull();
});

test("select element get focus when label is clicked", () => {
  render(<Select options={[]} label="Name" placeholder="Select option" />);

  const labelElement = screen.getByText("Name");
  const selectElement = labelElement.parentElement?.querySelector("select");
  const role = screen.getByRole("heading");

  expect(role).not.toBeNull();
  expect(labelElement).not.toBeNull();

  fireEvent.click(labelElement);
  expect(selectElement).toHaveFocus();
});
