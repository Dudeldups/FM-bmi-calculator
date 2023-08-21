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
    setInputData((prev: InputData) => {
      const stringInput = value.replace(",", ".");
      const numberInput = parseFloat(stringInput);
      let updatedInputData = { ...prev, [type]: value };

      switch (type) {
        case "height-cm":
          const cmToInches = numberInput / 2.54;
          const cmFeet = Math.floor(cmToInches / 12);
          const cmInches = Math.floor(cmToInches - cmFeet * 12);
          updatedInputData["height-ft"] = cmFeet >= 0 ? cmFeet.toString() : "";
          updatedInputData["height-in"] =
            cmInches >= 0 ? cmInches.toString() : "";
          break;
        // case "height-ft":
        //   const feet = parseFloat(stringInput);
        //   const totalInches = centimeter / 2.54;
        //   const feet = Math.floor(totalInches / 12);
        //   const inches = Math.floor(totalInches - feet * 12);
        //   updatedInputData["height-ft"] = feet >= 0 ? feet.toString() : "";
        //   updatedInputData["height-in"] = inches >= 0 ? inches.toString() : "";
        //   break;
        case "weight-kg":
          const kgToPounds = numberInput * 2.20462;
          const kgStone = Math.floor(kgToPounds / 14);
          const kgPounds = Math.floor(kgToPounds - kgStone * 14);
          updatedInputData["weight-st"] =
            kgStone >= 0 ? kgStone.toString() : "";
          updatedInputData["weight-lbs"] =
            kgPounds >= 0 ? kgPounds.toString() : "";
          break;

        default:
          break;
      }

      return updatedInputData;
    });
  };

  useEffect(() => {
    // console.log(inputData);
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
