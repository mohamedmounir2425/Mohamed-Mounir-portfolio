import { useRef } from "react";
import Tooltip from "../../../components/tooltip/Tooltip";
import { motion } from "framer-motion";
import "./skills.scss";
import { useInView } from "framer-motion";
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};
function Skills() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      animate={isInView && "animate"}
      className="container h-100 d-flex justify-content-center align-items-center py-5 "
    >
      <div className="rowsContainer d-flex flex-column gap-5 ">
        {/* row one */}
        <motion.div
          className="skillsRow d-flex justify-content-center"
          variants={variants}
        >
          <Tooltip infoText="HTML">
            <div className="skillContainer">
              <img src="/images/skills/html.svg" className="w-100" alt="" />
            </div>
          </Tooltip>
          <Tooltip infoText="CSS">
            <div className="skillContainer">
              <img src="/images/skills/css.svg" className="w-100" alt="" />
            </div>
          </Tooltip>
          <Tooltip infoText="Sass">
            <div className="skillContainer">
              <img src="/images/skills/sass.svg" className="w-100" alt="" />
            </div>
          </Tooltip>
          <Tooltip infoText="Javascript">
            <div className="skillContainer">
              <img
                src="/images/skills/javascript.svg"
                className="w-100"
                alt=""
              />
            </div>
          </Tooltip>
          <Tooltip infoText="Typescript">
            <div className="skillContainer">
              <img
                src="/images/skills/typescript.svg"
                className="w-100"
                alt=""
              />
            </div>
          </Tooltip>
          <Tooltip infoText="Node.JS">
            <div className="skillContainer">
              <img src="/images/skills/node-js.svg" className="w-100" alt="" />
            </div>
          </Tooltip>
        </motion.div>
        {/* row two */}
        <motion.div
          className="skillsRow d-flex justify-content-center"
          variants={variants}
        >
          <Tooltip infoText="React">
            <div className="skillContainer">
              <img src="/images/skills/react.svg" className="w-100" alt="" />
            </div>
          </Tooltip>
          <Tooltip infoText="Redux">
            <div className="skillContainer">
              <img src="/images/skills/redux.svg" className="w-100" alt="" />
            </div>
          </Tooltip>
          <Tooltip infoText="Next.JS">
            <div className="skillContainer">
              <img src="/images/skills/nextjs2.svg" className="w-100" alt="" />
            </div>
          </Tooltip>
          <Tooltip infoText="Angular">
            <div className="skillContainer">
              <img src="/images/skills/angular.svg" className="w-100" alt="" />
            </div>
          </Tooltip>
          <Tooltip infoText="Vue">
            <div className="skillContainer">
              <img src="/images/skills/vue.svg" className="w-100" alt="" />
            </div>
          </Tooltip>
        </motion.div>
        {/* row three */}
        <motion.div
          className="skillsRow d-flex justify-content-center"
          variants={variants}
        >
          <Tooltip infoText="Tailwind">
            <div className="skillContainer">
              <img
                src="/images/skills/tailwind-css.svg"
                className="w-100"
                alt=""
              />
            </div>
          </Tooltip>
          <Tooltip infoText="Bootstrap">
            <div className="skillContainer">
              <img
                src="/images/skills/bootstrap.svg"
                className="w-100"
                alt=""
              />
            </div>
          </Tooltip>
          <Tooltip infoText="Material UI">
            <div className="skillContainer">
              <img
                src="/images/skills/material-ui.svg"
                className="w-100"
                alt=""
              />
            </div>
          </Tooltip>
          <Tooltip infoText="Figma">
            <div className="skillContainer">
              <img src="/images/skills/figma.svg" className="w-100" alt="" />
            </div>
          </Tooltip>
        </motion.div>
        {/* row four */}
        <motion.div
          className="skillsRow d-flex justify-content-center"
          variants={variants}
        >
          <Tooltip infoText="MongoDB">
            <div className="skillContainer">
              <img src="/images/skills/mongodb.svg" className="w-100" alt="" />
            </div>
          </Tooltip>
          <Tooltip infoText="Git">
            <div className="skillContainer">
              <img src="/images/skills/git.svg" className="w-100" alt="" />
            </div>
          </Tooltip>
          <Tooltip infoText="Jest">
            <div className="skillContainer">
              <img src="/images/skills/jest.svg" className="w-100" alt="" />
            </div>
          </Tooltip>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Skills;
