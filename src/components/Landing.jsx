import LandingHeader from "../elements/Headers/Landing";
import LandingFooter from "../elements/Footers/Landing";

const Landing = () => {
  return (
    <>
      <div
        className="h-[100vh] w-full flex flex-col justify-between items-center"
        style={{
          background: `linear-gradient(rgba(0, 128, 128, 0.6), rgba(0, 128, 128, 0.6)), url("/src/assets/bg8.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "top",

          //! need to add background for mobile as well
          // "maxWidth: 500px": {
          //   background: `linear-gradient(rgba(0, 128, 128, 0.6), rgba(0, 128, 128, 0.6)), url("/src/assets/bg7.jpg")`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "top",
          // },
        }}
      >
        <LandingHeader />
        {/* hero component */}
        <div className="text-center text-white">
          <p className="text-lg font-bold md:text-xl lg:text-2xl bg-gradient-to-b from-gray-400 to-gray-100 text-transparent bg-clip-text">
            The Country of Himalays
          </p>
          <h1
            className="font-bold text-7xl md:text-8xl lg:text-9xl"
            style={{ textShadow: "4px 8px 8px rgba(0, 0, 0, 0.4)" }}
          >
            <span className="text-orange-600">NEP</span>
            AL
          </h1>
        </div>
        <LandingFooter />
      </div>
    </>
  );
};

export default Landing;
