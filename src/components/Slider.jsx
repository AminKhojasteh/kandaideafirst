import { useEffect, useState } from "react";

function Slider() {
  const [step, setStep] = useState(1);

  const handleArrowClick = function () {
    setStep((s) => {
      if (s !== 3) return s + 1;
      return 1;
    });
  };

  useEffect(function () {
    const repeater = setInterval(() => {
      setStep((s) => {
        if (s !== 3) return s + 1;
        return 1;
      });
    }, 5000);
    return () => clearInterval(repeater);
  }, []);

  return (
    <div>
      <div className="relative h-28 border-b border-b-white">
        <div
          className={`absolute top-1/2 flex -translate-y-1/2 items-center gap-5 pl-10 transition-all duration-300 md:pl-14 lg:pl-20 ${step === 1 ? "" : "translate-y-32 opacity-0"}`}
        >
          <div>
            <img src="./icons/services-border.svg" />
          </div>
          <div>
            <p
              style={{ WebkitTextStroke: "0.5px #fff" }}
              className="translate-y-1 text-[2rem] uppercase text-transparent lg:text-[2.4rem]"
            >
              SERVICES & SOLUTIONS
            </p>
          </div>
        </div>
        <div
          className={`absolute top-1/2 flex -translate-y-1/2 items-center gap-5 pl-10 transition-all duration-300 md:pl-14 lg:pl-20 ${step === 2 ? "" : "translate-y-32 opacity-0"}`}
        >
          <div>
            <img src="./icons/industries-border.svg" />
          </div>
          <div>
            <p
              style={{ WebkitTextStroke: "0.5px #fff" }}
              className="translate-y-1 text-[2rem] uppercase text-transparent lg:text-[2.4rem]"
            >
              INDUSTRIES
            </p>
          </div>
        </div>
        <div
          className={`absolute top-1/2 flex -translate-y-1/2 items-center gap-5 pl-10 transition-all duration-300 md:pl-14 lg:pl-20 ${step === 3 ? "" : "translate-y-32 opacity-0"}`}
        >
          <div>
            <img src="./icons/R&D-border.svg" />
          </div>
          <div>
            <p
              style={{ WebkitTextStroke: "0.5px #fff" }}
              className="translate-y-1 text-[2rem] uppercase text-transparent lg:text-[2.4rem]"
            >
              RESEARCH & DEVELOPMENT
            </p>
          </div>
        </div>
        <div className="absolute -bottom-20 right-10 z-10 flex flex-col gap-2 md:right-16 lg:right-28">
          <div>
            <img src={`./icons/state-${step}.svg`} />
          </div>
          <div>
            <img src="./icons/number-three.svg" />
          </div>
          <button onClick={handleArrowClick} className="cursor-pointer">
            <img src="./icons/arrow-blue.svg" />
          </button>
        </div>
      </div>
      <div className="relative">
        <div
          className={`absolute left-0 top-0 w-[38rem] transition-all duration-300 md:w-[45rem] ${step === 3 ? "translate-x-96 opacity-0" : ""} ${step === 1 ? "-translate-y-28 opacity-0" : ""}`}
        >
          <div className="flex items-center gap-5 py-5 pl-10 md:pl-14 lg:pl-20">
            <div>
              <img src="./icons/services-solid.svg" />
            </div>
            <div>
              <p className="translate-y-1 text-[2rem] uppercase text-white lg:text-[2.4rem]">
                SERVICES & SOLUTIONS
              </p>
            </div>
          </div>
          <p className="pl-28 text-base text-white md:pl-[9.2rem] md:text-lg lg:text-xl">
            Over 15 years of experience in engineering services consultancy and
            with the taking advantage of expert human resources, Kanda Idea
            provides a wide range of services and solutions and become one of
            the leading consultants in the region.
          </p>
        </div>
        <div
          className={`absolute left-0 top-0 w-[38rem] transition-all duration-300 md:w-[45rem] ${step === 2 ? "translate-x-96 opacity-0" : ""} ${step === 3 ? "-translate-y-28 opacity-0" : ""}`}
        >
          <div className="flex items-center gap-5 py-5 pl-10 md:pl-14 lg:pl-20">
            <div>
              <img src="./icons/R&D-solid.svg" />
            </div>
            <div>
              <p className="translate-y-1 text-[2rem] uppercase text-white lg:text-[2.4rem]">
                RESEARCH & DEVELOPMENT
              </p>
            </div>
          </div>
          <p className="pl-28 text-base text-white md:pl-[9.2rem] md:text-lg lg:text-xl">
            In this contemporary age, science and technology are changing
            magnificently second by second and being associated with it, is one
            of the most necessary characteristics that all companies should
            follow. Kanda Idea put adequate time and effort into researching
            cutting-edge science and developing the latest technology by several
            laboratories.
          </p>
        </div>
        <div
          className={`absolute left-0 top-0 w-[38rem] transition-all duration-300 md:w-[45rem] ${step === 1 ? "translate-x-96 opacity-0" : ""} ${step === 2 ? "-translate-y-28 opacity-0" : ""}`}
        >
          <div className="flex items-center gap-5 py-5 pl-10 md:pl-14 lg:pl-20">
            <div>
              <img src="./icons/industries-solid.svg" />
            </div>
            <div>
              <p className="translate-y-1 text-[2rem] uppercase text-white lg:text-[2.4rem]">
                INDUSTRIES
              </p>
            </div>
          </div>
          <p className="pl-28 text-base text-white md:pl-[9.2rem] md:text-lg lg:text-xl">
            Kanda Idea has considerable expertise in many industries and also
            has developed its sector of abilities field by field and it has been
            experienced in a wide range of territory. Kanda Idea has started its
            journey from Oil and Gas and Petrochemical industry and continued in
            GIS (Geospatial Information System) and Geomatics and now it is
            cruising in the Maritime and Ship-Tracking area.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Slider;
