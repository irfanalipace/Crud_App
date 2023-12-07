import { render, screen } from "@testing-library/react";

import { PageLoader } from "../PageLoader";
import "@testing-library/jest-dom";

test("render PageLoader", () => {
  render(<PageLoader />);

  const pageLoaderElement = screen.getByText("Loading ...");

  expect(pageLoaderElement).not.toBeNull();
  expect(pageLoaderElement).toBeInTheDocument();
});
