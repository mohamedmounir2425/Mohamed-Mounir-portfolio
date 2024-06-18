import "./app.scss";
import Hero from "./landingPage/sections/hero/Hero";
import Preloader from "./landingPage/components/preloader/Preloader";
import Skills from "./landingPage/sections/skills/Skills";
import About from "./landingPage/sections/about/About";
function App() {
  return (
    <>
      <Preloader theme={"dark"} />

      <section>
        <Hero />
      </section>
      <section>
        <Skills />
      </section>
      <section id="about">
        <About />
      </section>
      <div>portfolio</div>
      <section>contact</section>
    </>
  );
}

export default App;
