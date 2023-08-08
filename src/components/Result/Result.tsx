import "./Result.less";

type Props = {};

export default function Result({}: Props) {
  return (
    <section className="result">
      <div className="result__container">
        <h3 className="result__title">Your BMI is...</h3>
        <p className="result__number">23.4</p>
      </div>
      <p className="result__desc">
        Your BMI suggests you’re a healthy weight. Your ideal weight is between
        63.3kgs - 85.2kgs.
      </p>
    </section>
  );
}
