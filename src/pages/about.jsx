import React from "react";
import "./content.css";
import Images from "../utils/images";

function About() {
  return (
    <div className="about">
      <div className="image-wrapper">
        <img src={Images.profile} className="profilepic" />
      </div>

      <div className="about-content">
        <h3>About Me</h3>
        <p style={{ lineHeight: "25px" }}>
          I'm a Front End Developer with 3+ yearsof experience in building
          scalable and responsive applications using React.js, Redux,
          JavaScript, and TypeScript. Skilled in modern UI frameworks like
          Tailwind CSS and Bootstrap, with experience in React Native for mobile
          apps. I enjoy crafting clean interfaces and smooth user experiences.
        </p>
      </div>
    </div>
  );
}

export default About;
