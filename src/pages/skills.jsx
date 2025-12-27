import React from "react";
import Images from "../utils/images";

function Skills() {
  const skills = [
    { name: "React JS", img: Images.react },
    { name: "Redux", img: Images.redux },
    { name: "JavaScript", img: Images.js },
    { name: "TypeScript", img: Images.ts },
    { name: "React Native", img: Images.react },
    { name: "Rest API", img: Images.restapi },
    { name: "HTML", img: Images.html },
    { name: "CSS", img: Images.css },
    { name: "Bootstrap", img: Images.bootstrap },
    { name: "Tailwind CSS", img: Images.tailwind },
    { name: "Responsive", img: Images.responsive },
  ];

  return (
    <div className="skill-content">
      <h2>Skills</h2>

      <div className="skillWrap">
        {skills.map((skill, index) => (
          <div key={index} className="skillSet">
            <img src={skill.img} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
