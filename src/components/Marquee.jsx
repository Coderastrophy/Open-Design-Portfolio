import React from 'react';

const Marquee = () => {
  const items = [
    'HTML5',
    'CSS3 + Bootstrap',
    'Vanilla JS',
    'React.js',
    'Node.js',
    'Python',
    'Java',
    'PostgreSQL',
    'Git + GitHub',
    'Vercel',
    'HTML5',
    'CSS3 + Bootstrap',
    'Vanilla JS',
    'React.js',
    'Node.js',
    'Python',
    'Java',
    'PostgreSQL',
    'Git + GitHub',
    'Vercel',
  ];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {items.map((tech, idx) => (
          <span className="marquee-item" key={idx}>
            {tech} <span className="marquee-sep"></span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
