const profileSummary = 'Lead Software Engineer and technical lead with a strong frontend background. I translate product complexity into clear engineering decisions, scalable interfaces, and secure customer experiences for modern digital products.'

const portfolio = [
  {
    title: 'Acronis cyber protection platform',
    summary: 'Led enterprise web application development in a large-scale cybersecurity platform, shaping frontend architecture, distributed service integration, and reusable product components.',
    stack: ['TypeScript', 'Vite', 'Microfrontends', 'Distributed systems'],
    year: '2020 — 2026',
  },
  {
    title: 'Virtuozzo frontend architecture',
    summary: 'Defined architecture and collaboration workflows for frontend, backend, and QA teams while building internal products and documentation systems.',
    stack: ['Vue.js', 'Architecture', 'QA collaboration', 'Product systems'],
    year: '2016 — 2020',
  },
  {
    title: 'Mission-critical operational systems',
    summary: 'Built real-time control applications for government border-agency workflows and aviation operations, focusing on situational awareness and operational clarity.',
    stack: ['Vue.js', 'React', 'Mission-critical UX', 'Operational tools'],
    year: '2014 — 2016',
  },
]

const essays = [
  {
    title: 'When architecture is the real product',
    snippet: 'How clear boundaries between product areas and engineering teams unlock scalable delivery in large enterprise systems.',
    readTime: '5 min read',
  },
  {
    title: 'AI-assisted engineering is not a shortcut — it is a multiplier',
    snippet: 'Using AI to improve development, debugging, testing, and engineering automation without losing product judgment.',
    readTime: '4 min read',
  },
  {
    title: 'Building for real-time operational decisions',
    snippet: 'Why information-dense interfaces and strong workflows matter in time-sensitive, high-reliability product environments.',
    readTime: '3 min read',
  },
]

