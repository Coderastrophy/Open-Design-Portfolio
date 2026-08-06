import React from 'react';

const Ticker = () => {
  const items = [
    'GitHub / Coderastrophy',
    'Open to Collaboration',
    'Full-Stack Developer',
    'Based in Addis Ababa · ET',
    'Building for the Web',
    'Open Source Contributor',
    'GitHub / Coderastrophy',
    'Open to Collaboration',
    'Full-Stack Developer',
    'Based in Addis Ababa · ET',
    'Building for the Web',
    'Open Source Contributor',
  ];

  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {items.map((item, idx) => (
          <span className="ticker-item" key={idx}>
            <span>●</span> {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
