import "./app.scss";
import Hero from "./landingPage/sections/hero/Hero";
import Preloader from "./landingPage/components/preloader/Preloader";
import Skills from "./landingPage/sections/skills/Skills";
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
      <section id="about">about</section>
      <section>portfolio</section>
      <section>contact</section>
    </>
  );
}

export default App;
