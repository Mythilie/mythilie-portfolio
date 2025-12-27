import { SiGmail } from "react-icons/si";
import { IoCall } from "react-icons/io5";

function ContactMe() {
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
      <div className="connectMe">
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
    </div>
  );
}

export default ContactMe;
