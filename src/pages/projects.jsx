import React from "react";
import { PiHandTapLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  return (
    <div className="prj-content">
      <h2>My Projects</h2>
      <div className="my-project" onClick={() => navigate("/projects")}>
        <div className="bg-layer"></div>
        <div className="prjContent">
          <div className="prjTag">
            <span>React Js</span>
          </div>
          <h2>Movie Watchlist</h2>
          <p>
            Watchlist is a responsive, OTT-inspired application focused on
            browsing movie and show listings and managing a personalized
            watchlist.
          </p>
          <div className="tapIcn">
            <PiHandTapLight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
