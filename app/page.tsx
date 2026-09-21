'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Globe2,
  AtSign,
  Layers3,
  Menu,
  Palette,
  Search,
  Send,
  ShoppingBag,
  Sparkles,
  X,
  Zap,
} from 'lucide-react'

const logo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/neovision_logo_transparent-tK6RuzqocZ7IzMVUn9St60sV0uLZzU.png'

type Lang = 'en' | 'fr'

const copy = {
  en: {
    nav: ['Home', 'Services', 'Projects', 'About', 'Process', 'Contact'],
    talk: "Let's talk →",
    eyebrow: 'Independent digital agency · Algeria / Worldwide',
    heroTitle: 'We turn ideas into',
    heroAccent: 'digital experiences.',
    heroText: 'We design modern, high-performing websites that help businesses stand out, connect with their audience and grow online.',
    projectsCta: 'View our projects',
    contactCta: "Let's talk about your project",
    trust: 'Web Development · Design · SEO',
    servicesKicker: 'What we do',
    servicesTitle: 'Digital solutions designed to move your business forward.',
    servicesText: 'From first sketch to final launch, we bring clarity, character and performance to every digital touchpoint.',
    projectsKicker: 'Selected work',
    projectsTitle: 'Digital experiences built with purpose.',
    aboutKicker: 'Why NeoVision',
    aboutTitle: 'More than a website.\nA digital presence.',
    processKicker: 'Our approach',
    processTitle: 'From idea\nto final product.',
    aboutKicker2: 'A modern vision of digital',
    aboutTitle2: 'Design, technology and strategy — aligned around what matters.',
    aboutText: 'NeoVision is a small, focused digital agency for ambitious brands. We combine thoughtful design with reliable technology to make digital experiences that are beautiful, useful and built to last.',
    ctaTitle: 'Ready to bring\nyour idea to life?',
    ctaText: "Have a project in mind, a website to build or an existing presence that needs a new direction? Let's talk.",
    contactTitle: 'Let’s talk about\nyour project.',
    send: 'Send request →',
    footer: 'Digital experiences designed to move your business forward.',
    allRights: '© 2026 NeoVision. All rights reserved.',
  },
  fr: {
    nav: ['Accueil', 'Services', 'Projets', 'À propos', 'Processus', 'Contact'],
    talk: 'Parlons de votre projet →',
    eyebrow: 'Agence digitale indépendante · Algérie / Monde',
    heroTitle: 'Nous transformons les idées en',
    heroAccent: 'expériences digitales.',
    heroText: 'Nous concevons des sites web modernes et performants qui permettent aux entreprises de se démarquer, de connecter avec leur audience et de développer leur présence en ligne.',
    projectsCta: 'Voir nos projets',
    contactCta: 'Parler de votre projet',
    trust: 'Développement web · Design · SEO',
    servicesKicker: 'Notre expertise',
    servicesTitle: 'Des solutions digitales pensées pour faire avancer votre activité.',
    servicesText: 'De la première esquisse au lancement, nous apportons clarté, caractère et performance à chaque point de contact digital.',
    projectsKicker: 'Projets sélectionnés',
    projectsTitle: 'Des expériences digitales conçues avec intention.',
    aboutKicker: 'Pourquoi NeoVision',
    aboutTitle: 'Plus qu’un site.\nUne véritable présence digitale.',
    processKicker: 'Notre méthode',
    processTitle: 'De l’idée\nau projet final.',
    aboutKicker2: 'Une vision moderne du digital',
    aboutTitle2: 'Design, technologie et stratégie — réunis autour de l’essentiel.',
    aboutText: 'NeoVision est une agence digitale indépendante pour les marques ambitieuses. Nous associons un design réfléchi à une technologie fiable pour créer des expériences belles, utiles et durables.',
    ctaTitle: 'Prêt à donner vie\nà votre idée ?',
    ctaText: 'Vous avez un projet, un site à créer ou une présence digitale à améliorer ? Parlons-en.',
    contactTitle: 'Parlons de\nvotre projet.',
    send: 'Envoyer ma demande →',
    footer: 'Des expériences digitales pensées pour faire avancer votre activité.',
    allRights: '© 2026 NeoVision. Tous droits réservés.',
  },
}

