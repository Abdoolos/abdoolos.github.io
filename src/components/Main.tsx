import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/my.jpg';

const skills = [
  { name: 'UX/UI Design', level: 95 },
  { name: 'Full-Stack Development', level: 90 },
  { name: 'React & Next.js', level: 95 },
  { name: 'Mobile App Design & Dev', level: 85 },
  { name: 'Figma & Prototyping', level: 90 },
  { name: 'Python & Backend', level: 80 },
];

const stats = [
  { value: '25', label: 'Projects Completed' },
  { value: '15', label: 'Apps Designed & Launched' },
  { value: '30', label: 'Technologies Mastered' },
  { value: '8', label: 'SaaS Products Designed & Built' },
];

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/Abdoolos/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Abdoolos</h1>
          <p>UX Designer & Full-Stack Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/Abdoolos/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>

      <div className="about-bio">
        <p>
          UX Designer and Full-Stack Developer specializing in crafting intuitive digital
          experiences for web and mobile applications. Expert in end-to-end product design —
          from user research and wireframing to building production-ready full-stack solutions
          using React, Next.js, and React Native. With over 6 years of experience since 2019,
          I bridge the gap between beautiful design and powerful engineering to deliver
          seamless, user-centered products.
        </p>
      </div>

      <div className="stats-section">
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="skills-section">
        <h1>Skills</h1>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;