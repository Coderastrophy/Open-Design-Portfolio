import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import PrintCVButton from './PrintCVButton';

const Navbar = ({ onNavClick, onOpenCmd }) => {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavClick) {
      onNavClick(targetId);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar-container">
      <a className="nav-logo" href="#" onClick={(e) => handleLinkClick(e, 'hero')}>
        <div className="nav-logo-mark">CA</div>
        Coderastrophy
      </a>

      {/* Desktop navigation links */}
      <ul className="nav-links desktop-only">
        <li>
          <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}>
            Projects
          </a>
        </li>
        <li>
          <a href="#systems" onClick={(e) => handleLinkClick(e, 'systems')}>
            Systems
          </a>
        </li>
        <li>
          <a href="#writing" onClick={(e) => handleLinkClick(e, 'writing')}>
            Blog
          </a>
        </li>
        <li>
          <a href="#thoughts" onClick={(e) => handleLinkClick(e, 'thoughts')}>
            Thoughts
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>
            Contact
          </a>
        </li>
      </ul>

      <div className="nav-actions">
        {/* Export / Print CV Button */}
        <PrintCVButton label="CV 🖨️" />

        {/* CLI Command Palette Trigger Button */}
        <button
          className="cmd-trigger-btn"
          onClick={onOpenCmd}
          title="Open Terminal Command Palette (Ctrl + K)"
        >
          <span className="cmd-trigger-icon">⌘</span>
          <span className="cmd-trigger-text">Ctrl K</span>
        </button>

        {/* Theme Toggle Button */}
        <button
          aria-label="Toggle Dark Mode"
          className="theme-toggle"
          id="theme-toggle"
          onClick={toggleTheme}
        >
          {isDark ? '☀️' : '🌙'}
        </button>

        {/* Mobile Hamburger Menu Toggle Button */}
        <button
          className="mobile-menu-toggle"
          aria-label="Toggle Mobile Navigation Menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <ul className="mobile-nav-links">
            <li>
              <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}>
                Projects
              </a>
            </li>
            <li>
              <a href="#writing" onClick={(e) => handleLinkClick(e, 'writing')}>
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>
                Contact
              </a>
            </li>
            <li>
              <button
                className="cmd-drawer-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCmd();
                }}
              >
                Open Terminal (Ctrl + K) ⌘
              </button>
            </li>
          </ul>
          <div className="mobile-drawer-footer" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a
              className="nav-cta"
              href="cv.html"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              View Web Resume ↗
            </a>
            <a
              className="nav-cta"
              href="Mickey_Jr_CV.pdf"
              download="Mickey_Jr_CV.pdf"
              onClick={() => setMobileMenuOpen(false)}
            >
              Download PDF CV 📄
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
