import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/ProjectGallery.scss';
import { useLang } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';
import { projects } from '../data/projects';

type FilterCategory = 'all' | 'live' | 'ux' | 'saas' | 'mobile';

function ProjectGallery() {
  const { lang } = useLang();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all');

  const categories: { key: FilterCategory; label: string }[] = [
    { key: 'all', label: t('gallery_all', lang) },
    { key: 'live', label: t('gallery_live', lang) },
    { key: 'ux', label: t('gallery_ux', lang) },
    { key: 'saas', label: t('gallery_saas', lang) },
    { key: 'mobile', label: t('gallery_mobile', lang) },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="gallery-container" id="gallery">
      <div className="gallery-header">
        <h1>{t('gallery_title', lang)}</h1>
        <p>{t('gallery_subtitle', lang)}</p>
      </div>

      <div className="category-filter">
        {categories.map(cat => (
          <button
            key={cat.key}
            className={`filter-btn ${selectedCategory === cat.key ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="gallery-item"
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            <div
              className="gallery-image-wrapper"
              style={{ background: `linear-gradient(135deg, ${project.color} 0%, #0d1116 100%)` }}
            >
              <img src={project.image} alt={project.title} className="gallery-image" />
              <div className="gallery-category-badge">
                {t(`gallery_${project.category}` as any, lang)}
              </div>
            </div>
            <div className="gallery-item-content">
              <h3>{project.title}</h3>
              <p>{t(project.descKey as any, lang)}</p>
              <div className="gallery-item-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="gallery-tag">{t(tag as any, lang)}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectGallery;
