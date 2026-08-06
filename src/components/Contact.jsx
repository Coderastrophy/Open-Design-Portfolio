import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="section-header" id="contact">
        <span className="section-num">IV.</span>
        <span className="section-title-label">Contact · Connect</span>
        <span className="section-count">004 / 005</span>
      </div>
      <section className="contact-section fade-in">
        <div className="contact-left">
          <h2 className="contact-heading">
            Let's build <em>something</em> together.
          </h2>
          <div className="contact-links">
            <a
              className="contact-link"
              href="https://github.com/Coderastrophy"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-link-name">GitHub</span>
              <span className="contact-link-handle">@Coderastrophy ↗</span>
            </a>
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/mikias-abera-b87b71249?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-link-name">LinkedIn</span>
              <span className="contact-link-handle">@Mikias Abera ↗</span>
            </a>
            <a
              className="contact-link"
              href="https://x.com/JrJpassme"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-link-name">Twitter / X</span>
              <span className="contact-link-handle">@Coderastrophy</span>
            </a>
            <a className="contact-link" href="mailto:miguelabera952@gmail.com">
              <span className="contact-link-name">Email</span>
              <span className="contact-link-handle">miguelabera952@gmail.com ↗</span>
            </a>
            <a
              className="contact-link"
              href="Mickey_Jr_CV.pdf"
              download="Mickey_Jr_CV.pdf"
            >
              <span className="contact-link-name">Curriculum Vitae</span>
              <span className="contact-link-handle">Download PDF (2026) 📄</span>
            </a>
            <a
              className="contact-link"
              href="cv.html"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-link-name">Web Resume</span>
              <span className="contact-link-handle">Open Interactive CV ↗</span>
            </a>
          </div>
        </div>
        <div className="contact-right">
          <div className="email-block">
            <div className="email-label">Primary Contact</div>
            <div className="email-addr">
              <a
                className="contact-link"
                href="mailto:miguelabera952@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-name">Email</span>
                <span className="contact-link-handle">miguelabera952@gmail.com ↗</span>
              </a>
            </div>
          </div>
          <div
            style={{
              borderTop: '0.5px solid var(--border)',
              paddingTop: '1.5rem',
              fontFamily: 'var(--mono)',
              fontSize: '10px',
              color: 'var(--ink-3)',
              lineHeight: 1.8,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            Response time · 24–48 hours
            <br />
            Time zone · EAT (UTC+3)
            <br />
            Location · Addis Ababa, ET
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
