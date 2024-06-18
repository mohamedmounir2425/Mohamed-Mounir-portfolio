import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import "./hero.scss";
import { motion } from "framer-motion";

const scrollVariant = {
  initial: {
    y: 0,
    opacity: 1,
  },
  animate: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};
function Hero() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="row  px-0 px-sm-2 px-lg-0">
            <div className="col-lg-6 order-2 order-lg-1">
              <HeroText />
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <HeroImage />
            </div>
          </div>

          <motion.img
            variants={scrollVariant}
            initial="initial"
            animate="animate"
            src="/images/hero/scroll.png"
            alt=""
            className="scrollImage"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
