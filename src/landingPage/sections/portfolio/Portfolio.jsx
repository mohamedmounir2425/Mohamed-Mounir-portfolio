import { useEffect, useRef, useState } from "react";
import PortfolioCaption from "./PortfolioCaption";
import WorkCard from "./WorkCard";
import WorkFilters from "./WorkFilters";
import "./portfolio.scss";
import mixitup from "mixitup";
const works = [
  {
    imgSrc: "images/portfolio/projectsPic/roamify.png",
    title: "Roamify (Travel app)",
    type: "web",
    details: {
      title: "Web Application",
      description:
        "Discover the world's wonders with Roamify, a stunning Angular application developed by our dedicated team. With a focus on user experience and functionality, we've utilized cutting-edge technologies to create a seamless travel booking platform.",
      created: "13 Mar 2024",
      technologies: "Angular",
      role: "frontend & backend",
      view: "https://github.com/mohamedmounir2425/travel-app_Angular",
      live: "https://roamiify.vercel.app",
    },
  },
  {
    imgSrc: "images/portfolio/projectsPic/org2.png",
    title: "Organic Products",
    type: "web",
    details: {
      title: "Web & Mobile Application",
      description:
        "A store selling organic products and healthy foods. The store includes many features, which is that the store sells products that are free of chemicals and carcinogens, which are not available in most places, in addition to healthy meals and a nutritionist to follow the diet and some advice for diseases and information about products.",
      created: "8 Mar 2023",
      technologies: "React js",
      role: "frontend",
      view: "https://github.com/mohamedmounir2425/Organic-Products",
      live: "https://organic-products.vercel.app/",
    },
  },
  {
    imgSrc: "images/portfolio/projectsPic/movie.png",
    title: "Noxe Movie Website",
    type: "web",
    details: {
      title: "Web Application",
      description:
        "A Movie App showing the new films news and tv. The Movie includes many features such as registration, sign in, and protection to all pages.",
      created: "15 Jan 2023",
      technologies: "React js",
      role: "frontend",
      view: "https://github.com/mohamedmounir2425/MovieAppD2",
    },
  },
  {
    imgSrc: "images/portfolio/projectsPic/moviApp.png",
    title: "Movie mob-app",
    type: "mob",
    details: {
      title: "Mobile application",
      description: "This simple mobile app shows the new movies.",
      created: "25 Nov 2023",
      technologies: "React-native",
      role: "frontend",
    },
  },
  {
    imgSrc: "images/portfolio/projectsPic/socialApp.png",
    title: "Social App",
    type: "web",
    details: {
      title: "Web Application",
      description: "This simple website is about social media.",
      created: "21 May 2023",
      technologies: "React js",
      role: "frontend",
      view: "https://github.com/mohamedmounir2425/Social-App",
      live: "https://mohamedmounir2425.github.io/Social-App/",
    },
  },
  {
    imgSrc: "images/portfolio/projectsPic/orgApp.png",
    title: "Organic Products Mob-app",
    type: "mob",
    details: {
      title: "This app is complete",
      description:
        "This is a mobile application for the organic products project to be a cross-platform project.",
      created: "8 Mar 2023",
      technologies: "React-native",
      role: "frontend",
      view: "https://youtu.be/-LwwK4CNPWE",
    },
  },
  {
    imgSrc: "images/portfolio/projectsPic/furniture.png",
    title: "Furniture Project",
    type: "web",
    details: {
      title: "Furniture Website",
      description:
        "A store that sells home furnishings, artifacts and home appliances.",
      created: "18 OCT 2023",
      technologies: "HTML & CSS & JS",
      role: "frontend",
      live: "https://furniture-project-topaz.vercel.app/index.html",
      view: "https://github.com/mohamedmounir2425/Furniture-project",
    },
  },
  {
    imgSrc: "images/portfolio/projectsPic/lanWeb.png",
    title: "Landing Page",
    type: "web",
    details: {
      title: "Landing Page for website",
      description: "Simple application to get things done.",
      created: "5 OCT 2022",
      technologies: "HTML & CSS & Bootstrap",
      role: "frontend",
      live: "https://rwd-theta.vercel.app/",
      view: "https://github.com/mohamedmounir2425/RWD",
    },
  },
  {
    imgSrc: "images/portfolio/projectsPic/todo app.png",
    title: "ToDo App",
    type: "mob",
    details: {
      title: "ToDo Mobile Application",
      description: "Simple application to get things done.",
      created: "7 Dec 2023",
      technologies: "React-native",
      role: "frontend",
      view: "https://user-images.githubusercontent.com/116511682/218287371-1a4cd96b-54ae-4fe9-935c-fc081709ef1b.gif",
    },
  },
];

function Portfolio() {
  const [filter, setFilter] = useState("");
  const [filteredWorks, setFilteredWorks] = useState(works);
  const containerRef = useRef(null);

  useEffect(() => {
    const mixer = mixitup(containerRef.current, {
      selectors: {
        target: ".mix",
      },
      animation: {
        duration: 300,
      },
    });

    // Cleanup function to destroy mixer on component unmount
    return () => {
      mixer.destroy();
    };
  }, []);
  useEffect(() => {
    setFilteredWorks(
      filter === "" ? works : works.filter((work) => work.type === filter)
    );
  }, [filter]);
  useEffect(() => {
    if (window.mixer) {
      window.mixer.dataset(filteredWorks);
    }
  }, [filteredWorks]);
  return (
    <>
      <div className="portfolio my-5">
        <div className="portfolio-brush-image">
          <img src="/images/brushes/portfolio/1.png" alt="" />
        </div>
        <div className="container">
          <PortfolioCaption />
          <WorkFilters setFilter={setFilter} />
          <div ref={containerRef} className="work__container grid">
            {works.map((work, index) => (
              <WorkCard key={index} work={work} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
