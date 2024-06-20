import "./app.scss";
import Hero from "./landingPage/sections/hero/Hero";
import Preloader from "./landingPage/components/preloader/Preloader";
import Skills from "./landingPage/sections/skills/Skills";
import About from "./landingPage/sections/about/About";
import Portfolio from "./landingPage/sections/portfolio/Portfolio";
import Contact from "./landingPage/sections/contact/Contact";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./landingPage/components/footer/Footer";
function App() {
  return (
    <>
      <Preloader theme={"dark"} />

      <section id="Homepage">
        <Sidebar />
        <Hero />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="About">
        <About />
      </section>
      <div id="Portfolio">
        <Portfolio />
      </div>
      <div id="Contact">
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;
