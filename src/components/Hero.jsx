import Slider from "./Slider";
import Slogan from "./Slogan";
import TopNav from "./TopNav";

function Hero({ engLang, onFaClick, onEnClick }) {
  return (
    <header
      style={{ backgroundImage: "url('./imgs/hero.jpg')" }}
      className="h-[50rem] bg-cover bg-center bg-no-repeat pt-16"
    >
      <TopNav engLang={engLang} onFaClick={onFaClick} onEnClick={onEnClick} />
      <Slogan />
      <Slider />
    </header>
  );
}

export default Hero;
