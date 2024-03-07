import LandingHeader from "../elements/Headers/Landing";
import LandingFooter from "../elements/Footers/Landing";
import "../styles/Landing/LandingPage.css";

const Landing = () => {
  return (
    <>
      <div className="landing-main-container">
        <LandingHeader />
        landing page
        <LandingFooter />
      </div>
    </>
  );
};

export default Landing;
