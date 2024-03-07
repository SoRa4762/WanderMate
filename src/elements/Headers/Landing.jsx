import { useState } from "react";
import headerImage from "../../assets/mountain1.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import "../../styles/Landing/LandingHeader.css";

const LandingHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="landing-header-container">
        <RxHamburgerMenu
          onClick={() => setOpen(true)}
          size={40}
          color="white"
        />
        <div className="landing-header-image">
          <img src={headerImage} alt="Header Image" />
        </div>
      </div>
    </>
  );
};

export default LandingHeader;
