import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App", () => {
  it("renders", () => {
    render(<App />);

    expect(screen.queryByText("Enter your details below")).toBeVisible();
  });
});
