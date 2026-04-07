import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import { useLang } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

function Contact() {
  const { lang } = useLang();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{name?: string; email?: string; message?: string}>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = t('contact_error_name', lang);
    if (!email.trim()) newErrors.email = t('contact_error_email', lang);
    if (!message.trim()) newErrors.message = t('contact_error_message', lang);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.open(`mailto:ah2x2x3x@gmail.com?subject=${subject}&body=${body}`, '_self');
      setSent(true);
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
      setTimeout(() => setSent(false), 4000);
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <div className="corporate-training">
            <h2>{t('corporate_title', lang)}</h2>
            <p>{t('corporate_desc', lang)}</p>
          </div>

          <h1>{t('contact_title', lang)}</h1>
          <p>{t('contact_desc', lang)}</p>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">{t('contact_name_label', lang)}</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder={t('contact_name_placeholder', lang)}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={errors.name ? 'input-error' : ''}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">{t('contact_email_label', lang)}</label>
                <input
                  id="contact-email"
                  type="text"
                  placeholder={t('contact_email_placeholder', lang)}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={errors.email ? 'input-error' : ''}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">{t('contact_message_label', lang)}</label>
              <textarea
                id="contact-message"
                placeholder={t('contact_message_placeholder', lang)}
                rows={8}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={errors.message ? 'input-error' : ''}
              />
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>
            <button type="submit" className="send-btn">
              {t('contact_send', lang)}
            </button>
            {sent && <p className="success-msg">{t('contact_success', lang)}</p>}
          </form>

          <div className="direct-email">
            <h3>{t('contact_direct_title', lang)}</h3>
            <p>{t('contact_direct_desc', lang)}</p>
            <a href="mailto:ah2x2x3x@gmail.com" className="mailto-btn">
              {t('contact_direct_btn', lang)}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;