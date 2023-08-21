import { useState, useEffect } from "react";
import Result from "../Result/Result";
import NumberInput from "../NumberInput/NumberInput";
import "./Calculator.less";

export default function Calculator() {
  const [unit, setUnit] = useState("metric");
  const [inputData, setInputData] = useState({
    "height-cm": "",
    "height-ft": "",
    "height-in": "",
    "weight-kg": "",
    "weight-st": "",
    "weight-lbs": "",
  });

  const convertInputs = (type: string, value: string) => {
    const stringInput = value.replace(",", ".");
    switch (type) {
      case "height-cm":
        const centimeter = parseFloat(stringInput);
        const totalInches = centimeter / 2.54;
        const feet = Math.floor(totalInches / 12);
        const inches = Math.floor(totalInches - feet * 12);
        setInputData(prev => {
          return {
            ...prev,
            [type]: value,
            "height-ft": feet >= 0 ? feet.toString() : "",
            "height-in": inches >= 0 ? inches.toString() : "",
          };
        });
        break;
      case "weight-kg":
        const kilogram = parseFloat(stringInput);
        const totalPounds = kilogram * 2.20462;
        const stone = Math.floor(totalPounds / 14);
        const pounds = Math.floor(totalPounds - stone * 14);
        setInputData(prev => {
          return {
            ...prev,
            [type]: value,
            "weight-st": stone >= 0 ? stone.toString() : "",
            "weight-lbs": pounds >= 0 ? pounds.toString() : "",
          };
        });
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    console.log(inputData);
  }, [inputData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type, id, value } = e.target;
    if (type === "radio") {
      id === "metric" ? setUnit("metric") : setUnit("imperial");
    } else if (type === "number") {
      convertInputs(id, value);
    }
  };

  return (
    <section className={`calculator ${unit === "metric" && "metric"}`}>
      <h2 className="calculator__title">Enter your details below</h2>

      <div className="radio">
        <label htmlFor="metric" className="radio__label">
          <input
            type="radio"
            name="unit"
            id="metric"
            onChange={handleChange}
            checked={unit === "metric"}
            className="radio__input sr-only"
          />
          <span className="radio__circle"></span>
          Metric
        </label>

        <label htmlFor="imperial" className="radio__label">
          <input
            type="radio"
            name="unit"
            id="imperial"
            onChange={handleChange}
            checked={unit === "imperial"}
            className="radio__input sr-only"
          />
          <span className="radio__circle"></span>
          Imperial
        </label>
      </div>

      <div className="number-container">
        <fieldset className="number-container__group">
          <h3 className="text__type">Height</h3>
          {unit === "metric" ? (
            <NumberInput
              inputName="height-cm"
              handleChange={handleChange}
              inputData={inputData}
            />
          ) : (
            <div className="number-container__inner">
              <NumberInput
                inputName="height-ft"
                handleChange={handleChange}
                inputData={inputData}
              />
              <NumberInput
                inputName="height-in"
                handleChange={handleChange}
                inputData={inputData}
              />
            </div>
          )}
        </fieldset>

        <fieldset className="number-container__group">
          <h3 className="text__type">Weight</h3>
          {unit === "metric" ? (
            <NumberInput
              inputName="weight-kg"
              handleChange={handleChange}
              inputData={inputData}
            />
          ) : (
            <div className="number-container__inner">
              <NumberInput
                inputName="weight-st"
                handleChange={handleChange}
                inputData={inputData}
              />
              <NumberInput
                inputName="weight-lbs"
                handleChange={handleChange}
                inputData={inputData}
              />
            </div>
          )}
        </fieldset>
      </div>

      <Result />
    </section>
  );
}
