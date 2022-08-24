import React from "react";
import Banner from "../components/Banner/Banner";
import Button from "../components/Button/Button";
import Icon from "../components/Icon/Icon";
import "../css/About.css";

const About = () => {
  return (
    <div className="about">
      <Banner src="/images/banner-2.png" alt="banner-about" title="About" />

      <div className="about-information">
        <img src="/images/img-art.png" alt="img-information" />
        <div className="about-information-content">
          <h1>Hi, I'm Marcia</h1>
          <p>
            Welcome to my studio in the woods! Here I work with many ideas and
            little Wi-Fi. I am an illustrator, designer, mom and wife. A city
            girl who moved to the country. Since I was little I knew I wanted to
            dedicate myself to something creative. I found my ideal profession
            in design, as it allows me to combine it with my other passion,
            which is illustration.
          </p>
          <p>
            I am lucky to work from home, while enjoying my family. I am
            inspired by the beauty that surrounds me and the fairy tales that I
            write in my mind since I was a child. My work reflects my childhood
            of cartoons and my daughter's exploring nature. My favorite
            techniques are watercolors, colored pencils, and of course digital
            art on the iPad.
          </p>
        </div>
      </div>

      <div className="about-partners">
        <div className="partners-content">
          <h1>Partners</h1>
          <p>
            I've worked with many organizations in the past on various projects.
            My current partners include Zyro, Pantone, SkillShare and Domestika.{" "}
          </p>
        </div>
        <div className="partners-logo">
          <img src="/images/logo-1.png" alt="logo" />
          <img src="/images/logo-2.png" alt="logo" />
          <img src="/images/logo-3.png" alt="logo" />
          <img src="/images/logo-4.png" alt="logo" />
        </div>
      </div>

      <div className="about-watching">
        <iframe
          width="942"
          height="530"
          src="https://www.youtube.com/embed/hIpCzcKafHY"
          title="Cómo diseñé mi Marca Personal"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="about-yt">
          <h1> My Youtube channel</h1>
          <p>
            Join me in the exploration of my creativity! On my way I will share
            the things I have learned as I have beent trying to grow my career
            as an illustrator.
          </p>
          <Button href="https://www.youtube.com/marciacocco">
            Watch my videos
          </Button>
        </div>
      </div>

      <div className="about-search">
        <div className="about-question">
          <h1>What are you looking for?</h1>
          <p>
            Whether you need illustrations for your project, or look to purchase
            prints of your favorite images, we've got you covered.
          </p>
        </div>
        <div className="about-answers">
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
    </div>
  );
};

export default About;
