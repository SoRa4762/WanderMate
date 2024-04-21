import { ffAll } from "../../helper/data";

const FFAll = () => {
  return (
    <>
      <div className="flex flex-col sm:mx-10 my-10 mt-15 bg-white shadow-2xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 px-12 ">
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="text-gray-800 font-semibold text-base md:text-xl  pb-2">
              About WanderMate
            </h3>
            {ffAll.slice(0, 5).map((about) => (
              <>
                <p className="text-sm md:text-base">
                  <a href={about.link}>{about.name}</a>
                </p>
              </>
            ))}
          </div>

          <div className="flex flex-col gap-2 items-center md:items-start  my-6 md:my-0">
            <h3 className="text-gray-800 font-semibold text-base md:text-xl  pb-2">
              Explore
            </h3>
            {ffAll.slice(5, 9).map((explore) => (
              <>
                <p className="text-sm md:text-base">
                  <a href={explore.link}>{explore.name}</a>
                </p>
              </>
            ))}
          </div>

          <div className="flex flex-col gap-2 items-center md:items-start my-0 md:my-6 lg:my-0">
            <h3 className="text-gray-800 font-semibold text-base md:text-xl pb-2">
              Trip-Advisor Sites
            </h3>
            {ffAll.slice(-4).map((extra) => (
              <>
                <p className="text-sm md:text-base">
                  <a href={extra.link}>{extra.name}</a>
                </p>
              </>
            ))}
          </div>
        </div>
        <p className="text-center text-gray-900 font-semibold text-sm md:text-base my-6">
          &copy; 2024 WanderMate LLC All rights reserved
        </p>
      </div>
    </>
  );
};

export default FFAll;
