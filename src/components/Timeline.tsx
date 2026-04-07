import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import { useLang } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

function Timeline() {
  const { lang } = useLang();

  return (
    <div id="history">
      <div className="items-container">
        <h1>{t('timeline_title', lang)}</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date={t('timeline_job1_date', lang)}
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">{t('timeline_job1_title', lang)}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t('timeline_job1_sub', lang)}</h4>
            <p>{t('timeline_job1_desc', lang)}</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={t('timeline_job2_date', lang)}
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">{t('timeline_job2_title', lang)}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t('timeline_job2_sub', lang)}</h4>
            <p>{t('timeline_job2_desc', lang)}</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={t('timeline_job3_date', lang)}
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">{t('timeline_job3_title', lang)}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t('timeline_job3_sub', lang)}</h4>
            <p>{t('timeline_job3_desc', lang)}</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date={t('timeline_cert1_date', lang)}
            iconStyle={{ background: '#f9c74f', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">{t('timeline_cert1_title', lang)}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t('timeline_cert1_sub', lang)}</h4>
            <p>{t('timeline_cert1_desc', lang)}</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date={t('timeline_cert2_date', lang)}
            iconStyle={{ background: '#f9c74f', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">{t('timeline_cert2_title', lang)}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t('timeline_cert2_sub', lang)}</h4>
            <p>{t('timeline_cert2_desc', lang)}</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;