import ArcReactor from "./ArcReactor";
import HUDLeft from "./HUDLeft";
import HUDRight from "./HUDRight";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
<section id="home" className="hero">
      <HUDLeft />

      <div className="hero-center">

        <ArcReactor />

        <h4 className="jarvis">
        </h4>

        <h1 className="hero-title">
          PAWAN JOGI
        </h1>
<div className="hero-stats">

  <div className="stat-card">
    <h3>15+</h3>
    <p>Projects</p>
  </div>

  <div className="stat-card">
    <h3>5+</h3>
    <p>AI Solutions</p>
  </div>

  <div className="stat-card">
    <h3>10+</h3>
    <p>Dashboards</p>
  </div>

</div>
        <TypeAnimation
          sequence={[
            "Data Analyst",
            1500,
            "Data Scientist",
            1500,
            "Machine Learning Engineer",
            1500,
            "AI Engineer",
            1500,
          ]}
          wrapper="h2"
          repeat={Infinity}
          className="typing"
        />

        <button className="enter-btn">
          ENTER SYSTEM
        </button>

        <div className="scroll-wrapper">
          <div className="mouse-scroll">
            <div className="wheel"></div>
          </div>

          <p>Scroll Down</p>
        </div>

      </div>

      <HUDRight />

    </section>
  );
}