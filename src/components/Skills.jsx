import React, { useState, useRef, useMemo } from 'react';

const STACK_ITEMS = [
  // FRONTEND
  {
    id: 'react',
    label: 'React.js 18',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    category: 'FRONTEND',
    role: 'Component Architecture & Hooks',
    spec: 'Virtual DOM, Custom Hooks, State Machines',
  },
  {
    id: 'js',
    label: 'JavaScript (ES6+)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    category: 'FRONTEND',
    role: 'Modern Client Logic & DOM',
    spec: 'Async/Await, Closures, Event Loop',
  },
  {
    id: 'html',
    label: 'HTML5 & Semantics',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    category: 'FRONTEND',
    role: 'Accessible & Semantic Web',
    spec: 'WAI-ARIA, Semantic DOM, Document Flow',
  },
  {
    id: 'css',
    label: 'CSS3 / Grid & Flex',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    category: 'FRONTEND',
    role: 'Fluid Responsive Layouts',
    spec: 'Keyframe Animations, Variables, Media Queries',
  },
  {
    id: 'bootstrap',
    label: 'Bootstrap 5',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
    category: 'FRONTEND',
    role: 'Modular UI Scaffolding',
    spec: 'Utility Classes, Responsive Grid System',
  },
  {
    id: 'vite',
    label: 'Vite & Bundlers',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
    category: 'FRONTEND',
    role: 'Build Tooling & Fast HMR',
    spec: 'ESBuild, Asset Optimization, Tree Shaking',
  },

  // BACKEND
  {
    id: 'node',
    label: 'Node.js Engine',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    category: 'BACKEND',
    role: 'Asynchronous Event-Driven Runtime',
    spec: 'Non-blocking I/O, V8 Engine, Streams',
  },
  {
    id: 'express',
    label: 'Express.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    category: 'BACKEND',
    role: 'RESTful API Routing Engine',
    spec: 'Middleware Pipeline, Controllers, CORS',
  },
  {
    id: 'jwt',
    label: 'JWT Auth',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-plain.svg',
    category: 'BACKEND',
    role: 'Stateless Token Security',
    spec: 'Bearer Auth, Role-Based Access, Crypto Sign',
  },
  {
    id: 'python',
    label: 'Python Systems',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    category: 'BACKEND',
    role: 'Scripting & Core Computing',
    spec: 'Algorithms, Data Structures, Automation',
  },
  {
    id: 'java',
    label: 'Java OOP',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    category: 'BACKEND',
    role: 'Software Engineering & OOP',
    spec: 'Multithreading, Polymorphism, Enterprise Patterns',
  },
  {
    id: 'rest',
    label: 'REST Architecture',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
    category: 'BACKEND',
    role: 'Resource Controller Specs',
    spec: 'Stateless Endpoints, HTTP Status Specs',
  },

  // DATABASE
  {
    id: 'postgres',
    label: 'PostgreSQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    category: 'DATABASE',
    role: 'Relational RDBMS & ACID',
    spec: 'Table Constraints, Foreign Keys, Indexing',
  },
  {
    id: 'prisma',
    label: 'Prisma ORM',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg',
    category: 'DATABASE',
    role: 'Type-Safe Data Modeling',
    spec: 'Declarative Migrations, Relations, Type Safety',
  },
  {
    id: 'mongo',
    label: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    category: 'DATABASE',
    role: 'Document Database & BSON',
    spec: 'Flexible Schemas, Aggregations, Document Trees',
  },
  {
    id: 'mongoose',
    label: 'Mongoose',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg',
    category: 'DATABASE',
    role: 'Schema Validation & Models',
    spec: 'Model Middleware, Hooks, Schema Casting',
  },
  {
    id: 'sql',
    label: 'SQL Optimization',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    category: 'DATABASE',
    role: 'Relational Query Tuning',
    spec: 'Execution Plans, Composite Indexes, Normalization',
  },

  // WORKFLOW
  {
    id: 'vscode',
    label: 'VS Code Suite',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
    category: 'WORKFLOW',
    role: 'Customized Development IDE',
    spec: 'Extensions, Debugger Config, Snippets',
  },
  {
    id: 'linux',
    label: 'Zorin OS / Linux',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
    category: 'WORKFLOW',
    role: 'Native UNIX Environment',
    spec: 'Bash Scripting, Permissions, Kernel Tools',
  },
  {
    id: 'git',
    label: 'Git & GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    category: 'WORKFLOW',
    role: 'Commit-Driven Versioning',
    spec: 'Branching Strategy, PR Workflows, Rebasing',
  },
  {
    id: 'actions',
    label: 'GitHub Actions',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg',
    category: 'WORKFLOW',
    role: 'CI/CD Automated Deployment',
    spec: 'Workflow Pipelines, Automated Builds & Tests',
  },
  {
    id: 'ai',
    label: 'Claude & Codex',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
    category: 'WORKFLOW',
    role: 'AI-Augmented Engineering',
    spec: 'Rapid Architecture Prototyping, Code Refactoring',
  },
  {
    id: 'vercel',
    label: 'Vercel Platform',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
    category: 'WORKFLOW',
    role: 'Edge Platform Deployments',
    spec: 'Serverless Functions, Global CDN, Preview Branches',
  },
];

