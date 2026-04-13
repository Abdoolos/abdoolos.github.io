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

export type ProjectCategory = 'live' | 'ux' | 'saas' | 'mobile';

export interface Project {
  id: number;
  title: string;
  url: string;
  category: ProjectCategory;
  image: string;
  mobileImage?: string;
  tags: string[];
  descKey: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Millennium Transport',
    url: 'https://www.millenium-transport.com',
    category: 'live',
    image: mi1,
    mobileImage: mi2,
    tags: ['tag_web_design', 'tag_fullstack'],
    descKey: 'project_millennium_desc',
    color: '#1a1a2e',
  },
  {
    id: 2,
    title: 'Nordiq App',
    url: 'https://nordiq.vercel.app',
    category: 'live',
    image: no1,
    tags: ['tag_ux_design', 'tag_web_app'],
    descKey: 'project_nordiq_desc',
    color: '#0f3460',
  },
  {
    id: 3,
    title: 'Oppusing Platform',
    url: 'https://oppusing.vercel.app',
    category: 'saas',
    image: op2,
    mobileImage: op1,
    tags: ['tag_saas', 'tag_ux_design'],
    descKey: 'project_oppusing_desc',
    color: '#16213e',
  },
  {
    id: 4,
    title: 'Din Skjønnhet',
    url: 'https://dinskj.vercel.app/',
    category: 'live',
    image: skj1,
    mobileImage: skj2,
    tags: ['tag_web_design', 'tag_beauty'],
    descKey: 'project_dinskj_desc',
    color: '#2d1b69',
  },
  {
    id: 5,
    title: 'Cybersecurity Analysis Platform',
    url: 'https://github.com/Abdoolos',
    category: 'ux',
    image: mock06,
    tags: ['tag_ux_design'],
    descKey: 'project_cyber_desc',
    color: '#0d2137',
  },
  {
    id: 6,
    title: 'Call Center Analytics System',
    url: 'https://github.com/Abdoolos',
    category: 'ux',
    image: mock05,
    tags: ['tag_ux_design'],
    descKey: 'project_callcenter_desc',
    color: '#1b2838',
  },
  {
    id: 7,
    title: 'NAV AI Assistant App',
    url: 'https://github.com/Abdoolos',
    category: 'mobile',
    image: mock04,
    tags: ['gallery_mobile'],
    descKey: 'project_nav_desc',
    color: '#1a0533',
  },
  {
    id: 8,
    title: 'AI-Powered SaaS Platforms',
    url: 'https://github.com/Abdoolos',
    category: 'saas',
    image: mock03,
    tags: ['tag_saas'],
    descKey: 'project_saas_desc',
    color: '#0a1628',
  },
  {
    id: 9,
    title: 'InnoMind AI Platform',
    url: 'https://github.com/Abdoolos',
    category: 'saas',
    image: mock02,
    tags: ['tag_saas'],
    descKey: 'project_innomind_desc',
    color: '#150050',
  },
  {
    id: 10,
    title: 'Emotion Detection App UI/UX',
    url: 'https://github.com/Abdoolos',
    category: 'mobile',
    image: mock01,
    tags: ['gallery_mobile', 'tag_ux_design'],
    descKey: 'project_emotion_desc',
    color: '#1c1b2e',
  },
];
