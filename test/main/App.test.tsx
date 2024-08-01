import { render, screen } from "@testing-library/react";
import App from "../../src/App";

describe("App", () => {
  it("renders", () => {
    render(<App />);

    expect(screen.queryByText("Body Mass Index Calculator")).toBeVisible();
  });
});
