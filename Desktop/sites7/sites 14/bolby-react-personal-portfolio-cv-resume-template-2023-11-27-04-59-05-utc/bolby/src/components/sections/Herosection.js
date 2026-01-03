import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

function Herosection(props) {
  const { x, y } = props.position;
  const { height, width } = props.elementDimensions;
  const activeParallax = (depth = 15) => {
    let posX = (width / 2 - x) / depth;
    let posY = (height / 2 - y) / depth;
    return {
      transform: `translate(${posX}px, ${posY}px)`,
    };
  };

  return (
    <section
      id="home"
      className={
        props.light
          ? "home d-flex align-items-center light"
          : "home d-flex align-items-center"
      }
    >
      <div className="container">
        <div className="intro">
          <img src="images/myimage.jpg" alt="Abdullah Alawiss" className="mb-4" style={{borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover'}} />

          <h1 className="mb-2 mt-0">Abdullah Alawiss</h1>
          <p>
            I'm a{" "}
            <Typed
              strings={[
                "Software Developer",
                "Machine Learning Engineer",
                "Full-Stack MERN Developer",
              ]}
              typeSpeed={80}
              backSpeed={40}
              attr="value"
              loop
            >
              <label value></label>
            </Typed>
          </p>

          <ul className="social-icons light list-inline mb-0 mt-4">
            <li className="list-inline-item">
              <a href="https://linkedin.com/in/alawiss90" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/Abdoolos" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="mailto:ah2xx@hotmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="tel:+4799858236">
                <i className="fas fa-phone"></i>
              </a>
            </li>
          </ul>

          <div className="mt-4">
            <Link
              className="btn btn-default"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="scroll-down">
          <Link
            to="section-about"
            spy={true}
            smooth={true}
            duration={500}
            className="mouse-wrapper"
          >
            <span>Scroll Down</span>
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </Link>
        </div>

        <div className="parallax" data-relative-input="true">
          {/* Brain/AI Icon */}
          <svg
            width="40"
            height="40"
            className="layer p1"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(15)}
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
              fill="#6C6CE5"
              fillRule="evenodd"
            />
          </svg>

          {/* Neural Network Node */}
          <svg
            width="30"
            height="30"
            className="layer p2"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(20)}
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="3" fill="#FF4C60" />
            <circle cx="12" cy="4" r="2" fill="#FF4C60" opacity="0.7" />
            <circle cx="12" cy="20" r="2" fill="#FF4C60" opacity="0.7" />
            <circle cx="4" cy="12" r="2" fill="#FF4C60" opacity="0.7" />
            <circle cx="20" cy="12" r="2" fill="#FF4C60" opacity="0.7" />
            <line x1="12" y1="6" x2="12" y2="9" stroke="#FF4C60" strokeWidth="1" />
            <line x1="12" y1="15" x2="12" y2="18" stroke="#FF4C60" strokeWidth="1" />
            <line x1="6" y1="12" x2="9" y2="12" stroke="#FF4C60" strokeWidth="1" />
            <line x1="15" y1="12" x2="18" y2="12" stroke="#FF4C60" strokeWidth="1" />
          </svg>

          {/* Database Icon */}
          <svg
            width="35"
            height="35"
            className="layer p3"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(25)}
            viewBox="0 0 24 24"
          >
            <ellipse cx="12" cy="5" rx="8" ry="3" fill="none" stroke="#44D7B6" strokeWidth="2" />
            <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" fill="none" stroke="#44D7B6" strokeWidth="2" />
            <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" fill="none" stroke="#44D7B6" strokeWidth="2" />
          </svg>

          {/* Code Brackets */}
          <svg
            width="28"
            height="28"
            className="layer p4"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(10)}
            viewBox="0 0 24 24"
          >
            <path
              d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
              fill="#FFD15C"
              fillRule="evenodd"
            />
          </svg>

          {/* Chart/Analytics */}
          <svg
            width="32"
            height="32"
            className="layer p5"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(8)}
            viewBox="0 0 24 24"
          >
            <path
              d="M3 13h2v8H3v-8zm6-6h2v14H9V7zm6 3h2v11h-2V10zm6-7h2v18h-2V3z"
              fill="#6C6CE5"
              fillRule="evenodd"
            />
          </svg>

          {/* CPU/Chip */}
          <svg
            width="36"
            height="36"
            className="layer p6"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(18)}
            viewBox="0 0 24 24"
          >
            <rect x="6" y="6" width="12" height="12" rx="2" fill="none" stroke="#FF4C60" strokeWidth="2" />
            <rect x="9" y="9" width="6" height="6" fill="#FF4C60" opacity="0.5" />
            <line x1="9" y1="4" x2="9" y2="6" stroke="#FF4C60" strokeWidth="2" />
            <line x1="15" y1="4" x2="15" y2="6" stroke="#FF4C60" strokeWidth="2" />
            <line x1="9" y1="18" x2="9" y2="20" stroke="#FF4C60" strokeWidth="2" />
            <line x1="15" y1="18" x2="15" y2="20" stroke="#FF4C60" strokeWidth="2" />
            <line x1="4" y1="9" x2="6" y2="9" stroke="#FF4C60" strokeWidth="2" />
            <line x1="4" y1="15" x2="6" y2="15" stroke="#FF4C60" strokeWidth="2" />
            <line x1="18" y1="9" x2="20" y2="9" stroke="#FF4C60" strokeWidth="2" />
            <line x1="18" y1="15" x2="20" y2="15" stroke="#FF4C60" strokeWidth="2" />
          </svg>

          {/* Cloud */}
          <svg
            width="38"
            height="30"
            className="layer p7"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(22)}
            viewBox="0 0 24 24"
          >
            <path
              d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
              fill="none"
              stroke="#FFD15C"
              strokeWidth="2"
              fillRule="evenodd"
            />
          </svg>

          {/* Binary 01 */}
          <svg
            width="30"
            height="24"
            className="layer p8"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(15)}
            viewBox="0 0 40 24"
          >
            <text x="0" y="18" fill="#6C6CE5" fontSize="16" fontFamily="monospace" fontWeight="bold">01</text>
          </svg>

          {/* Robot/AI Head */}
          <svg
            width="34"
            height="34"
            className="layer p9"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(10)}
            viewBox="0 0 24 24"
          >
            <rect x="4" y="6" width="16" height="14" rx="3" fill="none" stroke="#6C6CE5" strokeWidth="2" />
            <circle cx="9" cy="12" r="2" fill="#6C6CE5" />
            <circle cx="15" cy="12" r="2" fill="#6C6CE5" />
            <line x1="12" y1="3" x2="12" y2="6" stroke="#6C6CE5" strokeWidth="2" />
            <circle cx="12" cy="2" r="1.5" fill="#6C6CE5" />
          </svg>

          {/* Data Flow */}
          <svg
            width="40"
            height="30"
            className="layer p10"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(23)}
            viewBox="0 0 24 24"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              fill="none"
              stroke="#44D7B6"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="8" cy="6" r="2" fill="#44D7B6" />
            <circle cx="16" cy="12" r="2" fill="#44D7B6" />
            <circle cx="12" cy="18" r="2" fill="#44D7B6" />
          </svg>

          {/* Python Logo Style */}
          <svg
            width="32"
            height="32"
            className="layer p11"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(18)}
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
              fill="#FFD15C"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
