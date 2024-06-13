import { useEffect, useRef } from "react";
import "./preloader.scss";

const Preloader = ({ theme }) => {
  const preloaderRef = useRef(null);

  useEffect(() => {
    const preloader = preloaderRef.current;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent
    );

    if (!isMobile) {
      setTimeout(() => {
        preloader.classList.add("preloaded");
      }, 800);
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    } else {
      preloader.remove();
    }
  }, []);

  return (
    <div
      id="preloader"
      ref={preloaderRef}
      className={theme === "dark" ? "dark" : ""}
    >
      <div className="loader_line"></div>
    </div>
  );
};

export default Preloader;
