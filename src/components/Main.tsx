import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/my.jpg';
import { useLang } from '../i18n/LanguageContext';
import { t, TranslationKey } from '../i18n/translations';

const skillKeys: { key: TranslationKey; level: number }[] = [
  { key: 'skill_ux', level: 95 },
  { key: 'skill_fullstack', level: 90 },
  { key: 'skill_react', level: 95 },
  { key: 'skill_mobile', level: 85 },
  { key: 'skill_figma', level: 90 },
  { key: 'skill_python', level: 80 },
];

const statKeys: { value: string; key: TranslationKey }[] = [
  { value: '25', key: 'stat_projects' },
  { value: '15', key: 'stat_apps' },
  { value: '30', key: 'stat_tech' },
  { value: '8', key: 'stat_saas' },
];

function Main() {
  const { lang } = useLang();

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
          <p>{t('main_title', lang)}</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/Abdoolos/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>

      <div className="about-bio">
        <p>{t('main_bio', lang)}</p>
      </div>

      <div className="stats-section">
        {statKeys.map((stat, index) => (
          <div className="stat-item" key={index}>
            <h2>{stat.value}</h2>
            <p>{t(stat.key, lang)}</p>
          </div>
        ))}
      </div>

      <div className="skills-section">
        <h1>{t('skills_title', lang)}</h1>
        <div className="skills-list">
          {skillKeys.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-info">
                <span>{t(skill.key, lang)}</span>
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