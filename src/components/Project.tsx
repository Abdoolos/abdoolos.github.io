import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mi1 from '../assets/images/mi1.png';
import mi2 from '../assets/images/mi2.png';
import no1 from '../assets/images/no1.png';
import op1 from '../assets/images/op1.png';
import op2 from '../assets/images/op2.png';
import skj1 from '../assets/images/skj1.png';
import skj2 from '../assets/images/skj2.png';
import DeviceMockup from './DeviceMockup';
import '../assets/styles/Project.scss';
import { useLang } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

function Project() {
    const { lang } = useLang();

    return(
    <div className="projects-container" id="projects">
        <h1>{t('projects_title', lang)}</h1>
        <div className="projects-grid">
            {/* Live Projects with Browser Mockups */}
            <div className="project project-live">
                <DeviceMockup url="https://www.millenium-transport.com" title="Millennium Transport" desktopImg={mi1} mobileImg={mi2} />
                <a href="https://www.millenium-transport.com" target="_blank" rel="noreferrer"><h2>Millennium Transport</h2></a>
                <div className="project-tags">
                    <span className="tag">{t('tag_web_design', lang)}</span>
                    <span className="tag">{t('tag_fullstack', lang)}</span>
                </div>
                <p>{t('project_millennium_desc', lang)}</p>
                <a href="https://www.millenium-transport.com" target="_blank" rel="noreferrer" className="visit-btn">{t('visit_site', lang)}</a>
            </div>
            <div className="project project-live">
                <DeviceMockup url="https://nordiq.vercel.app" title="Nordiq App" desktopImg={no1} />
                <a href="https://nordiq.vercel.app" target="_blank" rel="noreferrer"><h2>Nordiq App</h2></a>
                <div className="project-tags">
                    <span className="tag">{t('tag_ux_design', lang)}</span>
                    <span className="tag">{t('tag_web_app', lang)}</span>
                </div>
                <p>{t('project_nordiq_desc', lang)}</p>
                <a href="https://nordiq.vercel.app" target="_blank" rel="noreferrer" className="visit-btn">{t('visit_site', lang)}</a>
            </div>
            <div className="project project-live">
                <DeviceMockup url="https://oppusing.vercel.app" title="Oppusing Platform" desktopImg={op2} mobileImg={op1} />
                <a href="https://oppusing.vercel.app" target="_blank" rel="noreferrer"><h2>Oppusing Platform</h2></a>
                <div className="project-tags">
                    <span className="tag">{t('tag_saas', lang)}</span>
                    <span className="tag">{t('tag_ux_design', lang)}</span>
                </div>
                <p>{t('project_oppusing_desc', lang)}</p>
                <a href="https://oppusing.vercel.app" target="_blank" rel="noreferrer" className="visit-btn">{t('visit_site', lang)}</a>
            </div>

            <div className="project project-live">
                <DeviceMockup url="https://dinskj.vercel.app/" title="Din Skjønnhet" desktopImg={skj1} mobileImg={skj2} />
                <a href="https://dinskj.vercel.app/" target="_blank" rel="noreferrer"><h2>Din Skjønnhet</h2></a>
                <div className="project-tags">
                    <span className="tag">{t('tag_web_design', lang)}</span>
                    <span className="tag">{t('tag_beauty', lang)}</span>
                </div>
                <p>{t('project_dinskj_desc', lang)}</p>
                <a href="https://dinskj.vercel.app/" target="_blank" rel="noreferrer" className="visit-btn">{t('visit_site', lang)}</a>
            </div>

            {/* Existing Projects */}
            <div className="project">
                <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer"><h2>Cybersecurity Analysis Platform</h2></a>
                <p>{t('project_cyber_desc', lang)}</p>
            </div>
            <div className="project">
                <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer"><h2>Call Center Analytics System</h2></a>
                <p>{t('project_callcenter_desc', lang)}</p>
            </div>
            <div className="project">
                <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer"><h2>NAV AI Assistant App</h2></a>
                <p>{t('project_nav_desc', lang)}</p>
            </div>
            <div className="project">
                <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer"><h2>AI-Powered SaaS Platforms</h2></a>
                <p>{t('project_saas_desc', lang)}</p>
            </div>
            <div className="project">
                <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer"><h2>InnoMind AI Platform</h2></a>
                <p>{t('project_innomind_desc', lang)}</p>
            </div>
            <div className="project">
                <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer"><h2>Emotion Detection App UI/UX</h2></a>
                <p>{t('project_emotion_desc', lang)}</p>
            </div>
        </div>
    </div>
    );
}

export default Project;