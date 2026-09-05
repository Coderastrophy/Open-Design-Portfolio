import React, { useState, useEffect } from 'react';

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [activeTab, setActiveTab] = useState('preview'); // 'preview' | 'architecture' | 'readme'
  const [previewMode, setPreviewMode] = useState('live'); // 'live' | 'screenshot'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setActiveTab('preview');
      setPreviewMode(project?.liveUrl ? 'live' : 'screenshot');
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, project]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="od-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} Modal`}
    >
      <div className="od-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="od-modal-header">
          <div className="od-modal-title-group">
            <span className="od-modal-badge">{project.badge}</span>
            <h2 className="od-modal-title">{project.title}</h2>
          </div>
          <button className="od-modal-close-btn" onClick={onClose} aria-label="Close Modal">
            ✕
          </button>
        </div>

        {/* Modal Tab Navigation */}
        <div className="od-modal-tab-nav" role="tablist">
          <button
            className={`od-modal-tab-btn ${activeTab === 'preview' ? 'active' : ''}`}
            onClick={() => setActiveTab('preview')}
            type="button"
          >
            <span>01</span> Interactive Preview
          </button>
          <button
            className={`od-modal-tab-btn ${activeTab === 'architecture' ? 'active' : ''}`}
            onClick={() => setActiveTab('architecture')}
            type="button"
          >
            <span>02</span> Architecture & Tech Spec
          </button>
          {project.readme && (
            <button
              className={`od-modal-tab-btn ${activeTab === 'readme' ? 'active' : ''}`}
              onClick={() => setActiveTab('readme')}
              type="button"
            >
              <span>03</span> Documentation & Modules
            </button>
          )}
        </div>

        {/* Modal Body */}
        <div className="od-modal-body">
          {activeTab === 'preview' && (
            <div>
              {/* Browser toolbar */}
              <div className="od-modal-preview-toolbar">
                <div className="browser-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="browser-address-bar">
                  🔒 {project.liveUrl || project.repoUrl || 'https://coderastrophy.dev'}
                </div>
                {project.liveUrl && (
                  <div className="preview-toggle-group">
                    <button
                      className={`toggle-btn ${previewMode === 'live' ? 'active' : ''}`}
                      onClick={() => setPreviewMode('live')}
                      type="button"
                    >
                      Live App ⚡
                    </button>
                    <button
                      className={`toggle-btn ${previewMode === 'screenshot' ? 'active' : ''}`}
                      onClick={() => setPreviewMode('screenshot')}
                      type="button"
                    >
                      Screenshot
                    </button>
                  </div>
                )}
              </div>

              {/* Display Area */}
              <div className="od-modal-preview-display">
                {project.liveUrl && previewMode === 'live' ? (
                  <div className="iframe-frame">
                    <iframe
                      className="modal-iframe"
                      src={project.liveUrl}
                      title={project.title}
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="screenshot-frame">
                    <img
                      className="modal-screenshot-img"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                )}

                <div className="screenshot-caption">
                  <span>{project.desc}</span>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    {project.liveUrl && (
                      <a
                        className="screenshot-launch-link"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Launch App ⚡ ↗
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        className="screenshot-launch-link"
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--ink)' }}
                      >
                        GitHub Repo ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="architecture-grid">
              <div>
                <div className="arch-heading">TECHNOLOGY STACK</div>
                <div className="tech-tags-list">
                  {project.techStack?.map((tech, idx) => (
                    <span className="tech-tag-item" key={idx}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.architecture && (
                <div>
                  <div className="arch-heading">SYSTEM OVERVIEW</div>
                  <p className="arch-desc">{project.architecture.overview}</p>

                  <div className="arch-subgrid">
                    <div className="arch-card">
                      <div className="arch-heading" style={{ fontSize: '10px' }}>
                        FRONTEND ENGINE
                      </div>
                      <p className="arch-desc" style={{ fontSize: '13px' }}>
                        {project.architecture.frontend}
                      </p>
                    </div>
                    <div className="arch-card">
                      <div className="arch-heading" style={{ fontSize: '10px' }}>
                        BACKEND / PERSISTENCE
                      </div>
                      <p className="arch-desc" style={{ fontSize: '13px' }}>
                        {project.architecture.backend}
                      </p>
                    </div>
                    <div className="arch-card">
                      <div className="arch-heading" style={{ fontSize: '10px' }}>
                        DATA FLOW
                      </div>
                      <p className="arch-desc" style={{ fontSize: '13px' }}>
                        {project.architecture.dataFlow}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {project.features && project.features.length > 0 && (
                <div>
                  <div className="arch-heading">KEY CAPABILITIES</div>
                  <ul style={{ paddingLeft: '1.25rem', lineHeight: '1.8', color: 'var(--ink-2)' }}>
                    {project.features.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {activeTab === 'readme' && project.readme && (
            <div className="architecture-grid">
              <div>
                <div className="arch-heading">SUMMARY</div>
                <p className="arch-desc">{project.readme.summary}</p>
              </div>

              {project.readme.keyModules && (
                <div>
                  <div className="arch-heading">CORE MODULES</div>
                  <ul style={{ paddingLeft: '1.25rem', lineHeight: '1.8', color: 'var(--ink-2)' }}>
                    {project.readme.keyModules.map((mod, idx) => (
                      <li key={idx}>{mod}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.readme.installation && (
                <div>
                  <div className="arch-heading">LOCAL SETUP</div>
                  <div
                    style={{
                      background: 'var(--paper-dark)',
                      padding: '1rem 1.25rem',
                      borderRadius: '6px',
                      fontFamily: 'var(--mono)',
                      fontSize: '12px',
                      lineHeight: '1.7',
                    }}
                  >
                    {project.readme.installation.map((cmd, idx) => (
                      <div key={idx}>$ {cmd}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
