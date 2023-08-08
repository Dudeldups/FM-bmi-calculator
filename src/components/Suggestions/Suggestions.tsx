import "./Suggestions.less";

export default function Suggestions() {
  return (
    <section className="suggestions">
      <h2 className="sr-only">What you can do:</h2>

      <ul className="suggestions__list">
        <li className="suggestions__item">
          <img
            src="/assets/images/icon-eating.svg"
            alt=""
            className="suggestions__img"
          />
          <div className="suggestions__text-container">
            <h3 className="suggestions__title">Healthy eating</h3>
            <p className="suggestions__desc">
              Healthy eating promotes weight control, disease prevention, better
              digestion, immunity, mental clarity, and mood.
            </p>
          </div>
        </li>

        <li className="suggestions__item">
          <img
            src="/assets/images/icon-exercise.svg"
            alt=""
            className="suggestions__img"
          />
          <div className="suggestions__text-container">
            <h3 className="suggestions__title">Regular exercise</h3>
            <p className="suggestions__desc">
              Exercise improves fitness, aids weight control, elevates mood, and
              reduces disease risk, fostering wellness and longevity.
            </p>
          </div>
        </li>

        <li className="suggestions__item">
          <img
            src="/assets/images/icon-sleep.svg"
            alt=""
            className="suggestions__img"
          />
          <div className="suggestions__text-container">
            <h3 className="suggestions__title">Adequate sleep</h3>
            <p className="suggestions__desc">
              Sleep enhances mental clarity, emotional stability, and physical
              wellness, promoting overall restoration and rejuvenation.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
