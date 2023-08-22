import { useEffect, useState } from "react";
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

  useEffect(() => {
    // console.log(inputData);
  }, [inputData]);

  const convertKgToStoneAndPounds = (kg: number) => {
    const totalPounds = kg * 2.20462;
    const stone = Math.floor(totalPounds / 14);
    const pounds = Math.floor(totalPounds - stone * 14);
    return {
      stone,
      pounds,
    };
  };

  const convertInputs = (type: string, value: string) => {
    setInputData((prev: InputData) => {
      const numberInput = parseFloat(value);
      let updatedInputData = { ...prev, [type]: value };

      switch (type) {
        case "height-cm":
          const cmToInches = numberInput / 2.54;
          const feet = Math.floor(cmToInches / 12);
          const inches = Math.floor(cmToInches - feet * 12);
          updatedInputData["height-ft"] = feet >= 0 ? feet.toString() : "";
          updatedInputData["height-in"] = inches >= 0 ? inches.toString() : "";
          break;

        case "height-ft":
          const ftToCm =
            numberInput * 12 + parseFloat(updatedInputData["height-in"]);
          updatedInputData["height-cm"] = ftToCm >= 0 ? ftToCm.toString() : "";
          break;

        case "height-in":
          const totalInches =
            numberInput + parseFloat(updatedInputData["height-ft"]) * 12;
          const inToCm = Math.round(totalInches * 2.54);
          updatedInputData["height-cm"] = inToCm >= 0 ? inToCm.toString() : "";
          break;

        case "weight-kg":
          const { stone, pounds } = convertKgToStoneAndPounds(numberInput);
          updatedInputData["weight-st"] = stone >= 0 ? stone.toString() : "";
          updatedInputData["weight-lbs"] = pounds >= 0 ? pounds.toString() : "";
          break;

        case "weight-st":
          const stToKg =
            numberInput * 14 + parseFloat(updatedInputData["weight-lbs"]);
          updatedInputData["weight-kg"] = stToKg >= 0 ? stToKg.toString() : "";
          break;

        case "weight-lbs":
          const totalPounds =
            numberInput + parseFloat(updatedInputData["weight-st"]) * 14;
          updatedInputData["weight-kg"] =
            totalPounds >= 0 ? totalPounds.toString() : "";
          break;

        default:
          break;
      }

      return updatedInputData;
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type, id, value } = e.target;
    if (type === "radio") {
      setUnit(id);
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

      <Result
        inputData={inputData}
        unit={unit}
        convertKgToStoneAndPounds={convertKgToStoneAndPounds}
      />
    </section>
  );
}
