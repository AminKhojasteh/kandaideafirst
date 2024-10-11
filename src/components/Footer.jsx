import FooterLink from "./FooterLink";

function Footer({ engLang, onFaClick, onEnClick }) {
  const scrollToTop = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mx-auto mt-24 max-w-[60rem] px-4 pb-16 lg:mt-28 lg:pb-24">
      <div className="grid grid-cols-[3rem_1fr] gap-y-5 text-gray-700 md:gap-y-8">
        <div className="pt-5">
          <img src="./icons/arrow-up.png" />
        </div>
        <div className="grid grid-cols-[4fr_4fr_4fr_1fr] gap-x-2 gap-y-2 text-[1.6rem] md:gap-x-5 md:text-3xl">
          <p className="self-center uppercase">INDUSTRIES</p>
          <p className="self-center uppercase">SERVICES</p>
          <p className="self-center uppercase">COOPERATION</p>
          <button onClick={scrollToTop} className="justify-self-end">
            <img src="./icons/second-logo.svg" className="w-16" />
          </button>
          <div className="flex flex-col gap-0.5 md:gap-1">
            <FooterLink>Maritime</FooterLink>
            <FooterLink>Oil & Gas</FooterLink>
            <FooterLink>Telecommunication</FooterLink>
            <FooterLink>Agriculture</FooterLink>
            <FooterLink>Roads & Cities</FooterLink>
            <FooterLink>IT Infrastructure</FooterLink>
          </div>
          <div className="flex flex-col gap-1">
            <FooterLink>Data Providing</FooterLink>
            <FooterLink>Data Engineering</FooterLink>
            <FooterLink>Engineering Design</FooterLink>
            <FooterLink>GIS & Geomatic</FooterLink>
          </div>
          <div>
            <div className="mb-6 flex flex-col gap-1">
              <FooterLink>Contact Us</FooterLink>
              <FooterLink>Get Job</FooterLink>
              <FooterLink>About Kanda Idea</FooterLink>
            </div>
            <div className="text-lg md:text-xl">
              <span>Change Language :</span>
              <div className="flex gap-2">
                <span
                  onClick={onFaClick}
                  className={`${engLang ? "cursor-pointer" : "text-gray-400"}`}
                >
                  Fa
                </span>
                <span>/</span>
                <span
                  onClick={onEnClick}
                  className={`${engLang ? "text-gray-400" : "cursor-pointer"}`}
                >
                  En
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-between px-10">
          <div className="flex h-[1.6rem] gap-4">
            <FooterLink className="h-full">
              <img src="./icons/linkedin.png" className="h-full" />
            </FooterLink>
            <FooterLink className="h-full">
              <img src="./icons/instagram.png" className="h-full" />
            </FooterLink>
            <FooterLink className="h-full overflow-hidden rounded-md">
              <img src="./icons/aparat.png" className="h-full" />
            </FooterLink>
          </div>
          <span>&copy;Copyright 2020. All Rights Reserved.</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
