import React, { useState, useRef } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('background');
  const hoverTimeoutRef = useRef(null);

  const handleMouseEnter = (tabName) => {
    // Debounce hover activation (120ms delay) to prevent accidental tab flipping during mouse sweeps
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveTab(tabName);
    }, 120);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
  };

  const handleClick = (tabName) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveTab(tabName);
  };

  return (
    <>
      <div className="section-header" id="about" style={{ scrollMarginTop: '80px' }}>
        <span className="section-num">I.</span>
        <span className="section-title-label">About / Profile</span>
        <span className="section-count">001 / 005</span>
      </div>

      <section className="about-tabbed-section fade-in visible">
        <div className="about-tabbed-container">
          
          {/* Horizontal Tab Navigation (Debounced Mouse Hover & Click) */}
          <div className="about-tab-nav" role="tablist">
            <button
              className={`about-tab-btn ${activeTab === 'background' ? 'active' : ''}`}
              onClick={() => handleClick('background')}
              onMouseEnter={() => handleMouseEnter('background')}
              onMouseLeave={handleMouseLeave}
              role="tab"
              aria-selected={activeTab === 'background'}
            >
              [ BACKGROUND ]
            </button>
            <button
              className={`about-tab-btn ${activeTab === 'build' ? 'active' : ''}`}
              onClick={() => handleClick('build')}
              onMouseEnter={() => handleMouseEnter('build')}
              onMouseLeave={handleMouseLeave}
              role="tab"
              aria-selected={activeTab === 'build'}
            >
              [ WHAT I BUILD ]
            </button>
            <button
              className={`about-tab-btn ${activeTab === 'philosophy' ? 'active' : ''}`}
              onClick={() => handleClick('philosophy')}
              onMouseEnter={() => handleMouseEnter('philosophy')}
              onMouseLeave={handleMouseLeave}
              role="tab"
              aria-selected={activeTab === 'philosophy'}
            >
              [ PHILOSOPHY ]
            </button>
          </div>

          {/* Tab Content Panel */}
          <div className="about-tab-panel">
            
            {/* TAB 1: BACKGROUND */}
            {activeTab === 'background' && (
              <div className="tab-pane tab-pane-fade">
                <div className="about-bio-single-col">
                  <span className="tab-pane-label">FIG. 01 / BACKGROUND & IDENTITY</span>
                  <h3 className="about-tab-heading">
                    Building for the web with curiosity, precision, & systems thinking.
                  </h3>
                  <div className="about-bio-text-group">
                    <p className="bento-text">
                      I'm <strong>Mickey Jr</strong>, aka <em>Coderastrophy</em> (he/him) — a developer based in <strong>Ethiopia</strong> building things for the web with curiosity, precision, and a philosophical edge. A <strong>3rd year Computer Science and Engineering student at Adama Science and Technology University</strong>, building a foundation around software development, systems thinking, and continuous learning.
                    </p>
                    <p className="bento-text">
                      I approach everything with depth and intention — from code to film, music, football, and ideas. Rather than surface-level consumption, I tend to study structure, context, and evolution: directors behind films, eras behind football clubs, and ideas behind global systems. This same mindset carries into how I learn technology, favoring long-form resources and conceptual understanding over shortcuts.
                    </p>
                    <div className="bento-text-highlight">
                      <p className="bento-text bento-text-sm" style={{ margin: 0 }}>
                        <strong>“Coderastrophy”</strong> reflects my experimental and builder mindset in programming, while my broader interests in culture, philosophy, and geopolitics reflect a curiosity about how systems shape both technology and society. Outside of academics, I share thoughts and reflections through my Telegram channel.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: WHAT I BUILD */}
            {activeTab === 'build' && (
              <div className="tab-pane tab-pane-fade">
                <div className="about-build-split">
                  <div className="about-build-image-col">
                    <div className="about-build-frame">
                      <img
                        alt="What I Build Preview"
                        className="about-build-img"
                        src="assets/blog1.png"
                      />
                    </div>
                  </div>
                  <div className="about-build-text-col">
                    <span className="tab-pane-label">FIG. 02 / WHAT I BUILD</span>
                    <h3 className="about-tab-heading">Full-Stack Web Systems</h3>
                    <p className="bento-text">
                      I create full-stack web applications across <strong>20+ repositories</strong> ranging from Amazon-style e-commerce clones to crypto dashboards and map-driven applications.
                    </p>
                    <p className="bento-text">
                      Each project is built with a focus on real-world structure, clean component architecture, and responsive user experience rather than superficial UI copies.
                    </p>
                    <div className="about-build-badge-row">
                      <span className="bento-badge">COMMIT-DRIVEN</span>
                      <span className="bento-badge">20+ REPOS</span>
                      <span className="bento-badge">FULL-STACK</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: PHILOSOPHY */}
            {activeTab === 'philosophy' && (
              <div className="tab-pane tab-pane-fade">
                <div className="about-philosophy-centered">
                  <div className="about-philo-image-container">
                    <img
                      alt="Philosophy Light Mode Silhouette"
                      className="about-philo-img theme-img-light"
                      src="assets/philosophy.png"
                    />
                    <img
                      alt="Philosophy Dark Mode Silhouette"
                      className="about-philo-img theme-img-dark"
                      src="assets/darktheme.png"
                    />
                  </div>

                  <blockquote className="about-philo-quote">
                    "We are not the reason for the existence of the universe, but our ability for self-awareness and reflection makes us special within it."
                    <cite className="about-philo-author">— Mickey Jr</cite>
                  </blockquote>

                  <p className="bento-text about-philo-desc">
                    This reflects how I see existence and human potential. The universe does not revolve around us, nor does existence require a cosmic purpose to matter. What makes us remarkable is our ability to observe, question, and reflect — shaping how I approach life and code with curiosity and humility.
                  </p>
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
