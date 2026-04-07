import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faFigma, faPython } from '@fortawesome/free-brands-svg-icons';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { useLang } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

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
    const { lang } = useLang();

    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>{t('expertise_title', lang)}</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faFigma} size="3x"/>
                    <h3>{t('expertise_ux_title', lang)}</h3>
                    <p>{t('expertise_ux_desc', lang)}</p>
                    <div className="flex-chips">
                        <span className="chip-title">{t('tech_stack', lang)}</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>{t('expertise_web_title', lang)}</h3>
                    <p>{t('expertise_web_desc', lang)}</p>
                    <div className="flex-chips">
                        <span className="chip-title">{t('tech_stack', lang)}</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMobileScreen} size="3x"/>
                    <h3>{t('expertise_mobile_title', lang)}</h3>
                    <p>{t('expertise_mobile_desc', lang)}</p>
                    <div className="flex-chips">
                        <span className="chip-title">{t('tech_stack', lang)}</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>{t('expertise_saas_title', lang)}</h3>
                    <p>{t('expertise_saas_desc', lang)}</p>
                    <div className="flex-chips">
                        <span className="chip-title">{t('tech_stack', lang)}</span>
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