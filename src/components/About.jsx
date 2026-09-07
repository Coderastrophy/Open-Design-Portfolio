import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('background');

  return (
    <>
      <div className="section-header" id="about" style={{ scrollMarginTop: '80px' }}>
        <span className="section-num">I.</span>
        <span className="section-title-label">About / Profile</span>
        <span className="section-count">001 / 005</span>
      </div>

      <section className="about-modern-section fade-in visible">
        <div className="about-modern-container">
          
          {/* Watermelon UI Segmented Choice Chips Pill Navigator */}
          <div className="about-pill-track" role="tablist" aria-label="Profile Sections">
            <button
              className={`about-pill-btn ${activeTab === 'background' ? 'active' : ''}`}
              onClick={() => setActiveTab('background')}
              role="tab"
              aria-selected={activeTab === 'background'}
              aria-label="Identity and Roots"
            >
              <span className="pill-dot"></span>
              <span className="pill-index">01</span>
              <span className="pill-label">Identity & Roots</span>
            </button>
            <button
              className={`about-pill-btn ${activeTab === 'build' ? 'active' : ''}`}
              onClick={() => setActiveTab('build')}
              role="tab"
              aria-selected={activeTab === 'build'}
              aria-label="Engineering and Craft"
            >
              <span className="pill-dot"></span>
              <span className="pill-index">02</span>
              <span className="pill-label">Engineering & Craft</span>
            </button>
            <button
              className={`about-pill-btn ${activeTab === 'philosophy' ? 'active' : ''}`}
              onClick={() => setActiveTab('philosophy')}
              role="tab"
              aria-selected={activeTab === 'philosophy'}
              aria-label="Philosophy and Mindset"
            >
              <span className="pill-dot"></span>
              <span className="pill-index">03</span>
              <span className="pill-label">Philosophy & Mindset</span>
            </button>
          </div>

          {/* Tab Content Panel */}
          <div className="about-tab-panel">
            
            {/* TAB 1: IDENTITY & ROOTS */}
            {activeTab === 'background' && (
              <div className="tab-pane tab-pane-fade">
                <div className="about-dossier-grid">
                  
                  {/* Left Column: Bio Narrative & Origin Callout */}
                  <div className="about-dossier-narrative">
                    <div className="dossier-status-bar">
                      <span className="dossier-status-pulse">
                        <span className="pulse-dot"></span>
                        <span className="pulse-text">OPEN FOR ROLES & CONTRACTS</span>
                      </span>
                      <span className="dossier-fig-label">FIG. 01 / DOSSIER</span>
                    </div>

                    <h3 className="about-dossier-heading">
                      Building for the web with curiosity, precision, & systems thinking.
                    </h3>

                    <div className="about-dossier-copy">
                      <p className="dossier-para">
                        I'm <strong>Mickey Jr</strong>, known online as <em>Coderastrophy</em> (he/him) — a software engineer and web developer based in <strong>Ethiopia</strong>. Currently in my <strong>3rd year of Computer Science & Engineering at Adama Science and Technology University (ASTU)</strong>, focused on engineering resilient full-stack systems and intuitive user interfaces.
                      </p>
                      <p className="dossier-para">
                        I approach technology with intentional depth — studying the structural context and architectural evolution behind tools rather than stopping at surface-level syntax. That same philosophy extends to how I study cinema, football club eras, and geopolitical systems.
                      </p>
                    </div>

                    {/* Coderastrophy Origin Callout Box */}
                    <div className="coderastrophy-callout-card">
                      <div className="callout-header">
                        <span className="callout-tag">ETHOS // CODERASTROPHY</span>
                        <span className="callout-quote-icon">“</span>
                      </div>
                      <p className="callout-body">
                        <strong>Coderastrophy</strong> reflects an experimental, builder mindset: breaking down complex ideas to engineer something better, while continuously reflecting on how digital architectures shape human society.
                      </p>
                    </div>

                    {/* Meta Hashtags */}
                    <div className="dossier-tag-cloud">
                      <span className="dossier-chip">#SystemsThinking</span>
                      <span className="dossier-chip">#FullStackWeb</span>
                      <span className="dossier-chip">#ASTU_CSE</span>
                      <span className="dossier-chip">#ContinuousLearning</span>
                      <span className="dossier-chip">#Ethiopia</span>
                    </div>
                  </div>

                  {/* Right Column: Spec Dossier Cards Matrix */}
                  <div className="about-dossier-specs">
                    
                    <div className="spec-card">
                      <div className="spec-card-top">
                        <span className="spec-card-icon">🎓</span>
                        <span className="spec-badge">ASTU '26</span>
                      </div>
                      <h4 className="spec-card-title">Computer Science & Engineering</h4>
                      <p className="spec-card-desc">
                        Adama Science & Technology University · 3rd Year B.Sc. candidate building core foundations in algorithms, distributed software, & systems engineering.
                      </p>
                    </div>

                    <div className="spec-card">
                      <div className="spec-card-top">
                        <span className="spec-card-icon">📍</span>
                        <span className="spec-badge">UTC+3 (EAT)</span>
                      </div>
                      <h4 className="spec-card-title">Ethiopia · Global Remote</h4>
                      <p className="spec-card-desc">
                        Based in East Africa with seamless asynchronous and real-time remote collaboration capability across US, European, and Asian time zones.
                      </p>
                    </div>

                    <div className="spec-card">
                      <div className="spec-card-top">
                        <span className="spec-card-icon">🧠</span>
                        <span className="spec-badge">FIRST PRINCIPLES</span>
                      </div>
                      <h4 className="spec-card-title">Deep Conceptual Learning</h4>
                      <p className="spec-card-desc">
                        Favoring official specifications, RFCs, and long-form literature over quick templates and surface-level shortcuts.
                      </p>
                    </div>

                    <div className="spec-card">
                      <div className="spec-card-top">
                        <span className="spec-card-icon">🎙️</span>
                        <span className="spec-badge">TELEGRAM ESSAYS</span>
                      </div>
                      <h4 className="spec-card-title">Culture, Film & Geopolitics</h4>
                      <p className="spec-card-desc">
                        Studying directorial film structures, football tactics, and global socio-economic models, shared via personal reflections.
                      </p>
                    </div>

                  </div>

                </div>
              </div>
            )}

            {/* TAB 2: ENGINEERING & CRAFT */}
            {activeTab === 'build' && (
              <div className="tab-pane tab-pane-fade">
                <div className="about-craft-grid">
                  
                  {/* Left Column: Showcase Mockup & Key Metrics */}
                  <div className="craft-showcase-column">
                    <div className="craft-browser-window">
                      <div className="craft-window-bar">
                        <div className="window-dots">
                          <span className="dot dot-red"></span>
                          <span className="dot dot-yellow"></span>
                          <span className="dot dot-green"></span>
                        </div>
                        <div className="window-url-bar">
                          <span className="url-lock">🔒</span>
                          <span className="url-text">coderastrophy.systems/fullstack-craft</span>
                        </div>
                      </div>
                      <div className="craft-window-body">
                        <img
                          src="assets/blog1.png"
                          alt="Engineering Showcase Preview"
                          className="craft-preview-image"
                          loading="lazy"
                        />
                        <div className="craft-overlay-badge">
                          <span>PRODUCTION ARCHITECTURE</span>
                        </div>
                      </div>
                    </div>

                    {/* Live Metric Counters Bar */}
                    <div className="craft-metrics-strip">
                      <div className="craft-metric-item">
                        <span className="craft-metric-num">20+</span>
                        <span className="craft-metric-lbl">Repositories</span>
                      </div>
                      <div className="craft-metric-item">
                        <span className="craft-metric-num">100%</span>
                        <span className="craft-metric-lbl">Commit-Driven</span>
                      </div>
                      <div className="craft-metric-item">
                        <span className="craft-metric-num">0</span>
                        <span className="craft-metric-lbl">UI Templates</span>
                      </div>
                      <div className="craft-metric-item">
                        <span className="craft-metric-num">Full</span>
                        <span className="craft-metric-lbl">Stack Depth</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Engineering Focus Cards */}
                  <div className="craft-details-column">
                    <div className="craft-header-wrap">
                      <span className="dossier-fig-label">FIG. 02 / CRAFT & SYSTEMS</span>
                      <h3 className="about-dossier-heading">
                        Full-Stack Architecture Built For Real-World Utility.
                      </h3>
                    </div>

                    <div className="craft-pillars-list">
                      <div className="craft-pillar-card">
                        <div className="pillar-index-num">01</div>
                        <div className="pillar-content">
                          <h4 className="pillar-title">Architectural Structure & State Integrity</h4>
                          <p className="pillar-text">
                            Strict component modularity, scalable RESTful routing, and deterministic data flow across complex applications.
                          </p>
                        </div>
                      </div>

                      <div className="craft-pillar-card">
                        <div className="pillar-index-num">02</div>
                        <div className="pillar-content">
                          <h4 className="pillar-title">Functional, Interactive Web Applications</h4>
                          <p className="pillar-text">
                            From e-commerce platforms and cryptocurrency trackers to geolocation workout loggers, every build delivers complete real-world functionality.
                          </p>
                        </div>
                      </div>

                      <div className="craft-pillar-card">
                        <div className="pillar-index-num">03</div>
                        <div className="pillar-content">
                          <h4 className="pillar-title">Tactile UI/UX & High Performance</h4>
                          <p className="pillar-text">
                            Sub-second load times, keyboard-first CLI navigation, responsive layouts, and modern tactile micro-interactions.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="craft-tech-pill-row">
                      <span className="craft-tech-chip">React</span>
                      <span className="craft-tech-chip">Node.js</span>
                      <span className="craft-tech-chip">Express</span>
                      <span className="craft-tech-chip">PostgreSQL</span>
                      <span className="craft-tech-chip">MongoDB</span>
                      <span className="craft-tech-chip">Vite</span>
                      <span className="craft-tech-chip">REST APIs</span>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* TAB 3: PHILOSOPHY & MINDSET */}
            {activeTab === 'philosophy' && (
              <div className="tab-pane tab-pane-fade">
                <div className="about-philosophy-layout">
                  
                  {/* Centerpiece Quote Hero Frame */}
                  <div className="philo-monument-card">
                    <div className="philo-silhouette-wrap">
                      <img
                        alt="Philosophy Light Mode Silhouette"
                        className="philo-silhouette-img theme-img-light"
                        src="assets/philosophy.png"
                      />
                      <img
                        alt="Philosophy Dark Mode Silhouette"
                        className="philo-silhouette-img theme-img-dark"
                        src="assets/darktheme.png"
                      />
                    </div>

                    <div className="philo-quote-container">
                      <span className="philo-glyph">“</span>
                      <blockquote className="philo-lead-quote">
                        We are not the reason for the existence of the universe, but our ability for self-awareness and reflection makes us special within it.
                      </blockquote>
                      <cite className="philo-author-tag">— MICKEY JR / CODERASTROPHY</cite>
                    </div>

                    <p className="philo-manifesto-text">
                      The universe does not revolve around humanity, nor does existence require cosmic purpose to hold profound value. What makes us remarkable is our capacity to observe, question, and reflect. This worldview drives my approach to both software engineering and life: with deep curiosity, radical humility, and intentional execution.
                    </p>
                  </div>

                  {/* 3 Core Philosophical Axiom Cards */}
                  <div className="philo-axioms-grid">
                    <div className="axiom-card">
                      <div className="axiom-header">
                        <span className="axiom-roman">I.</span>
                        <h4 className="axiom-title">Cosmic Humility</h4>
                      </div>
                      <p className="axiom-body">
                        Recognizing our smallness frees us from pretension, allowing us to build with patience, honest inquiry, and respect for fundamental laws.
                      </p>
                    </div>

                    <div className="axiom-card">
                      <div className="axiom-header">
                        <span className="axiom-roman">II.</span>
                        <h4 className="axiom-title">Structural Curiosity</h4>
                      </div>
                      <p className="axiom-body">
                        Looking beneath the surface of systems — whether distributed codebases, film movements, or geopolitics — to master how they truly function.
                      </p>
                    </div>

                    <div className="axiom-card">
                      <div className="axiom-header">
                        <span className="axiom-roman">III.</span>
                        <h4 className="axiom-title">Intentional Craft</h4>
                      </div>
                      <p className="axiom-body">
                        Treating code as a discipline of clarity and intention, choosing robust conceptual understanding over disposable shortcuts.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            )}

          </div>

        </div>
      </section>
    </>
  );
};

export default About;
