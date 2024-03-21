import { Carousel } from "@material-tailwind/react";
import NavigationOverall from "../elements/Navigation/NavigationOverall";
import Mountain from "../assets/mountain.jpg";
import Mountain1 from "../assets/mountain1.jpg";
import Mountain2 from "../assets/mountain2.jpg";

const Home = () => {
  return (
    <>
      <div className="px-8 sm:px-12 md:px-16 lg:px-20">
        <NavigationOverall />

        {/* carousel */}
        <Carousel className="h-[70vh] w-full rounded-xl">
          <img
            src={Mountain}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src={Mountain1}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src={Mountain2}
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
    </>
  );
};

export default Home;
