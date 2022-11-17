import React from "react";
import Banner from "../components/Banner/Banner";
import "../css/Portfolio.css";

const Portfolio = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="portfolio">
      <Banner src="/images/banner-3.png" alt="banner-home" title="Portfolio" />
      <div className="portfolio-container">
        <img src="/images/img-21.png" alt="img" />
        <img src="/images/img-10.png" alt="img" />
        <img src="/images/img-11.png" alt="img" />
        <img src="/images/img-12.png" alt="img" />
        <img src="/images/img-13.png" alt="img" />
        <img src="/images/img-14.png" alt="img" />
        <img src="/images/img-15.png" alt="img" />
        <img src="/images/img-16.png" alt="img" />
        <img src="/images/img-17.png" alt="img" />
        <img src="/images/img-18.png" alt="img" />
        <img src="/images/img-19.png" alt="img" />
        <img src="/images/img-20.png" alt="img" />
      </div>
    </div>
  );
};

export default Portfolio;
