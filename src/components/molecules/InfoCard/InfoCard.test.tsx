import { render } from "@testing-library/react";

import { InfoCard } from "./index";
import "@testing-library/jest-dom";

test("render InfoCard component with Total & Reversals", () => {
  const InfoCardElement = render(
    <InfoCard
      title="Info Card"
      value="34123"
      percent={1.3}
      prior={33890}
      total={35217}
      reversals={1094}
    />
  );

  const titleElement = InfoCardElement.getByText("Info Card");

  expect(titleElement).toBeInTheDocument();
});

test("render InfoCard component without Total & Reversals", () => {
  const InfoCardElement = render(
    <InfoCard title="Info Card" value="34123" percent={1.3} prior={33890} />
  );

  const titleElement = InfoCardElement.getByText("Info Card");

  expect(titleElement).toBeInTheDocument();
});
