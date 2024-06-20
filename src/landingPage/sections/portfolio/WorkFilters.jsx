import { useState } from "react";
import "./portfolio.scss";

function WorkFilters({ setFilter }) {
  const [activeLink, setActiveLink] = useState("all");
  const handleFilterChange = (filter) => {
    setActiveLink(filter);
    setFilter(filter);
  };
  return (
    <div className="work__filters">
      <span
        className={`work__item ${activeLink == "all" && "active-work"}`}
        data-filter="all"
        onClick={() => handleFilterChange("all")}
      >
        All
      </span>
      <span
        className={`work__item ${activeLink == "web" && "active-work"}`}
        data-filter=".web"
        onClick={() => handleFilterChange("web")}
      >
        Web
      </span>
      <span
        className={`work__item ${activeLink == "mob" && "active-work"}`}
        data-filter=".mob"
        onClick={() => handleFilterChange("mob")}
      >
        Mob-app
      </span>
    </div>
  );
}

export default WorkFilters;
