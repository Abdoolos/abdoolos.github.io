import React, {useState, useEffect} from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import { LanguageProvider } from './i18n/LanguageContext';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('light');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={
            <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
              <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
              <FadeIn transitionDuration={700}>
                <Main/>
                <Expertise/>
                <Timeline/>
                <Project/>
                <Contact/>
              </FadeIn>
              <Footer />
            </div>
          } />
          <Route path="/projects" element={
            <ProjectsPage mode={mode} modeChange={handleModeChange} />
          } />
          <Route path="/projects/:id" element={
            <ProjectDetailPage mode={mode} modeChange={handleModeChange} />
          } />
        </Routes>
      </HashRouter>
    </LanguageProvider>
    );
}

export default App;