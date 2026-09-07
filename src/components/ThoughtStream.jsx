import React, { useState } from 'react';

const THOUGHTS = [
  {
    id: 1,
    index: '01',
    date: 'AUG 04, 2026',
    category: 'PHILOSOPHY',
    icon: '✦',
    title: 'Self-Awareness as Cosmological Purpose',
    content:
      'We are not the reason for the existence of the universe, but our ability for self-awareness and reflection makes us special within it. Software is just an executable form of formal logic.',
    tags: ['#Cosmology', '#FormalLogic', '#SelfAwareness'],
    ref: 'ASTU-LOG-01',
  },
  {
    id: 2,
    index: '02',
    date: 'JUL 29, 2026',
    category: 'CINEMA',
    icon: '🎬',
    title: 'Tarkovsky & Visual Rhythm in Code',
    content:
      'Sculpting in time isn’t just for cinema. Good UI architecture gives users a sense of weight and temporal rhythm. Every transition should feel deliberate, like an intentional camera move.',
    tags: ['#VisualRhythm', '#TemporalUI', '#CinemaTheory'],
    ref: 'ASTU-LOG-02',
  },
  {
    id: 3,
    index: '03',
    date: 'JUL 18, 2026',
    category: 'SYSTEMS',
    icon: '⚡',
    title: 'Decoupling State from UI Frameworks',
    content:
      'Frameworks come and go, but state management primitives (event loops, pub/sub, immutable streams) remain constant. Always design state logic outside React components before integrating.',
    tags: ['#StateMachines', '#Architecture', '#FirstPrinciples'],
    ref: 'ASTU-LOG-03',
  },
  {
    id: 4,
    index: '04',
    date: 'JUN 30, 2026',
    category: 'GEOPOLITICS',
    icon: '🌐',
    title: 'Digital Sovereignty & Open Infrastructure',
    content:
      'True tech independence requires owning your data pipeline. Local-first software and decentralized protocols are essential defenses against arbitrary platform lock-in and systemic fragility.',
    tags: ['#DigitalSovereignty', '#LocalFirst', '#OpenProtocol'],
    ref: 'ASTU-LOG-04',
  },
  {
    id: 5,
    index: '05',
    date: 'JUN 12, 2026',
    category: 'PHILOSOPHY',
    icon: '✦',
    title: 'Minimalism as Cognitive Clarity',
    content:
      'Clean borders, warm cream backgrounds, and intentional whitespace are not just visual aesthetics — they reduce cognitive load and keep focus laser-sharp on core ideas.',
    tags: ['#CognitiveClarity', '#Minimalism', '#OpenDesign'],
    ref: 'ASTU-LOG-05',
  },
];

const CATEGORIES = [
  { id: 'ALL', label: 'All Dispatches', icon: '◈' },
  { id: 'PHILOSOPHY', label: 'Philosophy', icon: '✦' },
  { id: 'CINEMA', label: 'Cinema', icon: '🎬' },
  { id: 'SYSTEMS', label: 'Systems', icon: '⚡' },
  { id: 'GEOPOLITICS', label: 'Geopolitics', icon: '🌐' },
];

const ThoughtStream = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [copiedId, setCopiedId] = useState(null);

  const filteredThoughts =
    activeCategory === 'ALL'
      ? THOUGHTS
      : THOUGHTS.filter((t) => t.category === activeCategory);

  const handleCopyNote = (thought) => {
    const textToCopy = `"${thought.content}" — Mickey Jr (@Coderastrophy) [${thought.title}]`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(thought.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section className="thought-stream-section section-padding">
      <div className="section-header" id="thoughts" style={{ scrollMarginTop: '80px' }}>
        <span className="section-num">V.</span>
        <span className="section-title-label">Thought Stream · Micro-Essays</span>
        <span className="section-count">{filteredThoughts.length} NOTES</span>
      </div>

      <div className="thought-stream-container">
        
        {/* Editorial Subheader & Telegram Broadcast Meta */}
        <div className="thought-masthead">
          <div className="thought-masthead-left">
            <span className="thought-live-badge">
              <span className="thought-live-dot"></span>
              BROADCAST ARCHIVE
            </span>
            <p className="thought-masthead-desc">
              Concise reflections at the intersection of systems architecture, cinema, and philosophical inquiry.
            </p>
          </div>
          <a
            href="https://t.me/Coderastrophy"
            target="_blank"
            rel="noreferrer"
            className="thought-telegram-btn"
            title="Read full essays on Telegram"
          >
            <span>Telegram Channel</span>
            <span className="tg-arrow">↗</span>
          </a>
        </div>

        {/* Watermelon UI Category Choice Chips */}
        <div className="thought-category-bar" role="tablist" aria-label="Essay Categories">
          {CATEGORIES.map((cat) => {
            const count =
              cat.id === 'ALL'
                ? THOUGHTS.length
                : THOUGHTS.filter((t) => t.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                className={`thought-pill ${isActive ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
                role="tab"
                aria-selected={isActive}
              >
                <span className="thought-pill-icon">{cat.icon}</span>
                <span className="thought-pill-label">{cat.label}</span>
                <span className="thought-pill-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Micro-Essays Bento Feed */}
        <div className="thought-feed-grid">
          {filteredThoughts.map((thought) => (
            <article key={thought.id} className="thought-journal-card fade-in visible">
              
              {/* Card Header */}
              <div className="thought-card-top">
                <div className="thought-card-meta">
                  <span className="thought-index-badge">NOTE {thought.index}</span>
                  <span className="thought-tag-pill">
                    <span className="cat-icon">{thought.icon}</span> {thought.category}
                  </span>
                </div>
                <time className="thought-date-stamp">{thought.date}</time>
              </div>

              {/* Title & Body */}
              <div className="thought-card-main">
                <h4 className="thought-journal-title">{thought.title}</h4>
                <blockquote className="thought-journal-quote">
                  "{thought.content}"
                </blockquote>
              </div>

              {/* Card Footer: Tags & Copy Action */}
              <div className="thought-card-footer">
                <div className="thought-tag-list">
                  {thought.tags.map((tag, idx) => (
                    <span key={idx} className="thought-hash-tag">{tag}</span>
                  ))}
                </div>
                <button
                  className={`thought-copy-btn ${copiedId === thought.id ? 'copied' : ''}`}
                  onClick={() => handleCopyNote(thought)}
                  title="Copy quote with attribution"
                  aria-label="Copy quote text"
                >
                  {copiedId === thought.id ? (
                    <>
                      <span className="copy-icon">✓</span>
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <span className="copy-icon">📋</span>
                      <span>Copy Quote</span>
                    </>
                  )}
                </button>
              </div>

            </article>
          ))}
        </div>

        {/* Bottom Telegram Callout Banner */}
        <div className="thought-channel-banner">
          <div className="channel-banner-icon">🎙️</div>
          <div className="channel-banner-content">
            <h4 className="channel-banner-title">Deep-Dives, Football Tactics & Film Essays</h4>
            <p className="channel-banner-desc">
              Looking for long-form analyses? I write detailed commentary on directorial styles, club eras, and distributed systems on Telegram.
            </p>
          </div>
          <a
            href="https://t.me/Coderastrophy"
            target="_blank"
            rel="noreferrer"
            className="channel-join-btn"
          >
            Join @Coderastrophy ↗
          </a>
        </div>

      </div>
    </section>
  );
};

export default ThoughtStream;
