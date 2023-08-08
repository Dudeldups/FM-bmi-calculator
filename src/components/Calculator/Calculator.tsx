import Result from "../Result/Result";
import "./Calculator.less";

type Props = {};

export default function Calculator({}: Props) {
  return (
    <section className="calculator">
      <h2 className="calculator__title">Enter your details below</h2>

      <form className="form" action="">
        <input type="radio" name="unit" id="metric" className="form__input" />
        <label htmlFor="metric" className="form__label">
          Metric
        </label>

        <input type="radio" name="unit" id="imperial" className="form__input" />
        <label htmlFor="imperial" className="form__label">
          Imperial
        </label>

        <label htmlFor="height" className="form__label-text">
          Height
        </label>
        <input
          type="text"
          name="height"
          id="height"
          className="form__input-text"
        />

        <label htmlFor="weight" className="form__label-text">
          Weight
        </label>
        <input
          type="text"
          name="weight"
          id="weight"
          className="form__input-text"
        />
      </form>

      <Result />
    </section>
  );
}
