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

  const isDark = mode === 'dark';
  const headerBg   = isDark ? '#0d1116' : '#ffffff';
  const textColor  = isDark ? '#ffffff' : '#0d1116';
  const borderClr  = isDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.2)';

  return (
    <div className={`main-container ${isDark ? 'dark-mode' : 'light-mode'}`}>
      <header
        className="projects-page-header"
        style={{ backgroundColor: headerBg, borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)'}` }}
      >
        <button
          className="back-btn"
          onClick={() => navigate('/')}
          style={{ color: textColor, borderColor: borderClr }}
        >
          <ArrowBackIcon fontSize="small" />
          {t('back_home', lang)}
        </button>

        <span className="page-title" style={{ color: textColor }}>
          {t('gallery_title', lang)}
        </span>

        <div className="header-actions">
          {isDark ? (
            <LightModeIcon onClick={modeChange} style={{ cursor: 'pointer', color: textColor }} />
          ) : (
            <DarkModeIcon onClick={modeChange} style={{ cursor: 'pointer', color: textColor }} />
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
