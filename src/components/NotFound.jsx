import { useState, useCallback } from "react";
import { useSpring, animated } from "react-spring";

const NotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const calcX = (x) => (x - window.innerWidth / 2) / 20;
  const calcY = (y) => (y - window.innerHeight / 2) / 20;

  const animatedProps = useSpring({
    x: mousePosition.x,
    y: mousePosition.y,
    config: { mass: 10, tension: 550, friction: 140 },
  });

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-gray-100"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-xl text-gray-600">Page not found</p>

        <div className="mt-8">
          <animated.svg
            style={{
              transform: animatedProps.x
                .interpolate(calcX)
                .interpolate((x) => `translateX(${x}px)`),
            }}
            className="h-16 w-16 mx-auto text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </animated.svg>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Looks like you've followed a broken link or entered a URL that
            doesn't exist on this site.
          </p>
          <p className="mt-2 text-gray-600">
            If you think this is a problem with the site, please{" "}
            <a href="#" className="text-blue-500 hover:underline">
              contact the site admin
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
