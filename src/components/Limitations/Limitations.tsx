import "./Limitations.less";

export default function Limitations() {
  return (
    <section className="limitations">
      <ul className="grid">
        <header className="limitations__text">
          <h2 className="limitations__title">Limitations of BMI</h2>
          <p className="limitations__desc">
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </header>
        <li className="grid__item">
          <header className="grid__header">
            <img
              src="/assets/images/icon-gender.svg"
              alt=""
              className="grid__img"
            />
            <h3 className="grid__title">Gender</h3>
          </header>
          <p className="grid__desc">
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </p>
        </li>

        <li className="grid__item">
          <header className="grid__header">
            <img
              src="/assets/images/icon-age.svg"
              alt=""
              className="grid__img"
            />
            <h3 className="grid__title">Age</h3>
          </header>
          <p className="grid__desc">
            In aging individuals, increased body fat and muscle loss may cause
            BMI to underestimate body fat content.
          </p>
        </li>

        <li className="grid__item">
          <header className="grid__header">
            <img
              src="/assets/images/icon-muscle.svg"
              alt=""
              className="grid__img"
            />
            <h3 className="grid__title">Muscle</h3>
          </header>
          <p className="grid__desc">
            BMI may misclassify muscular individuals as overweight or obese, as
            it doesn't differentiate muscle from fat.
          </p>
        </li>

        <li className="grid__item">
          <header className="grid__header">
            <img
              src="/assets/images/icon-pregnancy.svg"
              alt=""
              className="grid__img"
            />
            <h3 className="grid__title">Pregnancy</h3>
          </header>
          <p className="grid__desc">
            Expectant mothers experience weight gain due to their growing baby.
            Maintaining a healthy pre-pregnancy BMI is advisable to minimise
            health risks for both mother and child.
          </p>
        </li>

        <li className="grid__item">
          <header className="grid__header">
            <img
              src="/assets/images/icon-race.svg"
              alt=""
              className="grid__img"
            />
            <h3 className="grid__title">Race</h3>
          </header>
          <p className="grid__desc">
            Certain health concerns may affect individuals of some Black and
            Asian origins at lower BMIs than others. To learn more, it is
            advised to discuss this with your GP or practice nurse.
          </p>
        </li>
      </ul>
    </section>
  );
}
