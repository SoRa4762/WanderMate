import LandingHeader from "../elements/Headers/Landing";
import LandingFooter from "../elements/Footers/Landing";

const Landing = () => {
  return (
    <>
      <div
        className="h-[100vh] w-full"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/src/assets/mountain1.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <LandingHeader />
        landing page
        <LandingFooter />
      </div>
    </>
  );
};

export default Landing;
