import "./Result.less";

export default function Result({ inputData }: ResultProps) {
  const centimeter = parseFloat(inputData["height-cm"]);
  const kilogram = parseFloat(inputData["weight-kg"]);

  const hasInputs = centimeter >= 100 && kilogram >= 30;

  const BMI = Math.round((kilogram / Math.pow(centimeter / 100, 2)) * 10) / 10;
  const normalMin = Math.round(18.5 * Math.pow(centimeter / 100, 2) * 10) / 10;
  const normalMax = Math.round(25 * Math.pow(centimeter / 100, 2) * 10) / 10;

  return (
    <section className="result">
      <header className="result__container">
        {hasInputs ? (
          <>
            <h3 className="result__title">Your BMI is...</h3>
            <p className="result__number">{BMI}</p>
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
          <span className="bold">
            {" "}
            {normalMin}kgs - {normalMax}kgs
          </span>
          .
        </p>
      )}
    </section>
  );
}
