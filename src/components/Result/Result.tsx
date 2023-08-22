import "./Result.less";

export default function Result({
  inputData,
  unit,
  convertKgToStoneAndPounds,
}: ResultProps) {
  const centimeter = parseFloat(inputData["height-cm"]);
  const kilogram = parseFloat(inputData["weight-kg"]);

  const weightToString = (weight: number) => {
    if (unit === "metric") {
      return `${weight} kg`;
    } else if (unit === "imperial") {
      const { stone, pounds } = convertKgToStoneAndPounds(weight);
      return `${stone} st ${pounds} lbs`;
    }
  };

  const hasInputs = centimeter >= 100 && kilogram >= 30;

  const BMI = Math.round((kilogram / Math.pow(centimeter / 100, 2)) * 10) / 10;
  const normalMin = weightToString(
    Math.round(18.5 * Math.pow(centimeter / 100, 2) * 10) / 10
  );
  const normalMax = weightToString(
    Math.round(25 * Math.pow(centimeter / 100, 2) * 10) / 10
  );

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
            {normalMin} - {normalMax}
          </span>
          .
        </p>
      )}
    </section>
  );
}
