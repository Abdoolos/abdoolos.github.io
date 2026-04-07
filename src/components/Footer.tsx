import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import { useLang } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

function Footer() {
  const { lang } = useLang();

  return (
    <footer>
      <div>
        <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/Abdoolos/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>{t('footer_text_pre', lang)} <a href="https://github.com/Abdoolos" target="_blank" rel="noreferrer">Abdoolos</a> {t('footer_text_post', lang)}</p>
    </footer>
  );
}

export default Footer;