import { screen, render } from "@testing-library/react";
import Limitations from "../../src/components/Limitations/Limitations";

describe("Limitations", () => {
  it("renders", () => {
    render(<Limitations />);

    const title = screen.getByText("Limitations of BMI");
    const desc = screen.getByText(
      /Although BMI is often a practical indicator of healthy weight, it is not suited for every person./i
    );

    expect(title).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
  });

  it("renders all subtitles", () => {
    render(<Limitations />);

    const gridItems = screen.getAllByRole("listitem");

    expect(gridItems).toHaveLength(5);
  });

  it("renders all images", () => {
    render(<Limitations />);

    const images = screen.getAllByRole("presentation");

    expect(images).toHaveLength(5);
  });
});
