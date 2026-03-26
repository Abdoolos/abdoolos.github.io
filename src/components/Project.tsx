import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import BrowserMockup from './BrowserMockup';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            {/* Live Projects with Browser Mockups */}
            <div className="project project-live">
                <BrowserMockup url="https://www.millenium-transport.com" title="Millennium Transport" />
                <a href="https://www.millenium-transport.com" target="_blank" rel="noreferrer"><h2>Millennium Transport</h2></a>
                <div className="project-tags">
                    <span className="tag">Web Design</span>
                    <span className="tag">Full-Stack</span>
                </div>
                <p>A professional transport and logistics company website with a modern UI, service showcase, and booking flow.</p>
                <a href="https://www.millenium-transport.com" target="_blank" rel="noreferrer" className="visit-btn">Visit Site →</a>
            </div>
            <div className="project project-live">
                <BrowserMockup url="https://nordiq.vercel.app" title="Nordiq App" />
                <a href="https://nordiq.vercel.app" target="_blank" rel="noreferrer"><h2>Nordiq App</h2></a>
                <div className="project-tags">
                    <span className="tag">UX Design</span>
                    <span className="tag">Web App</span>
                </div>
                <p>A clean and minimal Nordic-inspired web application with smooth interactions and modern design system.</p>
                <a href="https://nordiq.vercel.app" target="_blank" rel="noreferrer" className="visit-btn">Visit Site →</a>
            </div>
            <div className="project project-live">
                <BrowserMockup url="https://oppusing.vercel.app" title="Oppusing Platform" />
                <a href="https://oppusing.vercel.app" target="_blank" rel="noreferrer"><h2>Oppusing Platform</h2></a>
                <div className="project-tags">
                    <span className="tag">SaaS</span>
                    <span className="tag">UX Design</span>
                </div>
                <p>A modern SaaS platform with a polished user interface, designed for seamless user experience across all devices.</p>
                <a href="https://oppusing.vercel.app" target="_blank" rel="noreferrer" className="visit-btn">Visit Site →</a>
            </div>

            {/* Existing Projects */}
            <div className="project">
                <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer"><h2>Cybersecurity Analysis Platform</h2></a>
                <p>UX Design — A comprehensive cybersecurity analysis platform with intuitive dashboards, threat visualization, and real-time monitoring interfaces.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer"><h2>Call Center Analytics System</h2></a>
                <p>UX Design — An analytics system for call centers with data-driven insights, performance tracking, and agent management interfaces.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer"><h2>NAV AI Assistant App</h2></a>
                <p>Mobile App — An AI-powered assistant mobile application built with React Native, featuring natural language processing and smart task management.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer"><h2>AI-Powered SaaS Platforms</h2></a>
                <p>SaaS — End-to-end SaaS platforms with AI integration, authentication, payments, and cloud deployment on Vercel and Supabase.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer"><h2>InnoMind AI Platform</h2></a>
                <p>SaaS — An innovative AI platform combining machine learning capabilities with a clean, user-friendly interface for creative problem solving.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer"><h2>Emotion Detection App UI/UX</h2></a>
                <p>UX Design — A mobile app design for real-time emotion detection using facial recognition, with accessible and intuitive user flows.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;