import { useState, useEffect } from "react";
import Result from "../Result/Result";
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
    switch (type) {
      case "height-cm":
        const centimeter = parseInt(value);
        const totalInches = centimeter / 2.54;
        const feet = Math.floor(totalInches / 12);
        const inches = Math.floor(totalInches - feet * 12);
        setInputData(prev => {
          return {
            ...prev,
            "height-ft": feet >= 0 ? feet.toString() : "",
            "height-in": inches >= 0 ? inches.toString() : "",
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
    } else if (type === "text") {
      setInputData(prev => ({
        ...prev,
        [id]: value,
      }));
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

      <div className="text">
        <fieldset className="text__container">
          <h3 className="text__type">Height</h3>
          {unit === "metric" ? (
            <div className="text__input-wrapper">
              <label htmlFor="height-cm" className="sr-only">
                Height in centimeter
              </label>
              <input
                type="text"
                name="height-cm"
                id="height-cm"
                placeholder="0"
                onChange={handleChange}
                value={inputData["height-cm"]}
                className="text__input"
              />
              <span className="text__unit">cm</span>
            </div>
          ) : (
            <div className="text__inner">
              <div className="text__input-wrapper">
                <label htmlFor="height-ft" className="sr-only">
                  Height feet
                </label>
                <input
                  type="text"
                  name="height-ft"
                  id="height-ft"
                  placeholder="0"
                  onChange={handleChange}
                  value={inputData["height-ft"]}
                  className="text__input"
                />
                <span className="text__unit">ft</span>
              </div>
              <div className="text__input-wrapper">
                <label htmlFor="height-in" className="sr-only">
                  Height inches
                </label>
                <input
                  type="text"
                  name="height-in"
                  id="height-in"
                  placeholder="0"
                  onChange={handleChange}
                  value={inputData["height-in"]}
                  className="text__input"
                />
                <span className="text__unit">in</span>
              </div>
            </div>
          )}
        </fieldset>

        <fieldset className="text__container">
          <h3 className="text__type">Weight</h3>
          {unit === "metric" ? (
            <div className="text__input-wrapper">
              <label htmlFor="weight-kg" className="sr-only">
                Weight in kilogram
              </label>
              <input
                type="text"
                name="weight-kg"
                id="weight-kg"
                placeholder="0"
                onChange={handleChange}
                value={inputData["weight-kg"]}
                className="text__input"
              />
              <span className="text__unit">kg</span>
            </div>
          ) : (
            <div className="text__inner">
              <div className="text__input-wrapper">
                <label htmlFor="weight-st" className="sr-only">
                  Weight stone
                </label>
                <input
                  type="text"
                  name="weight-st"
                  id="weight-st"
                  placeholder="0"
                  onChange={handleChange}
                  value={inputData["weight-st"]}
                  className="text__input"
                />
                <span className="text__unit">st</span>
              </div>
              <div className="text__input-wrapper">
                <label htmlFor="weight-lbs" className="sr-only">
                  Weight pounds
                </label>
                <input
                  type="text"
                  name="weight-lbs"
                  id="weight-lbs"
                  placeholder="0"
                  onChange={handleChange}
                  value={inputData["weight-lbs"]}
                  className="text__input"
                />
                <span className="text__unit">lbs</span>
              </div>
            </div>
          )}
        </fieldset>
      </div>

      <Result />
    </section>
  );
}
