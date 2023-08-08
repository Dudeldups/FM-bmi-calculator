import "./MainHeader.less";

export default function MainHeader() {
  return (
    <header className="main-header">
      <h1 className="main-header__title">Body Mass Index Calculator</h1>
      <p className="main-header__desc">
        Better understand your weight in relation to your height using our body
        mass index (BM) calculator. While BMI is not the sole determinant of a
        healthy weight, it offers a valuable starting point to evaluate your
        overall health and well-being.
      </p>
    </header>
  );
}
