import LandingHeader from "../elements/Headers/Landing";
import LandingFooter from "../elements/Footers/Landing";

const Landing = () => {
  return (
    <>
      <div
        className="h-[100vh] w-full"
        style={{
          background: `linear-gradient(rgba(0, 128, 128, 0.5), rgba(0, 128, 128, 0.5)), url("/src/assets/mountain.jpg")`,
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
