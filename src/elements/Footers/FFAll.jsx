import { ffAll } from "../../helper/data";

const FFAll = () => {
  return (
    <>
      <div className="flex justify-between mx-10 my-10 mt-15 bg-white shadow-2xl">
        <div>
          <h3 className="text-gray-800 font-semibold text-xl">
            About WanderMate
          </h3>
          {ffAll.slice(0, 5).map((about) => (
            <>
              <p className="">
                <a href={about.link}>{about.name}</a>
              </p>
            </>
          ))}
        </div>

        <div>
          <h3 className="text-gray-800 font-semibold text-xl">Explore</h3>
          {ffAll.slice(5, 9).map((explore) => (
            <>
              <p>
                <a href={explore.link}>{explore.name}</a>
              </p>
            </>
          ))}
        </div>

        <div>
          <h3 className="text-gray-800 font-semibold text-xl">
            Trip-Advisor Sites
          </h3>
          {ffAll.slice(-3).map((extra) => (
            <>
              <p>
                <a href={extra.link}>{extra.name}</a>
              </p>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default FFAll;
