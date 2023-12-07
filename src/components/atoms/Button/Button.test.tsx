import { render, screen, fireEvent } from "@testing-library/react";

import { Button } from "../Button";
import "@testing-library/jest-dom";

test("render Button with Label", () => {
  render(<Button>Text</Button>);

  const buttonElement = screen.getByText("Text");
  const role = screen.getByRole("button");

  expect(role).not.toBeNull();
  expect(buttonElement).not.toBeNull();
  expect(buttonElement).toBeInTheDocument();
});

test("calls onClick prop when button is clicked", () => {
  const handler = jest.fn(() => {});

  render(<Button onClick={handler}>Text</Button>);

  const button = screen.getByText("Text");
  fireEvent.click(button);

  expect(handler).toHaveBeenCalled();
  expect(handler).toHaveBeenCalledTimes(1);
});

it("content should be hidden & render spinner loading when isLoading is true", async () => {
  const buttonElement = render(<Button isLoading>Text</Button>);

  const buttonText = buttonElement.queryByText("Text");
  const spinnerElement = buttonElement.container.querySelector(".chakra-spinner");

  expect(buttonText).not.toBeInTheDocument();
  expect(spinnerElement).toHaveClass("chakra-spinner");
  expect(spinnerElement).toHaveStyle("visibility: visible");
  expect(spinnerElement).toHaveTextContent("Loading...");
});
