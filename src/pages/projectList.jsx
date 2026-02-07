import React, { useState } from "react";
import Images from "../utils/images";
import { IoMdLink } from "react-icons/io";

const ProjectList = () => {
  const images = [Images.prj1, Images.prj01];
  const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="prjtContainer">
      <div className="leftContainer">
        <p>
          Over past few year, I've worked on various projects. you can see them
          here.
        </p>
      </div>
      <div className="rightContainer">
        <div className="projectCard">
          <h1>Vvimart - E-commerce Web Application</h1>
          <div className="slider">
            <button className="nav left" onClick={prevSlide}>
              ‹
            </button>

            <img
              src={images[current]}
              alt="Project Preview"
              className="slider-image"
            />

            <button className="nav right" onClick={nextSlide}>
              ›
            </button>
          </div>
          <p>
            Vvimart is a responsive e-commerce application developed with
            React.js and Redux, enabling users to browse and purchase home
            essentials, appliances, fruits, and vegetables with smooth cart
            management and an intuitive UI.
          </p>
          <div className="project-link">
            <a
              href="https://www.vivimart.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoMdLink size={16} />
              <span>View Website</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