const CATEGORIES = ['ALL', 'FRONTEND', 'BACKEND', 'DATABASE', 'WORKFLOW'];

const Skills = () => {
  // Pre-select flagship items by default
  const [selected, setSelected] = useState(() => [
    'react',
    'js',
    'vite',
    'node',
    'express',
    'jwt',
    'postgres',
    'prisma',
    'linux',
    'git',
    'actions',
  ]);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [particles, setParticles] = useState([]);
  const [activeHover, setActiveHover] = useState(null);
  const containerRef = useRef(null);

  const spawnParticles = (logo, label, e) => {
    const rect = e?.currentTarget?.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();
    
    // Relative origin coordinates if available
    const originX = rect && containerRect ? (rect.left + rect.width / 2) - containerRect.left : null;
    const originY = rect && containerRect ? (rect.top + rect.height / 2) - containerRect.top : null;

    const newParticles = Array.from({ length: 4 }).map(() => ({
      id: Math.random().toString(36).substring(2, 9),
      logo,
      label,
      xOffset: (Math.random() - 0.5) * 160,
      yOffset: -120 - Math.random() * 80,
      rotate: (Math.random() - 0.5) * 50,
      scale: 1.4 + Math.random() * 0.6,
      originX: originX ?? undefined,
      originY: originY ?? undefined,
    }));

    setParticles((prev) => [...prev, ...newParticles]);

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.some((np) => np.id === p.id)));
    }, 1400);
  };

  const toggleChip = (item, e) => {
    setSelected((prev) => {
      const exists = prev.includes(item.id);
      const updated = exists ? prev.filter((i) => i !== item.id) : [...prev, item.id];
      if (!exists) spawnParticles(item.logo, item.label, e);
      return updated;
    });
  };

  const handleSelectAll = () => {
    setSelected(STACK_ITEMS.map((s) => s.id));
    spawnParticles('https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', 'All');
  };

  const handleClearAll = () => {
    setSelected([]);
  };

  const filteredItems = useMemo(() => {
    if (activeCategory === 'ALL') return STACK_ITEMS;
    return STACK_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Distribute items into 3 staggered rows
  const rows = useMemo(() => {
    const result = [[], [], []];
    filteredItems.forEach((item, index) => {
      result[index % 3].push(item);
    });
    return result;
  }, [filteredItems]);

  const focusedItem = activeHover
    ? STACK_ITEMS.find((s) => s.id === activeHover)
    : STACK_ITEMS.find((s) => s.id === selected[selected.length - 1]) || STACK_ITEMS[0];

  return (
    <>
      <div className="section-header" id="skills" style={{ scrollMarginTop: '80px' }}>
        <span className="section-num">II.</span>
        <span className="section-title-label">Systems · Stacks</span>
        <span className="section-count">002 / 005</span>
      </div>

      <section className="watermelon-chips-section fade-in visible" ref={containerRef}>
        <div className="watermelon-chips-container">
          
          {/* Header & Category Toolbar */}
          <div className="chips-top-toolbar">
            <div className="chips-heading-group">
              <span className="chips-eyebrow">INTERACTIVE CHOICE CHIPS · MULTI-SELECT MATRIX</span>
              <h3 className="chips-main-title">Select & Explore Stack Technologies</h3>
            </div>

            <div className="chips-category-bar" role="tablist">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`chips-category-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  role="tab"
                  aria-selected={activeCategory === cat}
                >
                  {cat === 'ALL' ? `[ ALL (${STACK_ITEMS.length}) ]` : `[ ${cat} ]`}
                </button>
              ))}
            </div>
          </div>

          {/* Fluid Wrapped Choice Chips Cloud (No scrollbars, natural wrap) */}
          <div className="chips-cloud-wrapper">
            {filteredItems.map((item) => {
              const isSelected = selected.includes(item.id);
              return (
                <button
                  key={item.id}
                  onClick={(e) => toggleChip(item, e)}
                  onMouseEnter={() => setActiveHover(item.id)}
                  onMouseLeave={() => setActiveHover(null)}
                  className={`choice-chip-btn ${isSelected ? 'selected' : ''}`}
                  title={`${item.label} (${item.category}) - Click to toggle`}
                >
                  <img
                    src={item.logo}
                    alt={item.label}
                    className="chip-logo"
                    width="20"
                    height="20"
                    loading="lazy"
                  />
                  <span className="chip-label">{item.label}</span>
                  {isSelected && <span className="chip-check-mark">✓</span>}
                </button>
              );
            })}
          </div>

          {/* Floating Logo Particles Layer */}
          <div className="chips-particles-layer" aria-hidden="true">
            {particles.map((p) => (
              <div
                key={p.id}
                className="floating-logo-particle"
                style={{
                  '--x-offset': `${p.xOffset}px`,
                  '--y-offset': `${p.yOffset}px`,
                  '--rotate': `${p.rotate}deg`,
                  '--scale': p.scale,
                  ...(p.originX !== undefined && { left: `${p.originX}px` }),
                  ...(p.originY !== undefined && { top: `${p.originY}px` }),
                }}
              >
                <img src={p.logo} alt="burst" width="32" height="32" />
              </div>
            ))}
          </div>

          {/* Bottom Floating Capsule & Spec Spotlight Drawer */}
          <div className="chips-bottom-panel">
            <div className="chips-capsule-bar">
              <div className="chips-selected-pill">
                <span className="selected-count-dot"></span>
                <span className="selected-count-text">
                  <strong>{selected.length}</strong> / {STACK_ITEMS.length} Technologies Active
                </span>
              </div>

              <div className="chips-action-buttons">
                <button className="chips-action-btn" onClick={handleSelectAll}>
                  Select All
                </button>
                <button className="chips-action-btn" onClick={handleClearAll}>
                  Clear
                </button>
              </div>
            </div>

            {/* Live Spec Spotlight */}
            {focusedItem && (
              <div className="chips-spec-spotlight">
                <div className="spotlight-header">
                  <div className="spotlight-title-group">
                    <img
                      src={focusedItem.logo}
                      alt={focusedItem.label}
                      className="spotlight-logo"
                      width="26"
                      height="26"
                    />
                    <span className="spotlight-name">{focusedItem.label}</span>
                    <span className="spotlight-badge">{focusedItem.category}</span>
                  </div>
                  <span className="spotlight-role">{focusedItem.role}</span>
                </div>
                <div className="spotlight-spec-body">
                  <span className="spotlight-spec-label">ARCHITECTURE //</span>
                  <span className="spotlight-spec-text">{focusedItem.spec}</span>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
};

export default Skills;
