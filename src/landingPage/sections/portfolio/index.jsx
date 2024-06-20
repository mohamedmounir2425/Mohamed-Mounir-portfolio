function index() {
  return (
    <div className="portfolio__popup">
      <div className="portfolio__popup-inner">
        <div className="portfolio__popup-content grid">
          <span className="portfolio__popup-close">
            <i className="uil uil-times" />
          </span>
          <div className="pp__thumbnail">
            <img src={work.imgSrc} className="portfolio__popup-img" />
          </div>
          <div className="portfolio__popup-info">
            <div className="portfolio__popup-subtitle">
              Featured - <span>{work.title}</span>
            </div>
            <div className="portfolio__popup-body">
              <h3 className="details__title">{work.details.title}</h3>
              <p className="details__description">{work.details.description}</p>
              <ul className="details__info">
                <li>
                  Created - <span>{work.details.created}</span>
                </li>
                <li>
                  Technologies - <span>{work.details.title}</span>
                </li>
                <li>
                  Role - <span>{work.details.title}</span>
                </li>
                {work.details.view && (
                  <li>
                    View -
                    <span>
                      <a href={work.details.view} target="_blank">
                        Github
                      </a>
                    </span>
                  </li>
                )}
                {work.details.live && (
                  <li>
                    Live -
                    <span>
                      <a href={work.details.live} target="_blank">
                        {work.title}
                      </a>
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
