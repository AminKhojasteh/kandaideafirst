import { useState } from "react";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Projects from "./components/Projects";
import Apply from "./components/Apply";
import Footer from "./components/Footer";

function App() {
  const [engLang, setEngLang] = useState(true);

  const handleFaClick = function () {
    setEngLang(false);
  };

  const handleEnClick = function () {
    setEngLang(true);
  };

  return (
    <div className="overflow-hidden font-din">
      <Hero
        engLang={engLang}
        onFaClick={handleFaClick}
        onEnClick={handleEnClick}
      />
      <Overview />
      <Projects />
      <Apply />
      <Footer
        engLang={engLang}
        onFaClick={handleFaClick}
        onEnClick={handleEnClick}
      />
    </div>
  );
}

export default App;
