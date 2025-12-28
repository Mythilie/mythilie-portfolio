import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { IoCall } from "react-icons/io5";

const ContactMe = () => {
  return (
    <div className="contact">
      <div className="contactMe">
        <h2>CONTACT</h2>
      </div>
      <div className="connectMe">
        <h3>Let's Connect</h3>
        <p>
          Passionate about building responsive and user-friendly web
          applications using React. Open to freelance, collaborations, or
          full-time opportunities. Feel free to reach out anytime!
        </p>
      </div>
      <div className="connectMelink">
        <div>
          <a href="tel:+918220307028" target="_blank" className="link">
            <IoCall className="icnclss" /> +91 8220307028
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mythilie6@gmail.com"
            target="_blank"
            className="link"
          >
            <SiGmail className="icnclss" /> mythilie6@gmail.com
          </a>
        </div>
        <div>
          <a
            className="link"
            href="https://github.com/Mythilie"
            target="_blank"
          >
            <FaGithub className="icnclss" /> Mythilie | Github
          </a>
          <a
            className="link"
            href="https://www.linkedin.com/in/mythilie-s-834a14394/"
            target="_blank"
          >
            <FaLinkedin className="icnclss" /> Mythilie | LinkedIn
          </a>
        </div>
        <div>
          <a
            href="https://www.fiverr.com/users/mythilie_v"
            target="_blank"
            className="link"
          >
            <TbBrandFiverr className="icnclss" /> Mythilie | Fiverr
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
