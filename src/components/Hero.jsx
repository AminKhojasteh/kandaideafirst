import Slider from "./Slider";
import Slogan from "./Slogan";
import TopNav from "./TopNav";

function Hero({ engLang, onFaClick, onEnClick }) {
  return (
    <header className="h-[50rem] bg-[url('./src/assets/imgs/hero.jpg')] bg-cover bg-center bg-no-repeat pt-16">
      <TopNav engLang={engLang} onFaClick={onFaClick} onEnClick={onEnClick} />
      <Slogan />
      <Slider />
    </header>
  );
}

export default Hero;
