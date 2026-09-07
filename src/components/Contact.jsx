import React, { useState, useEffect, useMemo } from 'react';

const CONTACT_CHANNELS = [
  {
    id: 'email',
    category: 'direct',
    badge: 'PRIMARY INBOX',
    badgeIcon: '✉',
    name: 'Email Dispatch',
    value: 'miguelabera952@gmail.com',
    description: 'Direct inquiries, engineering roles, project contracts & collaborations.',
    primaryUrl: 'mailto:miguelabera952@gmail.com',
    primaryLabel: 'Send Email ↗',
    copyable: true,
    copyValue: 'miguelabera952@gmail.com',
  },
  {
    id: 'telegram',
    category: 'direct',
    badge: 'INSTANT CHAT',
    badgeIcon: '✈',
    name: 'Telegram Direct & Channel',
    value: '@Coderastrophy',
    description: 'Direct messaging, real-time dispatches, and micro-essay channel.',
    primaryUrl: 'https://t.me/Coderastrophy',
    primaryLabel: 'Open Telegram ↗',
    copyable: true,
    copyValue: 'https://t.me/Coderastrophy',
  },
  {
    id: 'github',
    category: 'code',
    badge: 'CODE ARCHIVE',
    badgeIcon: '⬡',
    name: 'GitHub Profile',
    value: 'github.com/Coderastrophy',
    description: '21 public repositories, full-stack microservices, geodata tools & commits.',
    primaryUrl: 'https://github.com/Coderastrophy',
    primaryLabel: 'Explore Repos ↗',
    copyable: false,
  },
  {
    id: 'linkedin',
    category: 'code',
    badge: 'PROFESSIONAL',
    badgeIcon: '💼',
    name: 'LinkedIn Network',
    value: 'Mikias Abera (Mickey Jr)',
    description: 'Academic background, software trajectory & professional endorsements.',
    primaryUrl:
      'https://www.linkedin.com/in/mikias-abera-b87b71249?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    primaryLabel: 'Connect on LinkedIn ↗',
    copyable: false,
  },
  {
    id: 'twitter',
    category: 'code',
    badge: 'MICRO-DISPATCH',
    badgeIcon: '𝕏',
    name: 'Twitter / X',
    value: '@Coderastrophy / @JrJpassme',
    description: 'Commentary on web architectures, cinema aesthetics, and tech geopolitics.',
    primaryUrl: 'https://x.com/JrJpassme',
    primaryLabel: 'Follow on X ↗',
    copyable: false,
  },
  {
    id: 'cv-doc',
    category: 'docs',
    badge: 'ACADEMIC SPEC',
    badgeIcon: '📄',
    name: 'Curriculum Vitae (2026)',
    value: 'Mickey_Jr_CV.pdf & Interactive Web Resume',
    description: 'Complete ASTU CSE curriculum coursework, technical skills & project index.',
    primaryUrl: 'Mickey_Jr_CV.pdf',
    primaryLabel: 'Download PDF 📄',
    download: 'Mickey_Jr_CV.pdf',
    secondaryUrl: 'cv.html',
    secondaryLabel: 'Interactive Web CV ↗',
    copyable: false,
  },
];

