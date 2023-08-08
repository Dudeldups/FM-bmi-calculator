import "./Explanation.less";

export default function Explanation() {
  return (
    <div className="explanation">
      <aside>
        <img
          className="explanation__img"
          src="/assets/images/image-man-eating.webp"
          alt="A man in a white T-shirt, smiling and using chopsticks to hold a piece of sushi."
        />
      </aside>

      <section className="explanation__text">
        <h2 className="explanation__title">What your BMI result means</h2>

        <p className="explanation__desc">
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </section>
    </div>
  );
}
