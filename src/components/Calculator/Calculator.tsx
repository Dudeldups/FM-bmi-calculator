import Result from "../Result/Result";
import "./Calculator.less";

type Props = {};

export default function Calculator({}: Props) {
  return (
    <section className="calculator">
      <h2 className="calculator__title">Enter your details below</h2>

      <div className="radio">
        <label htmlFor="metric" className="radio__label">
          <input
            type="radio"
            name="unit"
            id="metric"
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
            className="radio__input sr-only"
          />
          <span className="radio__circle"></span>
          Imperial
        </label>
      </div>

      <div className="text">
        <label htmlFor="height" className="text__label">
          Height
          <input
            type="text"
            name="height"
            id="height"
            className="text__input"
          />
          <span className="text__unit">cm</span>
        </label>

        <label htmlFor="weight" className="text__label">
          Weight
          <input
            type="text"
            name="weight"
            id="weight"
            className="text__input"
          />
          <span className="text__unit">kg</span>
        </label>
      </div>

      <Result />
    </section>
  );
}
