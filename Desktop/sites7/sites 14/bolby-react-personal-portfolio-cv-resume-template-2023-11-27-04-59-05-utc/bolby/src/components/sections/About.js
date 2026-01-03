import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Abdullah Alawiss",
  avatarImage: "/images/myimage.jpg",
  content:
    "Software Developer specializing in Machine Learning integration and Full-Stack MERN applications. Expert in building production-ready AI-powered SaaS platforms, cybersecurity tools, and intelligent mobile applications. Strong track record developing RAG systems, automation tools, and scalable web solutions combining Next.js, React Native, and modern AI frameworks.",
};

const progressData = [
  {
    id: 1,
    title: "Full-Stack Development",
    percantage: 95,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "Machine Learning & AI",
    percantage: 90,
    progressColor: "#FF4C60",
  },
  {
    id: 3,
    title: "React & Next.js",
    percantage: 95,
    progressColor: "#6C6CE5",
  },
  {
    id: 4,
    title: "Python & Backend",
    percantage: 85,
    progressColor: "#44D7B6",
  },
];

const counterData = [
  {
    id: 1,
    title: "Projects Completed",
    count: 25,
    icon: "icon-fire",
  },
  {
    id: 2,
    title: "AI Models Deployed",
    count: 15,
    icon: "icon-rocket",
  },
  {
    id: 3,
    title: "Technologies Mastered",
    count: 30,
    icon: "icon-layers",
  },
  {
    id: 4,
    title: "SaaS Platforms Built",
    count: 8,
    icon: "icon-badge",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a href="!#" className="btn btn-default">
                      Download CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
