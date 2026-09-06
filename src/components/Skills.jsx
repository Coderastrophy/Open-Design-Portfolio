import React, { useState } from 'react';

const Skills = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const stackColumns = [
    {
      id: 'frontend',
      number: '01',
      tag: '[ 01 / CLIENT & UI ]',
      title: 'Frontend Interfaces',
      summary: 'Declarative component architecture & responsive design systems.',
      techs: [
        { name: 'React.js', spec: 'v18+ Hooks & State Machine' },
        { name: 'JavaScript', spec: 'Modern ES6+ / Closures / Async' },
        { name: 'HTML5', spec: 'Semantic & Accessible Web' },
        { name: 'CSS3 / Grid', spec: 'Fluid Responsive Layouts' },
        { name: 'Bootstrap 5', spec: 'Modular UI Scaffolding' },
        { name: 'Vite', spec: 'HMR & Build Tooling' },
      ],
      capabilities: ['Virtual DOM', 'State Machines', 'Responsive UI', 'Component Lifecycle'],
    },
    {
      id: 'backend',
      number: '02',
      tag: '[ 02 / SERVER & API ]',
      title: 'Backend Services',
      summary: 'High-concurrency servers, REST routing & stateless auth pipelines.',
      techs: [
        { name: 'Node.js', spec: 'Async Event-Driven Engine' },
        { name: 'Express.js', spec: 'RESTful API Routing Engine' },
        { name: 'JWT Auth', spec: 'Stateless Bearer Security' },
        { name: 'Python', spec: 'Scripting & Core Computing' },
        { name: 'Java', spec: 'OOP & Software Engineering' },
        { name: 'REST APIs', spec: 'Resource Controllers & CORS' },
      ],
      capabilities: ['Middleware Pipelines', 'Stateless Auth', 'Async I/O', 'CORS Security'],
    },
    {
      id: 'database',
      number: '03',
      tag: '[ 03 / DATA & STORAGE ]',
      title: 'Databases & Schemas',
      summary: 'Relational ACID integrity, document collections & type-safe ORMs.',
      techs: [
        { name: 'PostgreSQL', spec: 'Relational RDBMS & ACID' },
        { name: 'Prisma ORM', spec: 'Type-Safe Data Modeling' },
        { name: 'MongoDB', spec: 'Document Data Store' },
        { name: 'Mongoose', spec: 'Schema Validation Models' },
        { name: 'SQL Indexing', spec: 'Relational Query Optimization' },
        { name: 'Data Modeling', spec: 'Schema Normalization' },
      ],
      capabilities: ['ACID Guarantees', 'Schema Migrations', 'Document Trees', 'Index Tuning'],
    },
    {
      id: 'workflow',
      number: '04',
      tag: '[ 04 / TOOLING & UNIX ]',
      title: 'Workflow & Systems',
      summary: 'UNIX environment mastery, automated CI/CD & AI-assisted coding.',
      techs: [
        { name: 'VS Code', spec: 'Customized IDE Suite' },
        { name: 'Zorin OS', spec: 'Native Linux Shell & UNIX' },
        { name: 'Git & GitHub', spec: 'Commit-Driven Development' },
        { name: 'GitHub Actions', spec: 'CI/CD Automated Deploy' },
        { name: 'Claude & Codex', spec: 'AI-Augmented Engineering' },
        { name: 'Vercel', spec: 'Edge Platform Deployments' },
      ],
      capabilities: ['Linux Shell', 'CI/CD Pipelines', 'Git Flow', 'Edge Deployment'],
    },
  ];

  return (
    <>
      <div className="section-header" id="skills" style={{ scrollMarginTop: '80px' }}>
        <span className="section-num">II.</span>
        <span className="section-title-label">Systems · Stacks</span>
        <span className="section-count">002 / 005</span>
      </div>

      <section className="od-stacks-ledger-section fade-in visible">
        <div className="od-stacks-grid">
          {stackColumns.map((col) => (
            <div className="od-stack-column" key={col.id}>
              {/* Column Header */}
              <div className="od-stack-col-head">
                <span className="od-stack-num">{col.number}</span>
                <span className="od-stack-domain-tag">{col.tag}</span>
                <h3 className="od-stack-col-title">{col.title}</h3>
                <p className="od-stack-col-desc">{col.summary}</p>
              </div>

              {/* Stack Item Rows */}
              <div className="od-stack-list">
                {col.techs.map((t, idx) => (
                  <div
                    key={idx}
                    className="od-stack-row"
                    onMouseEnter={() => setHoveredItem(`${col.id}-${idx}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="od-stack-row-main">
                      <span className="od-stack-tech-name">{t.name}</span>
                      <span className="od-stack-tech-spec">{t.spec}</span>
                    </div>
                    <span className="od-stack-arrow">→</span>
                  </div>
                ))}
              </div>

              {/* Column Footer: Capabilities */}
              <div className="od-stack-col-foot">
                <span className="od-stack-foot-label">CAPABILITIES</span>
                <div className="od-stack-pill-wrap">
                  {col.capabilities.map((cap, cIdx) => (
                    <span className="od-stack-pill" key={cIdx}>
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Ledger Summary Bar */}
        <div className="od-stacks-footbar">
          <span className="od-footbar-item">
            <span className="od-footbar-dot"></span>
            SYS-SPEC // FULL-STACK ARCHITECTURAL INTEGRITY
          </span>
          <span className="od-footbar-item">24+ PRODUCTION RUNTIMES & PACKAGES</span>
          <span className="od-footbar-item">COMMIT-DRIVEN · LINUX NATIVE · OPEN SOURCE</span>
        </div>
      </section>
    </>
  );
};

export default Skills;
