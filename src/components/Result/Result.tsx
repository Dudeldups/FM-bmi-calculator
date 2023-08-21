import "./Result.less";

type Props = {};

export default function Result({}: Props) {
  // const hasInputs = true;
  const hasInputs = false;

  return (
    <section className="result">
      <header className="result__container">
        {hasInputs ? (
          <>
            <h3 className="result__title">Your BMI is...</h3>
            <p className="result__number">23.4</p>
          </>
        ) : (
          <>
            <h3 className="result__welcome-title">Welcome!</h3>
            <p className="result__desc">
              Enter your height and weight and you’ll see your BMI result here
            </p>
          </>
        )}
      </header>
      {hasInputs && (
        <p className="result__desc">
          Your BMI suggests you’re a healthy weight. Your ideal weight is
          between
          <span className="bold"> 63.3kgs - 85.2kgs</span>.
        </p>
      )}
    </section>
  );
}
