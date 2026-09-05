import React, { useState } from 'react';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [hoveredTech, setHoveredTech] = useState(null);

  const stackCategories = [
    {
      id: 'frontend',
      filterKey: 'FRONTEND',
      number: '01',
      domain: 'FRONTEND & INTERFACES',
      badge: 'CLIENT LAYER',
      tagline: 'Declarative state machines, component lifecycles & responsive user experiences.',
      techs: [
        { name: 'React.js (v18+)', role: 'Core UI Framework', highlight: true },
        { name: 'JavaScript (ES6+)', role: 'Modern Client Logic', highlight: true },
        { name: 'HTML5 & Semantic Web', role: 'Accessible Markup', highlight: false },
        { name: 'CSS3 / Grid & Flexbox', role: 'Fluid Layout Systems', highlight: false },
        { name: 'Bootstrap 5', role: 'Component Scaffolding', highlight: false },
        { name: 'Vite & Modern Bundlers', role: 'Build Tooling & HMR', highlight: true },
      ],
      capabilities: [
        'Component State Orchestration',
        'Custom React Hooks',
        'Fluid Responsive Breakpoints',
        'Performance & Virtual DOM',
      ],
    },
    {
      id: 'backend',
      filterKey: 'BACKEND',
      number: '02',
      domain: 'BACKEND & SERVICES',
      badge: 'SERVER RUNTIME',
      tagline: 'High-throughput APIs, stateless security tokens & server-side middleware pipelines.',
      techs: [
        { name: 'Node.js', role: 'Async Event Loop Engine', highlight: true },
        { name: 'Express.js', role: 'RESTful API Routing', highlight: true },
        { name: 'JWT Authentication', role: 'Token Security & RBAC', highlight: true },
        { name: 'Python', role: 'Scripting & Algorithms', highlight: false },
        { name: 'Java', role: 'OOP & Core Computing', highlight: false },
        { name: 'REST Architecture', role: 'Resource Controller Specs', highlight: false },
      ],
      capabilities: [
        'Middleware Request Pipelines',
        'Stateless Auth & Bearer Tokens',
        'Input Validation & Error Handling',
        'Cross-Origin Security & CORS',
      ],
    },
    {
      id: 'database',
      filterKey: 'DATABASE',
      number: '03',
      domain: 'PERSISTENCE & DATA',
      badge: 'STORAGE LAYER',
      tagline: 'Normalized relational architectures, document structures & type-safe ORM pipelines.',
      techs: [
        { name: 'PostgreSQL', role: 'Primary Relational RDBMS', highlight: true },
        { name: 'Prisma ORM', role: 'Type-Safe Modeling', highlight: true },
        { name: 'MongoDB', role: 'Document Database', highlight: true },
        { name: 'Mongoose', role: 'Schema & Validation', highlight: false },
        { name: 'SQL Query Tuning', role: 'Relational Indexing', highlight: false },
        { name: 'Data Normalization', role: 'Schema Integrity', highlight: false },
      ],
      capabilities: [
        'ACID Transactions & Constraints',
        'Declarative Migration Pipelines',
        'Complex Relational Joins & BSON',
        'Optimized Index Strategies',
      ],
    },
    {
      id: 'workflow',
      filterKey: 'WORKFLOW',
      number: '04',
      domain: 'WORKFLOW & SYSTEMS',
      badge: 'DEVOPS & UNIX',
      tagline: 'UNIX shell automation, continuous integration workflows & AI-augmented development.',
      techs: [
        { name: 'VS Code', role: 'Configured IDE Suite', highlight: false },
        { name: 'Zorin OS / Linux', role: 'Native UNIX Environment', highlight: true },
        { name: 'Git & GitHub Workflows', role: 'Commit-Driven Dev', highlight: true },
        { name: 'GitHub Actions', role: 'CI/CD Automated Deploy', highlight: true },
        { name: 'Claude Code & Codex', role: 'AI-Assisted Engineering', highlight: true },
        { name: 'Vercel Platform', role: 'Edge Deployment', highlight: false },
      ],
      capabilities: [
        'Branching & Release Pipelines',
        'Bash & Linux Shell Scripting',
        'Automated CI Test Builds',
        'Developer Productivity Tooling',
      ],
    },
  ];

  const filteredCategories =
    activeFilter === 'ALL'
      ? stackCategories
      : stackCategories.filter((cat) => cat.filterKey === activeFilter);

  return (
    <>
      <div className="section-header" id="skills" style={{ scrollMarginTop: '80px' }}>
        <span className="section-num">II.</span>
        <span className="section-title-label">Systems · Stacks</span>
        <span className="section-count">002 / 005</span>
      </div>

      <section className="stacks-section fade-in visible">
        <div className="stacks-container">
          
          {/* Header Meta & Filter Toolbar */}
          <div className="stacks-toolbar-wrap">
            <div className="stacks-meta-badge">
              <span className="stacks-meta-dot"></span>
              <span className="stacks-meta-text">ARCHITECTURAL MATRIX · 24+ TECHNOLOGIES</span>
            </div>

            <div className="stacks-filter-nav" role="tablist">
              {['ALL', 'FRONTEND', 'BACKEND', 'DATABASE', 'WORKFLOW'].map((tab) => (
                <button
                  key={tab}
                  className={`stacks-tab-btn ${activeFilter === tab ? 'active' : ''}`}
                  onClick={() => setActiveFilter(tab)}
                  role="tab"
                  aria-selected={activeFilter === tab}
                >
                  {tab === 'ALL' ? '[ ALL STACKS ]' : `[ ${tab} ]`}
                </button>
              ))}
            </div>
          </div>

          {/* Stacks Grid */}
          <div className="stacks-grid">
            {filteredCategories.map((group) => (
              <div className="stack-card" key={group.id}>
                {/* Card Top / Header */}
                <div className="stack-card-header">
                  <div className="stack-card-meta">
                    <span className="stack-card-num">{group.number}</span>
                    <span className="stack-card-badge">{group.badge}</span>
                  </div>
                  <h3 className="stack-card-title">{group.domain}</h3>
                  <p className="stack-card-tagline">{group.tagline}</p>
                </div>

                {/* Primary Tech Stack Grid */}
                <div className="stack-tech-list">
                  {group.techs.map((tech, idx) => (
                    <div
                      key={idx}
                      className={`stack-tech-item ${tech.highlight ? 'highlight' : ''}`}
                      onMouseEnter={() => setHoveredTech(tech.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      <div className="stack-tech-indicator"></div>
                      <div className="stack-tech-info">
                        <span className="stack-tech-name">{tech.name}</span>
                        <span className="stack-tech-role">{tech.role}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Card Footer: Capabilities / Specs */}
                <div className="stack-card-footer">
                  <span className="stack-footer-label">CORE CAPABILITIES</span>
                  <div className="stack-caps-row">
                    {group.capabilities.map((cap, cIdx) => (
                      <span className="stack-cap-tag" key={cIdx}>
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stacks System Footer Callout */}
          <div className="stacks-system-callout">
            <div className="stacks-callout-code">
              <span className="callout-mono-prompt">$</span>
              <span className="callout-mono-cmd">sys_spec --integrity --depth</span>
            </div>
            <p className="stacks-callout-desc">
              "From front-end component state machines to back-end controllers and relational schemas, every layer is engineered with depth, intention, and structural integrity."
            </p>
            <div className="stacks-callout-badges">
              <span className="stacks-badge-item">EST. 20+ REPOSITORIES</span>
              <span className="stacks-badge-item">ZORIN OS / LINUX NATIVE</span>
              <span className="stacks-badge-item">CONTINUOUS DEPLOYMENT</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Skills;