const Contact = () => {
  const [activeCategory, setActiveCategory] = useState('all'); // 'all' | 'direct' | 'code' | 'docs'
  const [copiedKey, setCopiedKey] = useState(null);
  const [currentTime, setCurrentTime] = useState('');

  // Live Clock in Addis Ababa (EAT, UTC+3)
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
          timeZone: 'Africa/Addis_Ababa',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
        setCurrentTime(timeString);
      } catch {
        const now = new Date();
        setCurrentTime(now.toTimeString().split(' ')[0]);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text, key, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2200);
  };

  const handleCopyBundle = () => {
    const bundle = `=== MICKEY JR (CODERASTROPHY) CONTACT CARD ===
• Name: Mickey Jr / Mikias Abera
• Role: Software Engineer & Web Developer (3rd Year CSE @ ASTU)
• Email: miguelabera952@gmail.com
• Telegram: https://t.me/Coderastrophy
• GitHub: https://github.com/Coderastrophy
• LinkedIn: https://www.linkedin.com/in/mikias-abera-b87b71249
• Location: Addis Ababa / Adama, Ethiopia (UTC+3 EAT)
• Portfolio: https://mikiasabera.vercel.app/
=============================================`;
    handleCopy(bundle, 'bundle');
  };

  const filteredChannels = useMemo(() => {
    if (activeCategory === 'all') return CONTACT_CHANNELS;
    return CONTACT_CHANNELS.filter((c) => c.category === activeCategory);
  }, [activeCategory]);

  const categoryCounts = useMemo(() => {
    return {
      all: CONTACT_CHANNELS.length,
      direct: CONTACT_CHANNELS.filter((c) => c.category === 'direct').length,
      code: CONTACT_CHANNELS.filter((c) => c.category === 'code').length,
      docs: CONTACT_CHANNELS.filter((c) => c.category === 'docs').length,
    };
  }, []);

  return (
    <>
      <div className="section-header" id="contact" style={{ scrollMarginTop: '80px' }}>
        <span className="section-num">VI.</span>
        <span className="section-title-label">Contact · Connect</span>
        <span className="section-count">OPEN DISPATCH</span>
      </div>

      <section className="contact-modern-section fade-in visible">
        <div className="contact-modern-container">
          
          {/* Status & Availability Control Bar */}
          <div className="contact-top-bar">
            <div className="contact-status-left">
              <span className="contact-pulse-beacon">
                <span className="beacon-dot"></span>
                <span className="beacon-ring"></span>
              </span>
              <div className="contact-status-text">
                <span className="contact-status-title">
                  AVAILABLE FOR ROLES &amp; CONTRACTS (2026)
                </span>
                <span className="contact-status-sub">
                  OPEN TO FULL-STACK ENGINEERING, FRONTEND ARCHITECTURE &amp; CONTRACTS
                </span>
              </div>
            </div>

            <div className="contact-top-meta">
              <div className="contact-clock-pill">
                <span className="clock-icon">🕒</span>
                <span className="clock-time">{currentTime || '16:45:00'} EAT</span>
                <span className="clock-tz">(UTC+3 · Addis Ababa)</span>
              </div>
            </div>
          </div>

          {/* Watermelon UI Segmented Choice Chips Channel Filter */}
          <div className="contact-pill-track" role="tablist" aria-label="Contact Channels">
            {[
              { id: 'all', label: 'All Channels', icon: '◈', count: categoryCounts.all },
              { id: 'direct', label: 'Direct Comms', icon: '✉', count: categoryCounts.direct },
              { id: 'code', label: 'Developer Code', icon: '⚡', count: categoryCounts.code },
              { id: 'docs', label: 'Documents & CV', icon: '📄', count: categoryCounts.docs },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`contact-pill-btn ${activeCategory === tab.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(tab.id)}
                role="tab"
                aria-selected={activeCategory === tab.id}
                type="button"
              >
                <span className="contact-pill-icon">{tab.icon}</span>
                <span className="contact-pill-label">{tab.label}</span>
                <span className="contact-pill-count">{tab.count}</span>
              </button>
            ))}
          </div>

          {/* Main Bento Grid: Communication Channels (Left) & Transmission Terminal (Right) */}
          <div className="contact-bento-grid">
            
            {/* LEFT COLUMN: COMMUNICATION CHANNELS */}
            <div className="contact-channels-col">
              <div className="contact-col-heading">
                <div className="col-heading-title">
                  <span className="col-num-tag">FIG. 06</span>
                  <span className="col-title-text">Direct Inquiries &amp; Channels</span>
                </div>
                <span className="contact-channels-count">
                  {filteredChannels.length} Channel{filteredChannels.length === 1 ? '' : 's'} Active
                </span>
              </div>

              <div className="contact-intro-card">
                <h3 className="contact-intro-heading">
                  Let's build <em>enduring systems</em> together.
                </h3>
                <p className="contact-intro-desc">
                  I'm <strong>Mickey Jr</strong> (<em>@Coderastrophy</em>) — 3rd-year Computer Science &amp; Engineering student at ASTU. Whether you're seeking a resilient full-stack builder, exploring architectural design, or discussing tech geopolitics &amp; cinema — I respond to all high-signal dispatches.
                </p>
              </div>

              <div className="contact-cards-stack">
                {filteredChannels.map((ch) => (
                  <div className="contact-channel-card" key={ch.id}>
                    <div className="channel-card-top">
                      <div className="channel-card-badge">
                        <span className="badge-glyph">{ch.badgeIcon}</span>
                        <span className="badge-text">{ch.badge}</span>
                      </div>
                      <span className="channel-id-tag">REF // {ch.id.toUpperCase()}</span>
                    </div>

                    <div className="channel-card-body">
                      <h4 className="channel-name">{ch.name}</h4>
                      <p className="channel-value">{ch.value}</p>
                      <p className="channel-desc">{ch.description}</p>
                    </div>

                    <div className="channel-card-actions">
                      <div className="channel-actions-left">
                        <a
                          href={ch.primaryUrl}
                          target={ch.primaryUrl.startsWith('mailto:') ? '_self' : '_blank'}
                          rel="noreferrer"
                          className="channel-primary-btn"
                          download={ch.download || false}
                        >
                          {ch.primaryLabel}
                        </a>

                        {ch.secondaryUrl && (
                          <a
                            href={ch.secondaryUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="channel-secondary-btn"
                          >
                            {ch.secondaryLabel}
                          </a>
                        )}
                      </div>

                      {ch.copyable && (
                        <button
                          className={`channel-copy-btn ${copiedKey === ch.id ? 'copied' : ''}`}
                          onClick={(e) => handleCopy(ch.copyValue, ch.id, e)}
                          title={`Copy ${ch.name}`}
                          type="button"
                        >
                          <span className="copy-icon">
                            {copiedKey === ch.id ? '✓' : '📋'}
                          </span>
                          <span className="copy-text">
                            {copiedKey === ch.id ? 'COPIED!' : 'COPY'}
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: INTERACTIVE TRANSMISSION TERMINAL & TELEMETRY */}
            <div className="contact-terminal-col">
              <div className="contact-col-heading">
                <div className="col-heading-title">
                  <span className="col-num-tag">FIG. 07</span>
                  <span className="col-title-text">Transmission Console &amp; Specs</span>
                </div>
                <span className="contact-live-beacon-tag">
                  <span className="beacon-mini-dot">●</span> DISPATCH READY
                </span>
              </div>

              <div className="contact-terminal-grid">
                
                {/* TILE 1: FAST EMAIL DISPATCH TERMINAL */}
                <div className="contact-terminal-card featured-terminal">
                  <div className="terminal-card-top">
                    <span className="terminal-tag">
                      <span className="tag-dot">●</span> PRIMARY INBOX TERMINAL
                    </span>
                    <span className="terminal-speed-tag">24–48H SLA</span>
                  </div>

                  <div className="terminal-email-block">
                    <span className="terminal-label">DIRECT EMAIL ADDRESS</span>
                    <a
                      href="mailto:miguelabera952@gmail.com"
                      className="terminal-email-text"
                    >
                      miguelabera952@gmail.com
                    </a>
                  </div>

                  <div className="terminal-quick-actions">
                    <button
                      className={`terminal-copy-action-btn ${copiedKey === 'terminal-email' ? 'active' : ''}`}
                      onClick={() => handleCopy('miguelabera952@gmail.com', 'terminal-email')}
                      type="button"
                    >
                      <span className="btn-icon">
                        {copiedKey === 'terminal-email' ? '✓' : '📋'}
                      </span>
                      <span>
                        {copiedKey === 'terminal-email'
                          ? 'EMAIL COPIED TO CLIPBOARD!'
                          : 'COPY PRIMARY EMAIL'}
                      </span>
                    </button>

                    <button
                      className={`terminal-bundle-btn ${copiedKey === 'bundle' ? 'active' : ''}`}
                      onClick={handleCopyBundle}
                      title="Copy complete contact information bundle"
                      type="button"
                    >
                      <span className="btn-icon">
                        {copiedKey === 'bundle' ? '✓' : '📦'}
                      </span>
                      <span>
                        {copiedKey === 'bundle'
                          ? 'CONTACT BUNDLE COPIED!'
                          : 'COPY COMPLETE VCARD BUNDLE'}
                      </span>
                    </button>
                  </div>
                </div>

                {/* TILE 2: OPERATIONAL & ACADEMIC SPECS */}
                <div className="contact-terminal-card">
                  <div className="terminal-card-top">
                    <span className="terminal-tag">OPERATIONAL SPECIFICATIONS</span>
                    <span className="terminal-sub-tag">ASTU NODE</span>
                  </div>

                  <div className="specs-table">
                    <div className="spec-row">
                      <span className="spec-name">Timezone</span>
                      <span className="spec-val">EAT (UTC+3) · Addis Ababa, Ethiopia</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-name">Academic Station</span>
                      <span className="spec-val">ASTU CSE 3rd Year (BSc Engineering)</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-name">Availability</span>
                      <span className="spec-val spec-highlight">Open for Roles &amp; Contracts</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-name">Work Engagement</span>
                      <span className="spec-val">Remote (Global) / Hybrid / Contract</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-name">Response Guarantee</span>
                      <span className="spec-val">&lt; 24h for high-signal dispatches</span>
                    </div>
                  </div>
                </div>

                {/* TILE 3: COLLABORATION FOCUS AREAS */}
                <div className="contact-terminal-card">
                  <div className="terminal-card-top">
                    <span className="terminal-tag">CORE COLLABORATION AREAS</span>
                    <span className="terminal-sub-tag">TECHNICAL SCOPE</span>
                  </div>

                  <p className="topics-intro">
                    Frequently consulted for full-stack engineering, custom UI architectures, and technical dispatches:
                  </p>

                  <div className="topics-chip-cloud">
                    <span className="topic-chip">#FullStackWeb</span>
                    <span className="topic-chip">#React18_Architecture</span>
                    <span className="topic-chip">#NodeJS_Express</span>
                    <span className="topic-chip">#PostgreSQL_Mongo</span>
                    <span className="topic-chip">#Leaflet_Geodata</span>
                    <span className="topic-chip">#OpenDesign_UI</span>
                    <span className="topic-chip">#SystemsPhilosophy</span>
                    <span className="topic-chip">#CinemaTheory</span>
                  </div>
                </div>

                {/* TILE 4: ENCRYPTION & DIRECT ROUTING NOTE */}
                <div className="contact-terminal-card terminal-footer-card">
                  <div className="encryption-meta">
                    <span className="encryption-icon">🔒</span>
                    <div className="encryption-text">
                      <span className="enc-title">DIRECT ROUTING &amp; DISPATCH PROTOCOL</span>
                      <span className="enc-sub">
                        Transmissions encrypted via standard TLS 1.3 · Node Fingerprint: CA-2026-ASTU
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;
