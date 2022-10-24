import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import bannerimg from "../styles/assets/bannerabout.png";

const About = () => {
  return (
    <div>
      <Header />
      <Banner src={bannerimg} alt={"bannière montagnes enneigé"} text={""} />
      <h1>A propos</h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, rem
        voluptatibus, deleniti consequatur culpa quod libero vel accusamus
        nostrum obcaecati aspernatur non, magnam rerum quos facere harum enim
        provident quia.
      </p>
    </div>
  );
};

export default About;
