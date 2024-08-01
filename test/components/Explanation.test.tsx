import { render, screen } from "@testing-library/react";
import Explanation from "../../src/components/Explanation/Explanation";

describe("Explanation", () => {
  it("renders", () => {
    render(<Explanation />);

    expect(screen.queryByText("What your BMI result means")).toBeVisible();
  });

  it("renders description correctly", () => {
    render(<Explanation />);

    const explanationElement = screen.getByText(
      /A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'/i
    );
    expect(explanationElement).toBeInTheDocument();
  });
});
