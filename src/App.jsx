const profileSummary = 'Lead Software Engineer and technical lead with a strong frontend background. I translate product complexity into clear engineering decisions, scalable interfaces, and secure customer experiences for modern digital products.'

const portfolio = [
  {
    title: 'Acronis Cyber Protection Platform',
    summary: 'Led product-facing engineering work for a global cyber protection platform, balancing secure operations, platform complexity, and polished user experience for MSP and enterprise customers.',
    stack: ['React', 'TypeScript', 'Frontend Architecture', 'Cyber Security'],
    year: 'Current',
  },
  {
    title: 'Acronis Ecosystem Integrations',
    summary: 'Helped expand the ecosystem around compliance, storage, security, and automation to make modular services work together in one coherent platform.',
    stack: ['Platform Strategy', 'UI Systems', 'MSP Products'],
    year: '2025',
  },
  {
    title: 'TeamUp & Digital Inclusion',
    summary: 'Supported community technology and education initiatives through Acronis Cyber Foundation Program efforts, connecting product thinking to real-world impact.',
    stack: ['Community Programs', 'Product Advocacy', 'Learning Tech'],
    year: '2026',
  },
]

const essays = [
  {
    title: 'The fastest way to discover the right architecture is to first build the wrong version',
    snippet: 'A practical reminder that shipping a rough first iteration can reveal the actual constraints and tradeoffs worth solving.',
    readTime: '5 min read',
  },
  {
    title: 'Protect, Manage and Automate with the strength of our expanding Acronis Ecosystem',
    snippet: 'A look at how platform thinking, partner integrations, and product clarity can reduce complexity for managed services teams.',
    readTime: '4 min read',
  },
  {
    title: 'ChannelCon 2026 and the next chapter for managed services',
    snippet: 'Why the future of managed services is moving toward autonomous cyber protection, tighter integrations, and stronger automation.',
    readTime: '3 min read',
  },
]

const experience = [
  {
    role: 'Lead Software Engineer',
    company: 'Acronis',
    period: 'Current role',
    points: [
      'Lead software engineering and technical direction with a strong frontend and platform focus in a global cyber protection environment.',
      'Collaborate across product, design, and engineering to improve product quality, reduce complexity, and deliver customer value faster.',
      'Drive modern frontend architecture, secure product experiences, and scalable systems for MSP and enterprise workflows.',
    ],
  },
  {
    role: 'Software Engineer / Frontend Product Engineer',
    company: 'Earlier product engineering roles',
    period: 'Earlier career',
    points: [
      'Built user-facing systems and product experiences with a focus on clarity, maintainability, and measurable business outcomes.',
      'Worked closely with stakeholders to translate product needs into technical direction and practical delivery plans.',
      'Supported digital products across web engineering, UI systems, and platform-oriented product work.',
    ],
  },
]

const skills = ['React', 'TypeScript', 'Frontend architecture', 'Technical leadership', 'Cyber security products', 'Design systems', 'Product strategy', 'MSP workflows', 'System design', 'Stakeholder communication']

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
