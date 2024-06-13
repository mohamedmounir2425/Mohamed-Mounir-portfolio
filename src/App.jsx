import "./app.scss";
import Preloader from "./components/preloader/Preloader";
function App() {
  return (
    <>
      <Preloader theme={"dark"} />

      <section>Hero</section>
      <section>skills</section>
      <section>about</section>
      <section>portfolio</section>
      <section>contact</section>
    </>
  );
}

export default App;
