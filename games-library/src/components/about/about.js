import './about.css';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function About() {
  return (
    <div className="about-container">
      <div className="Head">
        Contact Us
      </div>
      
      <div className="MeetTheTeam">
        <div className="SubHead">
          Meet the team
        </div>
        
        <p>
          Marin Dushku and Nevin Guni are both 22-year-old software engineers who share a passion for playing video games. Inspired by their gaming hobby and platforms like Steam, they're collaborating to create their own website that reflects their love for gaming culture. The two developers are self-writing all the code for their project, combining their programming skills to build a platform that celebrates their shared interest in video games.
        </p>

        <div className="developers">
          <div className="developer">
            <h3>Marin Dushku</h3>
            <div className="social-links">
              <a href="https://github.com/MarinDushku" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
                GitHub
              </a>
              <a href="https://linkedin.com/in/marindushku" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
                LinkedIn
              </a>
              <a href="hhttps://www.instagram.com/marin__d/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
                Instagram
              </a>
              <a href="mailto:dushkumarini@gmail.com" rel="noopener">
                <FaEnvelope className="social-icon" />
                Email
              </a>
            </div>
          </div>

          <div className="developer">
            <h3>Nevin Guni</h3>
            <div className="social-links">
              <a href="https://github.com/NevinGuni" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/nevin-guni-077969329/?originalSubdomain=al" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
                LinkedIn
              </a>
              <a href="https://www.instagram.com/nevin.guni/#" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
                Instagram
              </a>
              <a href="mailto:nevinguni@yahoo.com" rel="noopener">
                <FaEnvelope className="social-icon" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}