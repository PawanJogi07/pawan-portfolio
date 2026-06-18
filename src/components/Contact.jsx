
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaFilePdf
} from "react-icons/fa";

import { SiGeeksforgeeks } from "react-icons/si";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">

      <h2 className="section-title">
        CONTACT ME
      </h2>

      <p className="contact-subtitle">
        Let's build something amazing together 🚀
      </p>

      <div className="contact-grid">

        <a
          href="https://github.com/PawanJogi07"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaGithub className="contact-icon" />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/pawan-jogi-716992338/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaLinkedin className="contact-icon" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://practice.geeksforgeeks.org/leaderboard"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <SiGeeksforgeeks className="contact-icon" />
          <span>GeeksforGeeks</span>
        </a>

        <a
          href="mailto:pjpawan007@gmail.com"
          className="contact-card"
        >
          <FaEnvelope className="contact-icon" />
          <span>Email</span>
        </a>

        <a
          href="https://instagram.com/ig_pawanjogi"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaInstagram className="contact-icon" />
          <span>Instagram</span>
        </a>

        <a
          href="tel:+918602139281"
          className="contact-card"
        >
          <FaPhone className="contact-icon" />
          <span>Call Me</span>
        </a>

        <a
          href="https://drive.google.com/file/d/1zrrPC0PpiQbqmc3kdmmT0EDgjDwywdoP/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaFilePdf className="contact-icon" />
          <span>Resume</span>
        </a>

      </div>

    </section>
  );
}

