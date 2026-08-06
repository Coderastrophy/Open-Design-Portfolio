import React, { useState } from 'react';

const ThoughtStream = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const thoughts = [
    {
      id: 1,
      date: '2026-08-04',
      category: 'PHILOSOPHY',
      title: 'Self-Awareness as Cosmological Purpose',
      content:
        'We are not the reason for the existence of the universe, but our ability for self-awareness and reflection makes us special within it. Software is just an executable form of formal logic.',
    },
    {
      id: 2,
      date: '2026-07-29',
      category: 'CINEMA',
      title: 'Tarkovsky & Visual Rhythm in Code',
      content:
        'Sculpting in time isn’t just for cinema. Good UI architecture gives users a sense of weight and temporal rhythm. Every transition should feel deliberate, like a camera move.',
    },
    {
      id: 3,
      date: '2026-07-18',
      category: 'SYSTEMS',
      title: 'Decoupling State from UI Frameworks',
      content:
        'Frameworks come and go, but state management primitives (event loops, pub/sub, immutable streams) remain constant. Always design state logic outside React components before integrating.',
    },
    {
      id: 4,
      date: '2026-06-30',
      category: 'GEOPOLITICS',
      title: 'Digital Sovereignty & Open Infrastructure',
      content:
        'True tech independence requires owning your data pipeline. Local-first software and decentralized protocols are essential defenses against arbitrary platform lock-in.',
    },
    {
      id: 5,
      date: '2026-06-12',
      category: 'PHILOSOPHY',
      title: 'Minimalism as Cognitive Clarity',
      content:
        'Clean borders, warm cream backgrounds, and intentional whitespace are not just visual aesthetics — they reduce cognitive load and keep focus on core ideas.',
    },
  ];

  const categories = ['ALL', 'PHILOSOPHY', 'CINEMA', 'SYSTEMS', 'GEOPOLITICS'];

  const filteredThoughts =
    activeCategory === 'ALL'
      ? thoughts
      : thoughts.filter((t) => t.category === activeCategory);

  return (
    <section className="thought-stream-section section-padding">
      <div className="section-header" id="thoughts">
        <span className="section-num">V.</span>
        <span className="section-title-label">Thought Stream · Micro-Essays</span>
        <span className="section-count">{filteredThoughts.length} NOTES</span>
      </div>

      <div className="thought-stream-container">
        {/* Category Filter Pills */}
        <div className="thought-category-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`thought-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Micro-Feed Grid / Scroll Ticker */}
        <div className="thought-grid">
          {filteredThoughts.map((thought) => (
            <article key={thought.id} className="thought-card fade-in visible">
              <div className="thought-header">
                <span className="thought-tag">{thought.category}</span>
                <time className="thought-date">{thought.date}</time>
              </div>
              <h4 className="thought-title">{thought.title}</h4>
              <p className="thought-content">{thought.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThoughtStream;
