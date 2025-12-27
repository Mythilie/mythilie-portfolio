import React from "react";

function Resume() {
  return (
    <div className="my-resume">
      <h2 className="resume-title">Resume</h2>

      <div className="resume-card">
        <p className="resume-text">More details about my career</p>
        <a href="/Mythilie_Resume.pdf" download className="resumeBtn">
          Download
        </a>
      </div>
    </div>
  );
}

export default Resume;
