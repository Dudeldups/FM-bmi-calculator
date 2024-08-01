import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "../../src/components/Calculator/Calculator";

describe("Calculator", () => {
  it("renders", () => {
    render(<Calculator />);

    expect(screen.queryByText("Enter your details below")).toBeVisible();
  });

  it("renders input field for height correctly", () => {
    render(<Calculator />);

    const inputElement = screen.getByRole("spinbutton", {
      name: /centimeter/i,
    });
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "number");
    expect(inputElement).toHaveAttribute("name", "height-cm");
    expect(inputElement).toHaveAttribute("id", "height-cm");
    expect(inputElement).toHaveAttribute("placeholder", "0");
    expect(inputElement).toHaveClass("number-input__input");
    expect(screen.getByText(/cm/i)).toBeInTheDocument();
  });

  it("renders input field for weight correctly", () => {
    render(<Calculator />);

    const inputElement = screen.getByRole("spinbutton", {
      name: /kilogram/i,
    });
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "number");
    expect(inputElement).toHaveAttribute("name", "weight-kg");
    expect(inputElement).toHaveAttribute("id", "weight-kg");
    expect(inputElement).toHaveAttribute("placeholder", "0");
    expect(inputElement).toHaveClass("number-input__input");
    expect(screen.getByText(/kg/i)).toBeInTheDocument();
  });

  it("calculates metric BMI correctly", () => {
    render(<Calculator />);

    const heightInput = screen.getByRole("spinbutton", {
      name: /centimeter/i,
    });
    const weightInput = screen.getByRole("spinbutton", {
      name: /kilogram/i,
    });

    fireEvent.change(heightInput, { target: { value: 180 } });
    fireEvent.change(weightInput, { target: { value: 70 } });

    expect(screen.getByText("Your BMI is...")).toBeInTheDocument();
    expect(screen.getByText("21.6")).toBeInTheDocument();
    expect(screen.getByText("59.9 kg - 81 kg")).toBeInTheDocument();
  });

  it("changes to imperial units when the user clicks the imperial radio button", () => {
    render(<Calculator />);

    const imperialRadioInput = screen.getByLabelText("Imperial");
    fireEvent.click(imperialRadioInput);

    expect(imperialRadioInput).toBeChecked();
  });

  it("renders input field for height in imperial units correctly", () => {
    render(<Calculator />);

    const imperialRadioInput = screen.getByLabelText("Imperial");
    fireEvent.click(imperialRadioInput);

    const inputElement = screen.getByRole("spinbutton", {
      name: /feet/i,
    });
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "number");
    expect(inputElement).toHaveAttribute("name", "height-ft");
    expect(inputElement).toHaveAttribute("id", "height-ft");
    expect(inputElement).toHaveAttribute("placeholder", "0");
    expect(inputElement).toHaveClass("number-input__input");
    expect(screen.getByText(/ft/i)).toBeInTheDocument();
  });

  it("calculates imperial BMI correctly", () => {
    render(<Calculator />);

    const imperialRadioInput = screen.getByLabelText("Imperial");
    fireEvent.click(imperialRadioInput);

    const feetInput = screen.getByRole("spinbutton", {
      name: /feet/i,
    });
    const inchesInput = screen.getByRole("spinbutton", {
      name: /inches/i,
    });
    const stoneInput = screen.getByRole("spinbutton", {
      name: /stone/i,
    });
    const poundsInput = screen.getByRole("spinbutton", {
      name: /pounds/i,
    });

    fireEvent.change(feetInput, { target: { value: 5 } });
    fireEvent.change(inchesInput, { target: { value: 10 } });
    fireEvent.change(stoneInput, { target: { value: 5 } });
    fireEvent.change(poundsInput, { target: { value: 12 } });

    expect(screen.getByText("Your BMI is...")).toBeInTheDocument();
    expect(screen.getByText("25.9")).toBeInTheDocument();
    expect(screen.getByText("9 st 3 lbs - 12 st 6 lbs")).toBeInTheDocument();
  });
});
