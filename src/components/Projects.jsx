import { useRef, useEffect, useState } from "react";
import useScrollPosition from "../hooks/useScrollPosition";

function Projects() {
  const scrollPostion = useScrollPosition();

  const elementRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(function () {
    const elementRect = elementRef.current.getBoundingClientRect();
    setWidth(elementRect.width);
    setHeight(elementRect.height);
  }, []);

  return (
    <div
      ref={elementRef}
      className="mx-auto mt-14 grid max-w-[100rem] grid-cols-[3rem_1fr] px-5 lg:mt-20 lg:px-8"
    >
      <div className="pt-32">
        <img src="./src/assets/icons/arrow-down.svg" />
      </div>
      <div className="relative flex flex-col">
        <h2 className="mb-5 text-5xl font-bold uppercase text-gray-700">
          OUR PROJECTS
        </h2>
        <p className="mb-8 text-lg text-gray-700">
          Discover the next inspiring tasks in industry
        </p>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(12rem,_15rem))] gap-5 md:gap-4 lg:gap-8">
          <div className="relative overflow-hidden">
            <img
              className="w-full transition-all duration-300 hover:scale-110"
              src="./src/assets/imgs/project.webp"
            />
            <span className="absolute left-5 top-5 w-[90%] text-2xl font-medium uppercase text-white">
              PROJECT TITLE
            </span>
          </div>
          <div className="relative overflow-hidden">
            <img
              className="transition-all duration-300 hover:scale-110"
              src="./src/assets/imgs/project.webp"
            />
            <span className="absolute left-5 top-5 w-[90%] text-2xl font-medium uppercase text-white">
              PROJECT TITLE
            </span>
          </div>
          <div className="relative overflow-hidden">
            <img
              className="transition-all duration-300 hover:scale-110"
              src="./src/assets/imgs/project.webp"
            />
            <span className="absolute left-5 top-5 w-[90%] text-2xl font-medium uppercase text-white">
              PROJECT TITLE
            </span>
          </div>
          <div className="relative overflow-hidden">
            <img
              className="transition-all duration-300 hover:scale-110"
              src="./src/assets/imgs/project.webp"
            />
            <span className="absolute left-5 top-5 w-[90%] text-2xl font-medium uppercase text-white">
              PROJECT TITLE
            </span>
          </div>
          <div className="relative overflow-hidden">
            <img
              className="transition-all duration-300 hover:scale-110"
              src="./src/assets/imgs/project.webp"
            />
            <span className="absolute left-5 top-5 w-[90%] text-2xl font-medium uppercase text-white">
              PROJECT TITLE
            </span>
          </div>
          <div className="relative overflow-hidden">
            <img
              className="transition-all duration-300 hover:scale-110"
              src="./src/assets/imgs/project.webp"
            />
            <span className="absolute left-5 top-5 w-[90%] text-2xl font-medium uppercase text-white">
              PROJECT TITLE
            </span>
          </div>
          <div className="relative overflow-hidden">
            <img
              className="transition-all duration-300 hover:scale-110"
              src="./src/assets/imgs/project.webp"
            />
            <span className="absolute left-5 top-5 w-[90%] text-2xl font-medium uppercase text-white">
              PROJECT TITLE
            </span>
          </div>
          <div className="relative overflow-hidden">
            <img
              className="transition-all duration-300 hover:scale-110"
              src="./src/assets/imgs/project.webp"
            />
            <span className="absolute left-5 top-5 w-[90%] text-2xl font-medium uppercase text-white">
              PROJECT TITLE
            </span>
          </div>
          <div className="relative overflow-hidden">
            <img
              className="transition-all duration-300 hover:scale-110"
              src="./src/assets/imgs/project.webp"
            />
            <span className="absolute left-5 top-5 w-[90%] text-2xl font-medium uppercase text-white">
              PROJECT TITLE
            </span>
          </div>
        </div>
        <div
          style={{
            left: `${(scrollPostion * width) / height - width - 400}px`,
          }}
          className="absolute top-40 -z-10 w-min"
        >
          <span
            style={{ WebkitTextStroke: "3px #aaa" }}
            className="text-center text-[15rem] font-bold leading-[8rem] text-transparent"
          >
            &nbsp;&nbsp;&nbsp;We Create
          </span>
        </div>
      </div>
    </div>
  );
}

export default Projects;
