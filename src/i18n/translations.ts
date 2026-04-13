export type Language = 'no' | 'en';

const translations = {
  // ─── Navigation ───
  nav_expertise: { no: 'Kompetanse', en: 'Expertise' },
  nav_history: { no: 'Erfaring', en: 'History' },
  nav_projects: { no: 'Prosjekter', en: 'Projects' },
  nav_contact: { no: 'Kontakt', en: 'Contact' },
  nav_menu: { no: 'Meny', en: 'Menu' },

  // ─── Main ───
  main_title: { no: 'UX Designer & Full-Stack Utvikler', en: 'UX Designer & Full-Stack Developer' },
  main_bio: {
    no: 'UX-designer og fullstack-utvikler som spesialiserer seg på å skape intuitive digitale opplevelser for web- og mobilapplikasjoner. Ekspert på ende-til-ende produktdesign — fra brukerundersøkelser og wireframing til å bygge produksjonsklare fullstack-løsninger med React, Next.js og React Native. Med over 6 års erfaring siden 2019 bygger jeg broen mellom vakker design og kraftig teknologi for å levere sømløse, brukersentrerte produkter.',
    en: 'UX Designer and Full-Stack Developer specializing in crafting intuitive digital experiences for web and mobile applications. Expert in end-to-end product design — from user research and wireframing to building production-ready full-stack solutions using React, Next.js, and React Native. With over 6 years of experience since 2019, I bridge the gap between beautiful design and powerful engineering to deliver seamless, user-centered products.',
  },
  skills_title: { no: 'Ferdigheter', en: 'Skills' },
  skill_ux: { no: 'UX/UI Design', en: 'UX/UI Design' },
  skill_fullstack: { no: 'Fullstack-utvikling', en: 'Full-Stack Development' },
  skill_react: { no: 'React & Next.js', en: 'React & Next.js' },
  skill_mobile: { no: 'Mobilapp Design & Utv.', en: 'Mobile App Design & Dev' },
  skill_figma: { no: 'Figma & Prototyping', en: 'Figma & Prototyping' },
  skill_python: { no: 'Python & Backend', en: 'Python & Backend' },
  stat_projects: { no: 'Fullførte prosjekter', en: 'Projects Completed' },
  stat_apps: { no: 'Apper designet & lansert', en: 'Apps Designed & Launched' },
  stat_tech: { no: 'Teknologier mestret', en: 'Technologies Mastered' },
  stat_saas: { no: 'SaaS-produkter designet & bygget', en: 'SaaS Products Designed & Built' },

  // ─── Expertise ───
  expertise_title: { no: 'Kompetanse', en: 'Expertise' },
  expertise_ux_title: { no: 'UX/UI Design', en: 'UX/UI Design' },
  expertise_ux_desc: {
    no: 'Designer brukersentrerte grensesnitt gjennom forskning, wireframing, prototyping og brukertesting. Gjør komplekse problemer til enkle, elegante opplevelser med Figma og moderne designsystemer.',
    en: 'Designing user-centered interfaces through research, wireframing, prototyping, and usability testing. Turning complex problems into simple, elegant experiences using Figma and modern design systems.',
  },
  expertise_web_title: { no: 'Fullstack Webutvikling', en: 'Full-Stack Web Development' },
  expertise_web_desc: {
    no: 'Bygger skalerbare webapplikasjoner med React, Next.js, Node.js og MongoDB. Ekspert på SSR, REST API-er og piksel-perfekt implementering av UI-design.',
    en: 'Building scalable web applications with React, Next.js, Node.js, and MongoDB. Expert in SSR, REST APIs, and pixel-perfect implementation of UI designs.',
  },
  expertise_mobile_title: { no: 'Mobilapp Design & Utvikling', en: 'Mobile App Design & Development' },
  expertise_mobile_desc: {
    no: 'Skaper kryssplattform mobilopplevelser med React Native — fra UX-flyt og interaktive prototyper til fullstendige produksjonsbygg på iOS og Android.',
    en: 'Crafting cross-platform mobile experiences with React Native — from UX flows and interactive prototypes to full production builds on iOS and Android.',
  },
  expertise_saas_title: { no: 'SaaS Produktutvikling', en: 'SaaS Product Development' },
  expertise_saas_desc: {
    no: 'Ende-til-ende SaaS-plattformer som kombinerer gjennomtenkt UX-design med robust teknologi — autentisering, betalinger, analyser og sky-distribusjon på Vercel og Supabase.',
    en: 'End-to-end SaaS platforms combining thoughtful UX design with robust engineering — authentication, payments, analytics, and cloud deployment on Vercel and Supabase.',
  },
  tech_stack: { no: 'Teknologier:', en: 'Tech stack:' },

  // ─── Timeline ───
  timeline_title: { no: 'Karrierehistorikk', en: 'Career History' },
  timeline_job1_title: { no: 'UX Designer & Fullstack-utvikler', en: 'UX Designer & Full-Stack Developer' },
  timeline_job1_sub: { no: 'Frilanser', en: 'Freelance' },
  timeline_job1_date: { no: '2019 — Nåværende', en: '2019 — Present' },
  timeline_job1_desc: {
    no: 'Designer og bygger AI-drevne web- og mobilprodukter, SaaS-plattformer og brukersentrerte digitale opplevelser fra konsept til produksjon.',
    en: 'Designing and building AI-powered web and mobile products, SaaS platforms, and user-centered digital experiences from concept to deployment.',
  },
  timeline_job2_title: { no: 'Dataanalytiker', en: 'Data Analyst' },
  timeline_job2_sub: { no: 'Airbnb — Sverige', en: 'Airbnb — Sweden' },
  timeline_job2_date: { no: 'Dataanalytiker', en: 'Data Analyst' },
  timeline_job2_desc: {
    no: 'Oversatte datainnsikt til UX-forbedringer og strategiske produktbeslutninger for bedre brukeropplevelser i stor skala.',
    en: 'Translated data insights into UX improvements and strategic product decisions for better user experiences at scale.',
  },
  timeline_job3_title: { no: 'Innholdsskaper', en: 'Content Creator' },
  timeline_job3_sub: { no: 'YouTube & TikTok', en: 'YouTube & TikTok' },
  timeline_job3_date: { no: 'Innholdsskaper', en: 'Content Creator' },
  timeline_job3_desc: {
    no: 'Lager UX-design-veiledninger, produktutviklingsinnhold og åpen kildekode design/utvikler-ressurser.',
    en: 'Creating UX design tutorials, product development content, and open-source design/dev resources.',
  },
  timeline_cert1_title: { no: 'Google UX Design-sertifikat', en: 'Google UX Design Certificate' },
  timeline_cert1_sub: { no: 'Google', en: 'Google' },
  timeline_cert1_date: { no: 'Sertifisering', en: 'Certification' },
  timeline_cert1_desc: {
    no: 'Prinsipper for brukeropplevelsesdesign, prototyping og brukerforskningsmetoder.',
    en: 'User experience design principles, prototyping, and user research methodologies.',
  },
  timeline_cert2_title: { no: 'Fullstack & Moderne Webutvikling', en: 'Full-Stack & Modern Web Development' },
  timeline_cert2_sub: { no: 'Udemy & Coursera', en: 'Udemy & Coursera' },
  timeline_cert2_date: { no: 'Sertifisering', en: 'Certification' },
  timeline_cert2_desc: {
    no: 'MERN stack, Next.js, React Native og moderne webutviklingspraksis.',
    en: 'MERN stack, Next.js, React Native, and modern web development practices.',
  },

  // ─── Projects ───
  projects_title: { no: 'Personlige prosjekter', en: 'Personal Projects' },
  visit_site: { no: 'Besøk nettstedet →', en: 'Visit Site →' },
  tag_web_design: { no: 'Webdesign', en: 'Web Design' },
  tag_fullstack: { no: 'Full-Stack', en: 'Full-Stack' },
  tag_ux_design: { no: 'UX Design', en: 'UX Design' },
  tag_web_app: { no: 'Webapplikasjon', en: 'Web App' },
  tag_saas: { no: 'SaaS', en: 'SaaS' },
  tag_beauty: { no: 'Skjønnhetssalong', en: 'Beauty Salon' },
  project_millennium_desc: {
    no: 'Et profesjonelt transport- og logistikkfirma-nettsted med moderne UI, tjenestepresentasjon og bestillingsflyt.',
    en: 'A professional transport and logistics company website with a modern UI, service showcase, and booking flow.',
  },
  project_nordiq_desc: {
    no: 'En ren og minimalistisk nordisk-inspirert webapplikasjon med jevne interaksjoner og moderne designsystem.',
    en: 'A clean and minimal Nordic-inspired web application with smooth interactions and modern design system.',
  },
  project_oppusing_desc: {
    no: 'En moderne SaaS-plattform med et polert brukergrensesnitt, designet for sømløs brukeropplevelse på alle enheter.',
    en: 'A modern SaaS platform with a polished user interface, designed for seamless user experience across all devices.',
  },
  project_dinskj_desc: {
    no: 'Et elegant skjønnhetssalongnettsted med timebestilling, tjenestepresentasjon og stylistprofiler — designet for en elegant brukeropplevelse.',
    en: 'A sleek beauty salon website with appointment booking, service showcase, and stylist profiles — designed for an elegant user experience.',
  },
  project_cyber_desc: {
    no: 'UX Design — En omfattende cybersikkerhetsplattform med intuitive dashboards, trusselvisualisering og sanntidsovervåking.',
    en: 'UX Design — A comprehensive cybersecurity analysis platform with intuitive dashboards, threat visualization, and real-time monitoring interfaces.',
  },
  project_callcenter_desc: {
    no: 'UX Design — Et analysesystem for kundesentre med datadrevet innsikt, ytelsesporing og agentstyring.',
    en: 'UX Design — An analytics system for call centers with data-driven insights, performance tracking, and agent management interfaces.',
  },
  project_nav_desc: {
    no: 'Mobilapp — En AI-drevet assistentapp bygget med React Native, med naturlig språkbehandling og smart oppgavestyring.',
    en: 'Mobile App — An AI-powered assistant mobile application built with React Native, featuring natural language processing and smart task management.',
  },
  project_saas_desc: {
    no: 'SaaS — Ende-til-ende SaaS-plattformer med AI-integrasjon, autentisering, betalinger og sky-distribusjon på Vercel og Supabase.',
    en: 'SaaS — End-to-end SaaS platforms with AI integration, authentication, payments, and cloud deployment on Vercel and Supabase.',
  },
  project_innomind_desc: {
    no: 'SaaS — En innovativ AI-plattform som kombinerer maskinlæring med et rent, brukervennlig grensesnitt for kreativ problemløsning.',
    en: 'SaaS — An innovative AI platform combining machine learning capabilities with a clean, user-friendly interface for creative problem solving.',
  },
  project_emotion_desc: {
    no: 'UX Design — En mobilapp-design for sanntids emosjonsdeteksjon ved hjelp av ansiktsgjenkjenning, med tilgjengelige og intuitive brukerflyter.',
    en: 'UX Design — A mobile app design for real-time emotion detection using facial recognition, with accessible and intuitive user flows.',
  },

  // ─── Contact ───
  corporate_title: { no: 'Bedriftsopplæring', en: 'Corporate Training' },
  corporate_desc: {
    no: 'Styrk teamet ditt med banebrytende ferdigheter innen UX Design, produkttenkning og moderne fullstack-utvikling. Skreddersydde opplæringsprogrammer tilpasset bedriftens produkt- og designbehov.',
    en: 'Empower your team with cutting-edge skills in UX Design, Product Thinking, and Modern Full-Stack Development. Customized training programs tailored to your company\'s product and design needs.',
  },
  contact_title: { no: 'Kontakt meg', en: 'Contact Me' },
  contact_desc: {
    no: 'Har du et prosjekt som venter på å bli realisert? La oss samarbeide og gjøre det til virkelighet!',
    en: 'Got a project waiting to be realized? Let\'s collaborate and make it happen!',
  },
  contact_name_label: { no: 'Ditt navn', en: 'Your Name' },
  contact_name_placeholder: { no: 'Hva heter du?', en: 'What\'s your name?' },
  contact_email_label: { no: 'E-post / Telefon', en: 'Email / Phone' },
  contact_email_placeholder: { no: 'Hvordan kan jeg nå deg?', en: 'How can I reach you?' },
  contact_message_label: { no: 'Melding', en: 'Message' },
  contact_message_placeholder: { no: 'Send meg spørsmål eller henvendelser', en: 'Send me any inquiries or questions' },
  contact_send: { no: 'Send ✉', en: 'Send ✉' },
  contact_success: { no: 'E-postappen din skal åpne seg nå!', en: 'Your email app should open now!' },
  contact_error_name: { no: 'Vennligst skriv inn navnet ditt', en: 'Please enter your name' },
  contact_error_email: { no: 'Vennligst skriv inn e-posten din', en: 'Please enter your email' },
  contact_error_message: { no: 'Vennligst skriv inn en melding', en: 'Please enter a message' },
  contact_direct_title: { no: 'Eller send meg en melding direkte', en: 'Or message me directly' },
  contact_direct_desc: {
    no: 'Klikk nedenfor for å åpne e-postappen din og sende meg en melding med en gang.',
    en: 'Click below to open your email app and send me a message right away.',
  },
  contact_direct_btn: { no: '✉ Kontakt meg', en: '✉ Contact Me' },

  // ─── Footer ───
  footer_text_pre: { no: 'En portefølje designet & bygget av', en: 'A portfolio designed & built by' },
  footer_text_post: { no: 'med 💜', en: 'with 💜' },

  // ─── Project Gallery & Detail ───
  back_home: { no: '← Tilbake', en: '← Back' },
  detail_preview: { no: 'Live Forhåndsvisning', en: 'Live Preview' },
  detail_design: { no: 'Design & Grensesnitt', en: 'Design & Interface' },
  detail_category: { no: 'Kategori', en: 'Category' },
  detail_type: { no: 'Type', en: 'Type' },
  detail_link: { no: 'Besøk nettstedet', en: 'Visit Website' },
  detail_cta_title: { no: 'Interessert i lignende arbeid?', en: 'Interested in similar work?' },
  detail_cta_desc: {
    no: 'Ta kontakt for å diskutere ditt neste prosjekt eller utforsk resten av porteføljen.',
    en: 'Get in touch to discuss your next project or explore the rest of the portfolio.',
  },
  gallery_title: { no: 'Prosjektgalleri', en: 'Project Gallery' },
  gallery_subtitle: {
    no: 'Utforsk alle mine prosjekter — fra live-nettsteder til UX-design og mobilapper',
    en: 'Explore all my projects — from live websites to UX design and mobile apps',
  },
  gallery_all: { no: 'Alle', en: 'All' },
  gallery_live: { no: 'Live', en: 'Live' },
  gallery_ux: { no: 'UX Design', en: 'UX Design' },
  gallery_saas: { no: 'SaaS', en: 'SaaS' },
  gallery_mobile: { no: 'Mobil', en: 'Mobile' },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, lang: Language): string {
  return translations[key][lang];
}

export default translations;
