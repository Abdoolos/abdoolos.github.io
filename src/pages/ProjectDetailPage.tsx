import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LaunchIcon from '@mui/icons-material/Launch';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import DeviceMockup from '../components/DeviceMockup';
import Footer from '../components/Footer';
import { useLang } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';
import { projects } from '../data/projects';
import '../assets/styles/ProjectDetailPage.scss';

interface Props {
  mode: string;
  modeChange: () => void;
}

function ProjectDetailPage({ mode, modeChange }: Props) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { lang, toggleLang } = useLang();

  const project = projects.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!project) {
    return (
      <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <div className="detail-not-found">
          <h2>Project not found</h2>
          <button onClick={() => navigate('/projects')}>← Back</button>
        </div>
      </div>
    );
  }

  const isLive = project.category === 'live';

  return (
    <div className={`main-container detail-page ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>

      {/* ── Header ── */}
      <header className="detail-header">
        <button className="back-btn" onClick={() => navigate('/projects')}>
          <ArrowBackIcon fontSize="small" />
          {t('back_home', lang)}
        </button>
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

      {/* ── Hero ── */}
      <section
        className="detail-hero"
        style={{ background: `linear-gradient(135deg, ${project.color} 0%, #0d1116 100%)` }}
      >
        <div className="hero-content">
          <div className="hero-tags">
            {project.tags.map(tag => (
              <span key={tag} className="hero-tag">{t(tag as any, lang)}</span>
            ))}
          </div>
          <h1 className="hero-title">{project.title}</h1>
          <p className="hero-desc">{t(project.descKey as any, lang)}</p>
          {isLive && (
            <a href={project.url} target="_blank" rel="noreferrer" className="hero-cta">
              <LaunchIcon fontSize="small" />
              {t('visit_site', lang)}
            </a>
          )}
        </div>
        <div className="hero-image-side">
          <img src={project.image} alt={project.title} className="hero-img" />
        </div>
      </section>

      {/* ── Device Preview (live only) ── */}
      {isLive && (
        <section className="detail-preview-section">
          <h2 className="section-label">{t('detail_preview', lang)}</h2>
          <DeviceMockup
            url={project.url}
            title={project.title}
            desktopImg={project.image}
            mobileImg={project.mobileImage}
          />
        </section>
      )}

      {/* ── Full screenshot (non-live) ── */}
      {!isLive && (
        <section className="detail-screenshot-section">
          <h2 className="section-label">{t('detail_design', lang)}</h2>
          <div className="screenshot-frame">
            <img src={project.image} alt={project.title} />
          </div>
        </section>
      )}

      {/* ── Info Cards ── */}
      <section className="detail-info">
        <div className="info-card">
          <span className="info-label">{t('detail_category', lang)}</span>
          <span className="info-value">{t(`gallery_${project.category}` as any, lang)}</span>
        </div>
        <div className="info-card">
          <span className="info-label">{t('detail_type', lang)}</span>
          <span className="info-value">{project.tags.map(tag => t(tag as any, lang)).join(' · ')}</span>
        </div>
        {isLive && (
          <div className="info-card clickable" onClick={() => window.open(project.url, '_blank')}>
            <span className="info-label">{t('detail_link', lang)}</span>
            <span className="info-value link-val">
              {project.url.replace('https://', '')} <LaunchIcon fontSize="inherit" />
            </span>
          </div>
        )}
      </section>

      {/* ── CTA Banner ── */}
      <section className="detail-cta-banner">
        <div className="cta-inner">
          <h2>{t('detail_cta_title', lang)}</h2>
          <p>{t('detail_cta_desc', lang)}</p>
          <div className="cta-buttons">
            {isLive && (
              <a href={project.url} target="_blank" rel="noreferrer" className="cta-primary">
                <LaunchIcon fontSize="small" /> {t('visit_site', lang)}
              </a>
            )}
            <button className="cta-secondary" onClick={() => navigate('/projects')}>
              {t('gallery_all', lang)} {t('gallery_title', lang)}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ProjectDetailPage;
