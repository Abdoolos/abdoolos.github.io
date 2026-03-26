# Prompt

ضع البرومبت هنا:


You are an expert React developer. I need you to do two main tasks:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TASK 1 — UPGRADE TO LATEST REACT VERSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Upgrade this React portfolio project to the latest stable version of React (React 19).
- Update package.json with the latest versions of: react, react-dom, react-router-dom, 
  and all related dependencies
- Fix any breaking changes or deprecated APIs
- Replace any legacy lifecycle methods or patterns with modern React hooks
- Ensure Vite config is compatible with React 19
- Run npm install after updating package.json

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TASK 2 — UPDATE PORTFOLIO CONTENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Update all portfolio content in the project with the following data. 
Find the relevant config or data files (JSON, JS, or JSX) and replace the content:

── ABOUT ME ──
"UX Designer and Full-Stack Developer specializing in crafting intuitive digital 
experiences for web and mobile applications. Expert in end-to-end product design — 
from user research and wireframing to building production-ready full-stack solutions 
using React, Next.js, and React Native. With over 6 years of experience since 2019, 
I bridge the gap between beautiful design and powerful engineering to deliver 
seamless, user-centered products."

── SKILLS ──
- UX/UI Design              → 95%
- Full-Stack Development    → 90%
- React & Next.js           → 95%
- Mobile App Design & Dev   → 85%
- Figma & Prototyping       → 90%
- Python & Backend          → 80%

── STATS ──
- 25   → Projects Completed
- 15   → Apps Designed & Launched
- 30   → Technologies Mastered
- 8    → SaaS Products Designed & Built

── SERVICES ──
1. UX/UI Design
   Designing user-centered interfaces through research, wireframing, prototyping, 
   and usability testing. Turning complex problems into simple, elegant experiences 
   using Figma and modern design systems.

2. Full-Stack Web Development
   Building scalable web applications with React, Next.js, Node.js, and MongoDB. 
   Expert in SSR, REST APIs, and pixel-perfect implementation of UI designs.

3. Mobile App Design & Development
   Crafting cross-platform mobile experiences with React Native — from UX flows 
   and interactive prototypes to full production builds on iOS and Android.

4. SaaS Product Development
   End-to-end SaaS platforms combining thoughtful UX design with robust engineering —
   authentication, payments, analytics, and cloud deployment on Vercel and Supabase.

── EXPERIENCE ──
1. Role: UX Designer & Full-Stack Developer
   Period: 2019 — Present
   Description: Designing and building AI-powered web and mobile products, 
   SaaS platforms, and user-centered digital experiences from concept to deployment.

2. Role: Data Analyst
   Company: Airbnb — Sweden
   Description: Translated data insights into UX improvements and strategic 
   product decisions for better user experiences at scale.

3. Role: Content Creator
   Platform: YouTube & TikTok
   Description: Creating UX design tutorials, product development content, 
   and open-source design/dev resources.

── EDUCATION / CERTIFICATIONS ──
1. Google Certificate — Google UX Design
   User experience design principles, prototyping, and user research methodologies.

2. Udemy & Coursera — Full-Stack & Modern Web Development
   MERN stack, Next.js, React Native, and modern web development practices.

── PROJECTS ──
1. Title: Cybersecurity Analysis Platform
   Tag: UX Design
   URL: https://github.com/Abdoolos

2. Title: Call Center Analytics System
   Tag: UX Design
   URL: https://github.com/Abdoolos

3. Title: NAV AI Assistant App
   Tag: Mobile App
   URL: https://github.com/Abdoolos

4. Title: AI-Powered SaaS Platforms
   Tag: SaaS
   URL: https://github.com/Abdoolos

5. Title: InnoMind AI Platform
   Tag: SaaS
   URL: https://github.com/Abdoolos

6. Title: Emotion Detection App UI/UX
   Tag: UX Design
   URL: https://github.com/Abdoolos

── CORPORATE TRAINING SECTION ──
"Empower your team with cutting-edge skills in UX Design, Product Thinking, 
and Modern Full-Stack Development. Customized training programs tailored 
to your company's product and design needs."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IMPORTANT INSTRUCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Do NOT change the design, layout, or styling — only update the content
- Keep all existing animations and transitions intact
- Make sure the site is fully responsive after changes
- After all updates, run the dev server to confirm no errors
- Commit message: "feat: upgrade to React 19 + update portfolio content"

You are an expert React developer and UI designer.

I need you to add 3 new projects to the portfolio's Projects section.
For each project, generate a beautiful browser/device mockup screenshot 
using the live URL (take a screenshot or use a mockup wrapper component),
and add it as a project card alongside the existing ones.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEW PROJECTS TO ADD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROJECT 1:
- Title:       Millennium Transport
- Live URL:    https://www.millenium-transport.com
- Tags:        Web Design, Full-Stack
- Description: A professional transport and logistics company website 
               with a modern UI, service showcase, and booking flow.

PROJECT 2:
- Title:       Nordiq App
- Live URL:    https://nordiq.vercel.app
- Tags:        UX Design, Web App
- Description: A clean and minimal Nordic-inspired web application 
               with smooth interactions and modern design system.

PROJECT 3:
- Title:       Oppusing Platform
- Live URL:    https://oppusing.vercel.app
- Tags:        SaaS, UX Design
- Description: A modern SaaS platform with a polished user interface, 
               designed for seamless user experience across all devices.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MOCKUP INSTRUCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
For each project card, implement ONE of these mockup approaches 
(choose the best fit for the current project card design):

OPTION A — Browser Mockup Component:
  Create a reusable <BrowserMockup url="..."> component that:
  - Shows a realistic browser chrome (address bar, dots, title bar)
  - Embeds the website inside using <iframe> with the live URL
  - Has a subtle shadow and rounded corners
  - On hover: slight scale up (transform: scale(1.02)) with smooth transition

OPTION B — Screenshot + Overlay:
  If iframe is blocked by the site's CSP headers, use a screenshot service:
  Fetch a screenshot via:
  https://api.screenshotone.com/take?url={LIVE_URL}&viewport_width=1280&viewport_height=800
  OR use:
  https://image.thum.io/get/width/1200/{LIVE_URL}
  Display it inside a styled browser-frame div component.

OPTION C — Device Frame Mockup:
  Wrap the project image/screenshot inside a laptop or browser SVG frame
  using a library like "react-device-frameset" or build a custom CSS frame.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CARD DESIGN REQUIREMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Each new project card must include:
  ✅ Mockup image/iframe at the top
  ✅ Project title
  ✅ Short description (1-2 lines)
  ✅ Tag badges (e.g. "UX Design", "SaaS")
  ✅ A "Visit Site →" button that opens the live URL in a new tab
  ✅ Consistent styling with existing project cards

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IMPORTANT INSTRUCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Match the existing card grid layout (do NOT break the current design)
- Keep all existing projects intact — only ADD the new ones
- Make sure cards are fully responsive on mobile, tablet, and desktop
- Use lazy loading for mockup images/iframes (loading="lazy")
- If using iframes, add title and sandbox attributes for best practice
- After adding, run the dev server and confirm no layout breaks
- Commit message: "feat: add 3 new project mockups — Millennium, Nordiq, Oppusing"
