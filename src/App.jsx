import "./app.scss";
import Hero from "./components/hero/Hero";
import Preloader from "./components/preloader/Preloader";
function App() {
  return (
    <>
      <Preloader theme={"dark"} />

      <section>
        <Hero />
      </section>
      <section>skills</section>
      <section id="about">about</section>
      <section>portfolio</section>
      <section>contact</section>
    </>
  );
}

export default App;
