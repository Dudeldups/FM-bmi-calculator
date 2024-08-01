import { render, screen } from "@testing-library/react";
import Suggestions from "../../src/components/Suggestions/Suggestions";

describe("Suggestions", () => {
  it("renders", () => {
    render(<Suggestions />);

    expect(screen.queryByText("What you can do:")).toBeVisible();
  });

  it("renders the first suggestion correctly", () => {
    render(<Suggestions />);

    const suggestionTitle = screen.getByText("Healthy eating");
    const suggestionDesc = screen.getByText(
      /Healthy eating promotes weight control/i
    );

    expect(suggestionTitle).toBeInTheDocument();
    expect(suggestionDesc).toBeInTheDocument();
  });

  it("renders the second suggestion correctly", () => {
    render(<Suggestions />);

    const suggestionTitle = screen.getByText("Regular exercise");
    const suggestionDesc = screen.getByText(
      /Exercise improves fitness, aids weight control/i
    );

    expect(suggestionTitle).toBeInTheDocument();
    expect(suggestionDesc).toBeInTheDocument();
  });

  it("renders the third suggestion correctly", () => {
    render(<Suggestions />);

    const suggestionTitle = screen.getByText("Adequate sleep");
    const suggestionDesc = screen.getByText(
      /Sleep enhances mental clarity, emotional stability/i
    );

    expect(suggestionTitle).toBeInTheDocument();
    expect(suggestionDesc).toBeInTheDocument();
  });
});