const services = [
  { icon: Palette, title: ['Web Design', 'Design web'], desc: ['Modern, responsive websites designed around your brand and your audience.', 'Des sites modernes et responsives conçus autour de votre identité et de votre audience.'] },
  { icon: Code2, title: ['Web Development', 'Développement web'], desc: ['Custom web solutions built with modern technologies and clean architecture.', 'Des solutions web sur mesure développées avec des technologies modernes.'] },
  { icon: ShoppingBag, title: ['E-commerce', 'E-commerce'], desc: ['High-quality online stores designed to create a smooth shopping experience.', 'Des boutiques en ligne pensées pour offrir une expérience d’achat fluide.'] },
  { icon: Layers3, title: ['UI/UX Design', 'Design UI/UX'], desc: ['Intuitive interfaces that combine aesthetics, usability and consistency.', 'Des interfaces intuitives qui combinent esthétique, simplicité et cohérence.'] },
  { icon: Search, title: ['SEO', 'SEO'], desc: ['Technical and on-page optimization to improve your visibility online.', 'Une optimisation technique et éditoriale pour améliorer votre visibilité.'] },
  { icon: Zap, title: ['Maintenance & Optimization', 'Maintenance & Optimisation'], desc: ['Continuous improvements, performance optimization and technical support.', 'Améliorations continues, optimisation des performances et accompagnement technique.'] },
]

const projects = [
  { name: 'Djezzy Talents', category: ['Web Platform', 'Plateforme web'], tech: 'Next.js / MongoDB / Dashboard', desc: ['A recruitment platform designed to connect talent with the right opportunities.', 'Une plateforme de recrutement conçue pour connecter les talents aux bonnes opportunités.'], tone: 'project-blue' },
  { name: 'DKT School', category: ['Education Website', 'Site éducatif'], tech: 'WordPress / Elementor / Responsive Design', desc: ['A modern educational website designed to present programs, values and school life.', 'Un site éducatif moderne présentant les programmes, les valeurs et la vie de l’établissement.'], tone: 'project-pink' },
  { name: 'Evo Agency', category: ['Business Website', 'Site business'], tech: 'Next.js / Responsive Design', desc: ['A modern digital presence designed for a creative agency.', 'Une présence digitale moderne conçue pour une agence créative.'], tone: 'project-purple' },
  { name: 'NeoVision', category: ['Digital Agency', 'Agence digitale'], tech: 'Next.js / UI Design / SEO', desc: ['The digital identity and website of NeoVision.', 'L’identité digitale et le site web de NeoVision.'], tone: 'project-neon' },
  { name: 'Boutique', category: ['E-commerce', 'E-commerce'], tech: 'WordPress / WooCommerce', desc: ['A refined online store designed to showcase products and create a smooth shopping experience.', 'Une boutique en ligne élégante pensée pour valoriser les produits.'], tone: 'project-orange' },
  { name: 'Dental Clinic', category: ['Healthcare Website', 'Site santé'], tech: 'Responsive Design / Booking', desc: ['A clean and reassuring website designed to present the clinic and simplify appointment requests.', 'Un site clair et rassurant permettant de présenter la clinique et faciliter les demandes de rendez-vous.'], tone: 'project-cyan' },
]

const principles = [
  ['Custom Design', 'Every project is shaped around your brand, audience and business goals.', 'Chaque projet est pensé autour de la marque, de l’audience et des objectifs business.'],
  ['Modern Technology', 'Clean, scalable and modern technologies, adapted to every project.', 'Des technologies propres, scalables et modernes, adaptées à chaque projet.'],
  ['Performance First', 'Fast, responsive experiences optimized for every screen.', 'Des expériences rapides, responsives et optimisées sur tous les écrans.'],
  ['Visibility', 'An SEO-focused structure that makes your business easier to discover.', 'Une structure pensée pour le SEO afin de rendre votre activité plus facile à découvrir.'],
]

const process = [
  ['Discovery', 'We understand your business, objectives and needs.', 'Nous comprenons votre activité, vos objectifs et vos besoins.'],
  ['Strategy', 'We define the structure, user experience and creative direction.', 'Nous définissons la structure, l’expérience utilisateur et la direction créative.'],
  ['Design', 'We create a modern interface aligned with your brand.', 'Nous créons une interface moderne et cohérente avec votre identité.'],
  ['Development', 'We turn the design into a fast and reliable web experience.', 'Nous transformons le design en une expérience web performante et fiable.'],
  ['Launch', 'We test, optimize and launch your website.', 'Nous testons, optimisons et mettons votre site en ligne.'],
  ['Growth', 'We can continue improving and evolving your digital presence.', 'Nous pouvons continuer à améliorer et faire évoluer votre présence digitale.'],
]

