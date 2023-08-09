import SiteHeader from "./components/SiteHeader/SiteHeader";
import CTA from "./components/CTA/CTA";
import Explanation from "./components/Explanation/Explanation";
import Suggestions from "./components/Suggestions/Suggestions";
import Limitations from "./components/Limitations/Limitations";

export default function App() {
  return (
    <div className="outer-container">
      <div className="background-box"></div>

      <SiteHeader />
      <main>
        <CTA />
        <Explanation />
        <Suggestions />
        <Limitations />
      </main>
    </div>
  );
}
