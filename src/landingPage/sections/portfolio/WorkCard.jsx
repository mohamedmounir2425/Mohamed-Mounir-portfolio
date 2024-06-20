import { useState } from "react";
import "./portfolio.scss";
import PortfolioPopup from "./PortfolioPopup";

const WorkCard = ({ work }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={`work__card mix  ${work.type}`}>
      <img src={work.imgSrc} alt="" className="work__img" />
      <div className="work__card-info" onClick={handleToggleDetails}>
        <h3 className="work__title">{work.title}</h3>
        <span className="work__button">
          Demo
          <i className="bi bi-arrow-right-short pt-1  work__button-icon"></i>
        </span>
      </div>
      {showDetails && (
        <PortfolioPopup
          setShowDetails={setShowDetails}
          showDetails={showDetails}
          work={work}
        />
      )}
    </div>
  );
};

export default WorkCard;
