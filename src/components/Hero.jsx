import React from 'react';

const Hero = () => {
  return (
    <section className="hero fade-in" id="hero">
      <div className="hero-left">
        <div className="hero-label">
          <span>●</span> OPEN-SOURCE PORTFOLIO · Nº 01
        </div>
        <div className="hero-title">
          A living archive of<br className="desktop-br" />{' '}
          <em>experiments</em> in<br className="desktop-br" />{' '}
          code, full-stack systems,<br className="desktop-br" />{' '}
          and <em>Stoic-Philosophy</em><br className="desktop-br" />{' '}
          episodes<span className="dot">.</span>
        </div>
        <div className="hero-buttons">
          <a
            className="hero-btn primary-btn"
            href="https://github.com/Coderastrophy"
            target="_blank"
            rel="noreferrer"
          >
            Star on GitHub ↗
          </a>
          <a
            className="hero-btn secondary-btn"
            href="Mickey_Jr_CV.pdf"
            download="Mickey_Jr_CV.pdf"
            title="Download PDF Resume"
          >
            Download CV 📄
          </a>
          <a
            className="hero-btn secondary-btn"
            href="cv.html"
            target="_blank"
            rel="noreferrer"
            title="View Web Resume in Open Design aesthetic"
          >
            Web Resume ↗
          </a>
        </div>
      </div>
      <div className="hero-right-image">
        <div className="hero-right-badge top-left">FIG. 01 / CA-26</div>
        <div className="hero-right-badge bottom-left">SMA · u1tc3d</div>
        <img
          alt="Hero Portrait Light"
          className="theme-img-light"
          src="assets/philosophy.png"
          style={{ filter: 'grayscale(100%)', mixBlendMode: 'multiply' }}
        />
        <img
          alt="Hero Portrait Dark"
          className="theme-img-dark"
          src="assets/darktheme.png"
          style={{ borderRadius: '4px' }}
        />
      </div>
    </section>
  );
};

export default Hero;
