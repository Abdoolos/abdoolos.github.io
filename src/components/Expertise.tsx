import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faFigma, faPython } from '@fortawesome/free-brands-svg-icons';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Figma",
    "Wireframing",
    "Prototyping",
    "User Research",
    "Usability Testing",
    "Design Systems",
    "UI/UX",
];

const labelsSecond = [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "REST APIs",
    "SSR",
    "HTML5",
    "CSS3",
    "SASS",
];

const labelsThird = [
    "React Native",
    "iOS",
    "Android",
    "Cross-Platform",
    "Mobile UX",
    "Interactive Prototypes",
];

const labelsFourth = [
    "Vercel",
    "Supabase",
    "Stripe",
    "Authentication",
    "Analytics",
    "Cloud Deployment",
    "Python",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faFigma} size="3x"/>
                    <h3>UX/UI Design</h3>
                    <p>Designing user-centered interfaces through research, wireframing, prototyping, and usability testing. Turning complex problems into simple, elegant experiences using Figma and modern design systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full-Stack Web Development</h3>
                    <p>Building scalable web applications with React, Next.js, Node.js, and MongoDB. Expert in SSR, REST APIs, and pixel-perfect implementation of UI designs.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMobileScreen} size="3x"/>
                    <h3>Mobile App Design & Development</h3>
                    <p>Crafting cross-platform mobile experiences with React Native — from UX flows and interactive prototypes to full production builds on iOS and Android.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>SaaS Product Development</h3>
                    <p>End-to-end SaaS platforms combining thoughtful UX design with robust engineering — authentication, payments, analytics, and cloud deployment on Vercel and Supabase.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFourth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;