import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ProjectGallery from '../components/ProjectGallery';
import Footer from '../components/Footer';
import { useLang } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';
import '../assets/styles/ProjectsPage.scss';

interface ProjectsPageProps {
  mode: string;
  modeChange: () => void;
}

function ProjectsPage({ mode, modeChange }: ProjectsPageProps) {
  const navigate = useNavigate();
  const { lang, toggleLang } = useLang();

  return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <header className="projects-page-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          <ArrowBackIcon fontSize="small" />
          {t('back_home', lang)}
        </button>
        <span className="page-title">{t('gallery_title', lang)}</span>
        <div className="header-actions">
          {mode === 'dark' ? (
            <LightModeIcon onClick={modeChange} style={{ cursor: 'pointer' }} />
          ) : (
            <DarkModeIcon onClick={modeChange} style={{ cursor: 'pointer' }} />
          )}
          <button onClick={toggleLang} className="lang-switch-btn">
            {lang === 'no' ? 'EN' : 'NO'}
          </button>
        </div>
      </header>

      <ProjectGallery />
      <Footer />
    </div>
  );
}

export default ProjectsPage;
