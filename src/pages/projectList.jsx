import React, { useState, useRef } from "react";
import Images from "../utils/images";
import { IoMdLink } from "react-icons/io";

const ProjectList = () => {
  const projects = [
    {
      title: "Vvimart - E-commerce Web Application",
      desc: "Vvimart is a responsive e-commerce application developed with React.js and Redux, enabling users to browse and purchase home essentials, appliances, fruits, and vegetables with smooth cart management and an intuitive UI.",
      images: [Images.prj1, Images.prj01],
      link: "https://www.vivimart.in/",
    },
  ];

  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = (images) => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (images) => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (images) => {
    const swipeDistance = touchStartX.current - touchEndX.current;

    if (swipeDistance > 50) {
      nextSlide(images); // swipe left
    } else if (swipeDistance < -50) {
      prevSlide(images); // swipe right
    }
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
        {projects.map((project, index) => (
          <div className="projectCard" key={index}>
            <h1>{project.title}</h1>

            <div
              className="slider"
              onTouchStart={handleTouchStart}
              onTouchMove={(e) => (touchEndX.current = e.touches[0].clientX)}
              onTouchEnd={() => handleTouchEnd(project.images)}
            >
              <button
                className="nav left"
                onClick={() => prevSlide(project.images)}
              >
                ‹
              </button>

              <img
                src={project.images[current]}
                alt="Project Preview"
                className="slider-image"
              />

              <button
                className="nav right"
                onClick={() => nextSlide(project.images)}
              >
                ›
              </button>
            </div>

            <p>{project.desc}</p>

            <div className="project-link">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <IoMdLink size={16} />
                <span>View Website</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