export default function Page() {
  const [lang, setLang] = useState<Lang>('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = copy[lang]
  const isFr = lang === 'fr'

  const jump = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }

  return (
    <main className="site-shell">
      <header className="site-nav">
        <button className="brand" onClick={() => jump('home')} aria-label="NeoVision home">
          <span className="brand-mark"><Image src={logo} alt="NeoVision logo" fill sizes="34px" /></span>
          <span>NEOVISION</span>
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          {t.nav.map((item, i) => <button key={item} onClick={() => jump(['home', 'services', 'projects', 'about', 'process', 'contact'][i])}>{item}</button>)}
        </nav>
        <div className="nav-actions">
          <div className="lang-switch" aria-label="Language switcher">
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button><span>/</span><button className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')}>FR</button>
          </div>
          <button className="nav-cta" onClick={() => jump('contact')}>{t.talk} <ArrowUpRight size={15} /></button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section id="home" className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" />{t.eyebrow}</div>
          <h1>{t.heroTitle}<br /><span className="gradient-text">{t.heroAccent}</span></h1>
          <p className="hero-text">{t.heroText}</p>
          <div className="hero-actions"><button className="button button-primary" onClick={() => jump('projects')}>{t.projectsCta}<ArrowUpRight size={17} /></button><button className="text-link" onClick={() => jump('contact')}>{t.contactCta}<ArrowUpRight size={16} /></button></div>
          <div className="trust-row"><span className="trust-line" />{t.trust}</div>
        </div>
        <div className="hero-art" aria-label="Animated NeoVision infinity light sculpture">
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-orbit orbit-three" />
          <div className="art-core"><Image src={logo} alt="NeoVision infinity logo" fill sizes="520px" /></div>
          <div className="art-label"><span>01</span><span>VISION / MOTION</span></div>
        </div>
        <div className="hero-scroll"><span>Scroll to explore</span><ChevronDown size={16} /></div>
      </section>

      <section id="services" className="section-wrap services-section">
        <div className="section-heading split-heading"><div><p className="section-kicker">{t.servicesKicker} <span>01 — 06</span></p><h2>{t.servicesTitle}</h2></div><p>{t.servicesText}</p></div>
        <div className="services-grid">{services.map((service, i) => { const Icon = service.icon; return <article className="service-card" key={service.title[0]}><div className="card-top"><span>0{i + 1}</span><Icon size={22} strokeWidth={1.5} /></div><h3>{service.title[isFr ? 1 : 0]}</h3><p>{service.desc[isFr ? 1 : 0]}</p><ArrowUpRight className="card-arrow" size={18} /></article> })}</div>
      </section>

      <section id="projects" className="section-wrap projects-section">
        <div className="section-heading"><p className="section-kicker">{t.projectsKicker} <span>2023 — 2026</span></p><h2>{t.projectsTitle}</h2></div>
        <div className="projects-grid">{projects.map((project, i) => <article className={`project-card ${i % 3 === 0 ? 'project-wide' : ''}`} key={project.name}><div className={`project-visual ${project.tone}`}><div className="visual-grid" /><div className="visual-window"><span>{project.name}</span><div className="window-lines" /></div><span className="visual-index">0{i + 1}</span></div><div className="project-info"><div><p className="project-category">{project.category[isFr ? 1 : 0]}</p><h3>{project.name}</h3></div><ArrowUpRight size={18} /><p className="project-desc">{project.desc[isFr ? 1 : 0]}</p><p className="project-tech">{project.tech}</p></div></article>)}</div>
      </section>

      <section id="about" className="editorial-section section-wrap"><div className="editorial-intro"><p className="section-kicker">{t.aboutKicker} <span>∞</span></p><h2>{t.aboutTitle.split('\n').map((line, i) => <span key={line} className={i === 1 ? 'gradient-text' : ''}>{line}<br /></span>)}</h2></div><div className="principles">{principles.map((p, i) => <div className="principle" key={p[0]}><span>0{i + 1}</span><div><h3>{isFr ? p[0] === 'Custom Design' ? 'Design sur mesure' : p[0] === 'Modern Technology' ? 'Technologie moderne' : p[0] === 'Performance First' ? 'Performance d’abord' : 'Visibilité' : p[0]}</h3><p>{isFr ? p[2] : p[1]}</p></div><Check size={16} /></div>)}</div></section>

      <section id="process" className="section-wrap process-section"><div className="section-heading split-heading"><div><p className="section-kicker">{t.processKicker} <span>6 STEPS</span></p><h2>{t.processTitle.split('\n').map((line, i) => <span key={line}>{line}<br /></span>)}</h2></div><div className="process-note"><Sparkles size={17} /><p>{isFr ? 'Une méthode claire, collaborative et pensée pour créer de l’impact.' : 'A clear, collaborative method designed to create meaningful impact.'}</p></div></div><div className="process-grid">{process.map((step, i) => <div className="process-step" key={step[0]}><div><span className="step-number">0{i + 1}</span><span className="step-line" /></div><h3>{isFr ? step[0] === 'Discovery' ? 'Découverte' : step[0] === 'Strategy' ? 'Stratégie' : step[0] === 'Design' ? 'Design' : step[0] === 'Development' ? 'Développement' : step[0] === 'Launch' ? 'Lancement' : 'Croissance' : step[0]}</h3><p>{isFr ? step[2] : step[1]}</p></div>)}</div></section>

      <section className="section-wrap about-section"><div className="about-orb"><div className="orb-ring" /><div className="orb-ring ring-two" /><Image src={logo} alt="NeoVision infinity mark" fill sizes="330px" /></div><div className="about-copy"><p className="section-kicker">{t.aboutKicker2}</p><h2>{t.aboutTitle2}</h2><p>{t.aboutText}</p><div className="stats"><div><strong>+10</strong><span>{isFr ? 'Projets' : 'Projects'}</span></div><div><strong>100%</strong><span>Responsive</span></div><div><strong>24/7</strong><span>{isFr ? 'Présence en ligne' : 'Online presence'}</span></div></div></div></section>

      <section className="cta-section section-wrap"><div className="cta-glow" /><p className="section-kicker">NeoVision / 2026</p><h2>{t.ctaTitle.split('\n').map((line, i) => <span key={line} className={i === 1 ? 'gradient-text' : ''}>{line}<br /></span>)}</h2><p>{t.ctaText}</p><button className="button button-light" onClick={() => jump('contact')}>{t.talk}<ArrowUpRight size={17} /></button></section>

      <section id="contact" className="contact-section section-wrap"><div className="contact-intro"><p className="section-kicker">{isFr ? 'Contact' : 'Start a conversation'} <span>→</span></p><h2>{t.contactTitle.split('\n').map((line, i) => <span key={line}>{line}<br /></span>)}</h2><div className="contact-details"><a href="mailto:hello@neovision.dz">hello@neovision.dz <ArrowUpRight size={15} /></a><a href="https://instagram.com/neovision.dz" target="_blank" rel="noreferrer"><AtSign size={16} /> @neovision.dz</a><span><Globe2 size={16} /> Algeria / Worldwide</span></div></div><form className="contact-form" onSubmit={(e) => e.preventDefault()}><label>{isFr ? 'Nom' : 'Name'}<input required placeholder={isFr ? 'Votre nom' : 'Your name'} /></label><label>{isFr ? 'E-mail' : 'Email'}<input required type="email" placeholder="you@company.com" /></label><label>{isFr ? 'Entreprise (optionnel)' : 'Company (optional)'}<input placeholder={isFr ? 'Votre entreprise' : 'Your company'} /></label><label>{isFr ? 'Type de projet' : 'Project type'}<select defaultValue=""><option value="" disabled>{isFr ? 'Sélectionner une option' : 'Select an option'}</option><option>Website</option><option>E-commerce</option><option>UI/UX design</option><option>SEO</option></select></label><label className="message-field">{isFr ? 'Message' : 'Message'}<textarea required placeholder={isFr ? 'Parlez-nous de votre projet...' : 'Tell us about your project...'} rows={4} /></label><button className="button button-primary" type="submit">{t.send}<Send size={16} /></button></form></section>

      <footer className="site-footer section-wrap"><div className="footer-main"><button className="brand" onClick={() => jump('home')}><span className="brand-mark"><Image src={logo} alt="NeoVision logo" fill sizes="34px" /></span><span>NEOVISION</span></button><p>{t.footer}</p><button className="footer-top" onClick={() => jump('home')}>Back to top <ArrowUpRight size={15} /></button></div><div className="footer-bottom"><span>{t.allRights}</span><div><button onClick={() => jump('services')}>{t.nav[1]}</button><button onClick={() => jump('projects')}>{t.nav[2]}</button><button onClick={() => jump('contact')}>{t.nav[5]}</button></div><div className="footer-langs"><button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button> / <button className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')}>FR</button></div></div></footer>
    </main>
  )
}

export { logo }
