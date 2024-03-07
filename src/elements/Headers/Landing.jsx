import headerImage from "../../assets/mountain1.jpg";
import "../../styles/Landing/LandingHeader.css";
import Navigation from "../Navigation/Navigation";

const LandingHeader = () => {
  return (
    <>
      <div className="landing-header-container">
        <Navigation />
        <div className="landing-header-image">
          <img src={headerImage} alt="Header Image" />
        </div>
      </div>
    </>
  );
};

export default LandingHeader;
