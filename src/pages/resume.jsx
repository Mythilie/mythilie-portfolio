import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

function Resume() {
  return (
    <div className="my-resume">
      <a className="resume-tlt">
        <h2 className="resume-title">Resume</h2>
        <a href="/Mythilie_Resume.pdf" download className="dwndIcn">
          <MdOutlineFileDownload />
        </a>
      </a>
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
