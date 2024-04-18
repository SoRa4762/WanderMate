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
              <p className="">{about.name}</p>
            </>
          ))}
        </div>

        <div>
          <h3>Explore</h3>
          {ffAll.slice(5, 9).map((explore) => (
            <>
              <p>{explore.name}</p>
            </>
          ))}
        </div>

        <div>
          <h3>Trip-Advisor Sites</h3>
          {ffAll.slice(-3).map((extra) => (
            <>
              <p>{extra.name}</p>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default FFAll;