const experience = [
  {
    role: 'Lead Software Engineer',
    company: 'Acronis',
    period: 'Feb 2020 — Sep 2026 · 6 yrs 8 mos',
    location: 'Sofia City, Bulgaria · On-site',
    points: [
      'Led development of large-scale enterprise web applications for a cybersecurity platform, working across frontend architecture, APIs, and distributed services.',
      'Designed a microfrontend architecture and defined boundaries between product areas and engineering teams, helping multiple teams develop and integrate independently.',
      'Led technical planning and architectural decisions across frontend, backend, and QA, providing technical direction across multiple engineering teams.',
      'Introduced AI-assisted development workflows to improve engineering speed, testing, troubleshooting, and automation using tools such as ChatGPT, Claude, and GitHub Copilot.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Virtuozzo',
    period: 'Aug 2016 — Feb 2020 · 3 yrs 7 mos',
    location: 'On-site',
    points: [
      'Defined system architecture for frontend, backend, and QA teams.',
      'Defined workflows focusing on collaboration between development teams.',
      'Developed user interfaces for internal products, a testing system, and user interface documentation.',
    ],
  },
  {
    role: 'Electrical Installer / Electrical Designer',
    company: 'Self-employed / Project-based',
    period: 'Sep 2015 — Sep 2018 · 3 yrs 1 mo',
    location: 'Moscow City, Russia · Hybrid',
    points: [
      'Designed electrical supply systems for residential apartments and private houses.',
      'Calculated loads and distributed three-phase loads across L1/L2/L3.',
      'Selected cables, protective devices, and electrical equipment.',
      'Designed and assembled residential distribution boards and performed inspection, troubleshooting, and corrective work.',
    ],
  },
  {
    role: 'Senior Frontend Developer',
    company: 'ProtonPlusService',
    period: 'Jun 2015 — Jul 2016 · 1 yr 2 mos',
    location: 'Moscow, Russia · On-site',
    points: [
      'Built a real-time operational control application for a government border-agency environment using Vue.js 2.',
      'Developed a central operational workspace for monitoring border-control units, aircraft, vessels, and distributed field assets.',
      'Focused on reliable, information-dense interfaces for real-time situational awareness and coordination in a mission-critical environment.',
    ],
  },
  {
    role: 'Senior Frontend Developer',
    company: 'MyJet',
    period: 'May 2014 — Nov 2014 · 7 mos',
    location: 'Moscow City, Russia · On-site',
    points: [
      'Contributed to a web application for managing private-aviation operations, including aircraft maintenance, servicing, flights, and workflows.',
      'Built the frontend using React in a Django-based product environment.',
      'Focused on UX and UI component design for complex operational data and workflows.',
    ],
  },
  {
    role: 'Lead Frontend Developer',
    company: 'AVITO.ru',
    period: 'Dec 2009 — Apr 2014 · 4 yrs 5 mos',
    location: 'Moscow, Moscow City, Russia · On-site',
    points: [
      'Worked on Avito’s classifieds platform during a period of rapid product and traffic growth.',
      'Owned end-to-end development of user-facing web and mobile experiences.',
      'Worked on frontend architecture, performance, and integration with backend services in a high-traffic environment.',
      'Collaborated with product and engineering teams to deliver features while evolving the platform at scale.',
    ],
  },
  {
    role: 'Frontend Web Developer',
    company: 'Webalta',
    period: 'Jan 2009 — Dec 2009 · 1 yr',
    location: 'Moscow, Russia · On-site',
    points: [
      'Built web interfaces for a search-engine portal using Java and Apache Wicket.',
      'Developed search and portal experiences comparable in scope to major search platforms.',
      'Contributed to frontend implementation, UI behavior, and ongoing product development.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'JSC Publishing House Salon-Press',
    period: 'Sep 2007 — Sep 2009 · 2 yrs 1 mo',
    location: 'Moscow, Moscow City, Russia · On-site',
    points: [
      'Created digital editions and web experiences for print magazines and periodicals.',
      'Developed websites supporting digital publications and associated print brands.',
      'Built web applications for online and offline events.',
      'Delivered user-facing interfaces across editorial, event, and media projects.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Rostelecom',
    period: 'Oct 2007 — Apr 2008 · 7 mos',
    location: 'Moscow City, Russia · On-site',
    points: [
      'Contributed to the development of an early version of the Gosuslugi public-services portal.',
      'Built interfaces and application functionality for a large-scale government digital-services initiative.',
      'Worked in a public-sector delivery environment with complex stakeholder needs and high reliability expectations.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'ADV/web-engineering co',
    period: 'Sep 2006 — Sep 2007 · 1 yr 1 mo',
    location: 'Moscow, Moscow City, Russia',
    points: [
      'Delivered a high volume of custom web applications and websites for clients ranging from small businesses to large international brands, including Volkswagen and Panasonic.',
      'Worked in a web-studio environment, managing multiple client projects simultaneously from implementation through delivery.',
      'Built applications using a proprietary Java-based Mozart framework with XML/XSL-driven request and presentation workflows.',
      'Developed reusable frontend and web-application components while adapting solutions to varied client requirements, timelines, and brands.',
    ],
  },
  {
    role: 'Technical Support Specialist',
    company: 'OTR-2000',
    period: 'Sep 2005 — Sep 2006 · 1 yr 1 mo',
    location: 'Moscow, Moscow City, Russia',
    points: [
      'Implemented and supported an automated information system for the Ministry of Finance and Treasury.',
      'Delivered on-site installation, configuration, user support, and issue resolution for government organizations across the European part of Russia.',
      'Supported deployments remotely and in person for regions throughout the country, including the Far East.',
    ],
  },
  {
    role: 'IT Support Specialist',
    company: 'PC Help',
    period: '2004 — 2005',
    location: 'Moscow City, Russia · On-site',
    points: [
      'Provided on-site technical support for business clients, diagnosing and resolving PC hardware, software, network, and user-access issues.',
      'Installed, configured, and maintained workstations and related office IT equipment.',
      'Worked directly with users in client environments, building practical troubleshooting and service-delivery experience.',
    ],
  },
]

const skills = ['TypeScript', 'Vite', 'React', 'Vue.js', 'JavaScript', 'Microfrontends', 'Frontend architecture', 'Distributed systems', 'APIs', 'AI-assisted development', 'GitHub Copilot', 'ChatGPT', 'Claude', 'Web standards', 'XSLT', 'Java', 'Apache Wicket', 'SketchUp', 'Microsoft Excel', 'System design', 'Technical leadership', 'QA collaboration', 'Product strategy']

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <span className="brand-mark">LR</span>
          <span className="brand-text">Leonid Romanov</span>
        </div>
        <nav className="nav" aria-label="Main navigation">
          <a href="#work">Portfolio</a>
          <a href="#thoughts">Thoughts</a>
          <a href="#cv">CV</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Lead Software Engineer • Technical Lead • Frontend specialist</p>
            <h1>I build product experiences that are technically solid and genuinely useful.</h1>
            <p className="lede">
              I’m Leonid Romanov — a software engineer with a strong frontend background, a product mindset, and a practical approach to engineering leadership.
              I work at the intersection of product clarity, system design, and customer value.
            </p>
            <div className="cta-row">
              <a className="button primary" href="#work">See my work</a>
              <a className="button secondary" href="#cv">View CV</a>
            </div>
            <ul className="mini-stats" aria-label="Profile statistics">
              <li><strong>+10</strong><span>Years engineering</span></li>
              <li><strong>Acronis</strong><span>Current employer</span></li>
              <li><strong>Sofia</strong><span>Based in Bulgaria</span></li>
            </ul>
          </div>

          <aside className="profile-card" aria-label="Profile summary">
            <div className="avatar">LR</div>
            <p className="card-label">Currently</p>
            <h2>Lead Software Engineer</h2>
            <p>
              Technical lead and frontend-focused engineer helping shape secure, scalable product experiences in cyber protection and digital workflows.
            </p>
            <div className="contact-inline">
              <a href="mailto:romanov.leonid@gmail.com">romanov.leonid@gmail.com</a>
              <a href="https://github.com/leonid" target="_blank" rel="noreferrer">github.com/leonid</a>
              <a href="https://www.linkedin.com/in/leonid-romanov/" target="_blank" rel="noreferrer">linkedin.com/in/leonid-romanov</a>
            </div>
          </aside>
        </section>

        <section className="panel" id="work">
          <div className="section-head">
            <div>
              <p className="eyebrow">Portfolio</p>
              <h2>Selected work</h2>
            </div>
            <a href="https://www.linkedin.com/in/leonid-romanov/" target="_blank" rel="noreferrer">View LinkedIn</a>
          </div>

          <div className="project-grid">
            {portfolio.map((project) => (
              <article className="card project-card" key={project.title}>
                <div className="card-topline">
                  <span className="chip">{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tag-row">
                  {project.stack.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel" id="thoughts">
          <div className="section-head">
            <div>
              <p className="eyebrow">Thoughts</p>
              <h2>Notes and ideas</h2>
            </div>
            <a href="https://www.linkedin.com/in/leonid-romanov/" target="_blank" rel="noreferrer">More on LinkedIn</a>
          </div>

          <div className="essay-list">
            {essays.map((essay) => (
              <article className="essay-item" key={essay.title}>
                <span className="read-time">{essay.readTime}</span>
                <h3>{essay.title}</h3>
                <p>{essay.snippet}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel cv-panel" id="cv">
          <div className="section-head">
            <div>
              <p className="eyebrow">CV</p>
              <h2>Experience</h2>
            </div>
          </div>

          <div className="summary-box">
            <h3>Professional summary</h3>
            <p>{profileSummary}</p>
          </div>

          <div className="cv-layout">
            <div className="cv-main">
              {experience.map((job) => (
                <article className="experience-item" key={`${job.company}-${job.period}`}>
                  <div className="experience-meta">
                    <span>{job.period}</span>
                  </div>
                  <div>
                    <h3>{job.role}</h3>
                    <p className="company-name">{job.company}</p>
                    {job.location ? <p className="job-location">{job.location}</p> : null}
                    <ul>
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            <aside className="skills-panel">
              <h3>Core skills</h3>
              <div className="tag-row wrap">
                {skills.map((skill) => (
                  <span className="tag" key={skill}>{skill}</span>
                ))}
              </div>
              <div className="education-block">
                <h4>Education</h4>
                <p>Russian State Social University (former Moscow State Social University)</p>
              </div>
              <div className="education-block">
                <h4>Location</h4>
                <p>Sofia, Bulgaria</p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div>
          <p className="eyebrow">Let’s build something useful</p>
          <h2>Open to product engineering, advisory, and collaboration.</h2>
        </div>
        <div className="footer-links">
          <a href="mailto:romanov.leonid@gmail.com">Email</a>
          <a href="https://github.com/leonid" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/leonid-romanov/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  )
}

export default App
