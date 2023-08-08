import MainHeader from "../MainHeader/MainHeader";
import Calculator from "../Calculator/Calculator";
import "./CTA.less";

type Props = {};

export default function CTA({}: Props) {
  return (
    <div className="cta">
      <MainHeader />
      <Calculator />
    </div>
  );
}
