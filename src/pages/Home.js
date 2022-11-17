import React from "react";
import Banner from "../components/Banner/Banner";
import Button from "../components/Button/Button";
import Icon from "../components/Icon/Icon";
import "../css/Home.css";

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home">
      <Banner
        src="/images/banner-1.png"
        alt="banner-home"
        title="Marcia Cocco"
        text="Illustrator, storyteller, and artist"
      />
      <div className="home-information">
        <img src="/images/img-1.png" alt="img-information" />
        <div className="home-information-content">
          <h1>Hi, I'm Marcia</h1>
          <p>
            I'm an illustrator and visual storyteller, combining traditional art
            with modern illustrations to create new worlds and perspectives.
            When I'm not drawing, you can usually find me out in nature.
          </p>
          <Button to="/about">Read more</Button>
        </div>
      </div>
      <div className="home-search">
        <div className="home-question">
          <h1>What are you looking for?</h1>
          <p>
            Whether you need illustrations for your project, or look to purchase
            prints of your favorite images, we've got you covered.
          </p>
        </div>
        <div className="home-answers">
          <Icon
            path="portfolio"
            src="/images/img-icon-1.png"
            alt="icon-portfolio"
            text="Portfolio"
          />
          <Icon
            path="store"
            src="/images/img-icon-2.png"
            alt="icon-store"
            text="Store"
          />
          <Icon
            path="faq"
            src="/images/img-icon-3.png"
            alt="icon-faq"
            text="FAQ"
          />
        </div>
      </div>

      <div className="home-work">
        <div className="home-work-title">
          <h1>Some of my work</h1>
          <Button to="/portfolio">See more</Button>
        </div>
        <div className="home-work-content">
          <div className="content-left">
            <img src="/images/img-2.png" alt="img" />
            <img src="/images/img-5.png" alt="img" />
          </div>
          <div className="content-right">
            <img src="/images/img-22.png" alt="img" />
          </div>
        </div>
      </div>

      <div className="home-inspiration">
        <div className="home-question">
          <h1>Looking for inspiration?</h1>
          <p>
            Follow me on Instagram to stay up to date on what I'm currently
            working on.
          </p>
          <Button href="https://www.instagram.com/">@marciacoco</Button>
        </div>
        <div className="home-img">
          <img src="/images/img-4.png" alt="img" />
          <img src="/images/img-5.png" alt="img" />
          <img src="/images/img-6.png" alt="img" />
          <img src="/images/img-7.png" alt="img" />
          <img src="/images/img-8.png" alt="img" />
          <img src="/images/img-9.png" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
