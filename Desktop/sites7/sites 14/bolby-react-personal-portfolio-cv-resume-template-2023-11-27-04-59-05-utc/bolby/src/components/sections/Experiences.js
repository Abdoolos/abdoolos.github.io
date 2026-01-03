import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Machine Learning & Deep Learning",
    years: "Udemy & Coursera",
    content:
      "Comprehensive courses in ML algorithms, neural networks, and AI model development.",
  },
  {
    id: 2,
    title: "Full-Stack Development",
    years: "Professional Programs",
    content:
      "MERN stack, Next.js, React Native, and modern web development practices.",
  },
  {
    id: 3,
    title: "Google UX Design",
    years: "Google Certificate",
    content:
      "User experience design principles, prototyping, and user research methodologies.",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Software Developer",
    years: "Present",
    content:
      "Building AI-powered SaaS platforms, RAG systems, and full-stack applications with modern technologies.",
  },
  {
    id: 2,
    title: "Data Analyst - Airbnb",
    years: "Sweden",
    content:
      "Analyzed large-scale datasets for strategic decision-making and delivered actionable insights to teams.",
  },
  {
    id: 3,
    title: "Content Creator",
    years: "YouTube & TikTok",
    content:
      "Creating tech tutorials, AI education content, and open-source contributions.",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
