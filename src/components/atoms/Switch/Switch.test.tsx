import { render, fireEvent } from "@testing-library/react";

import { Switch } from "../Switch";
import "@testing-library/jest-dom";

const options = [
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "Option 3", value: 3 },
];

test("render Switch component with options", () => {
  const switchElement = render(<Switch options={options} />);

  options.forEach(option => {
    const optionElement = switchElement.getByText(option.label);
    expect(optionElement).toBeInTheDocument();
  });
});

test("render Switch component with default selected option", () => {
  const switchElement = render(<Switch options={options} />);

  const optionElement = switchElement.getByText(options[0].label);
  expect(optionElement).toHaveStyle("color: white");
  expect(optionElement.parentElement).toHaveStyle("background-color: yellow.main");
});

test("change focus on click each option", () => {
  const switchElement = render(<Switch options={options} />);

  options.forEach(option => {
    const optionElement = switchElement.getByText(option.label);
    fireEvent.click(optionElement);

    expect(optionElement).toHaveStyle("color: white");
    expect(optionElement.parentElement).toHaveStyle("background-color: yellow.main");
  });
});

test("change focus on click each option", () => {
  const switchElement = render(<Switch options={options} />);

  options.forEach(option => {
    const optionElement = switchElement.getByText(option.label);
    fireEvent.click(optionElement);

    expect(optionElement).toHaveStyle("color: white");
    expect(optionElement.parentElement).toHaveStyle("background-color: yellow.main");
  });
});

test("not selected values should not be focused", () => {
  const switchElement = render(<Switch options={options} />);
  const notSelectedOption = options.slice(1);

  notSelectedOption.forEach(option => {
    const optionElement = switchElement.getByText(option.label);

    expect(optionElement).toHaveStyle("color: gray.main");
    expect(optionElement.parentElement).toHaveStyle("background-color: transparent");
  });
});
