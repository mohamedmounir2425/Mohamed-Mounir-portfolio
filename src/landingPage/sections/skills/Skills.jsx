import Tooltip from "../../../components/tooltip/Tooltip";
import "./skills.scss";

function Skills() {
  return (
    <div className="container h-100 d-flex justify-content-center align-items-center py-5 ">
      <div className="rowsContainer d-flex flex-column gap-5 ">
        {/* row one */}
        <div className="skillsRow d-flex justify-content-center">
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
        </div>
        {/* row two */}
        <div className="skillsRow d-flex justify-content-center">
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
        </div>
        {/* row three */}
        <div className="skillsRow d-flex justify-content-center">
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
        </div>
        {/* row four */}
        <div className="skillsRow d-flex justify-content-center">
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
        </div>
      </div>
    </div>
  );
}

export default Skills;
