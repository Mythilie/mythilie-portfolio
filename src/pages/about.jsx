import React from "react";
import './content.css';
import Profile from '../assets/images/profile.png'

function About() {
    return (
        <div className="about">
            <div className="image-wrapper">
                <img src={Profile} className="profilepic" />
            </div>

            <div className="about-content">
                <h3>About Me</h3>
                <p>I'm a Front End Developer with 3+ years</p>
            </div>
        </div>

    )
}

export default About;