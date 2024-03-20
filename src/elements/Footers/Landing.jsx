import { footerLinks } from "../../helper/data";

const LandingFooter = () => {
  return (
    <>
      <div className="grid grid-cols-2 h-auto w-full text-gray-300 text-xs md:text-base lg:text-lg">
        {/* text */}
        <div className="h-full w-full">
          <p className="leading-6 pl-6 md:pl-12 pb-6 md:pb-12 ">
            Visit Nepal, You will never regret it.
            <br />
            This is something incredible, fantastic,
            <br />
            mesmerizing and lifetime experience.
          </p>
        </div>

        {/* links */}
        <div className="h-full flex items-end justify-end gap-4">
          <div className="h-16 flex items-center flex-wrap gap-4 md:gap-16 backdrop-blur-sm px-4">
            {footerLinks.map((link, i) => (
              <>
                <li
                  className="list-none cursor-pointer font-normal hover:border-b-4 hover:border-b-yellow-500"
                  key={i}
                >
                  <a href={link.link} target="_blank">
                    {link.linkTitle}
                  </a>
                </li>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingFooter;
