import React, { useEffect } from 'react';

const ProjectModal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="od-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Project Modal"
    >
      <div className="od-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="od-modal-header">
          <div className="od-modal-title-group">
            <h2 className="od-modal-title">Project Details</h2>
          </div>
          <button className="od-modal-close-btn" onClick={onClose} aria-label="Close Modal">
            ✕
          </button>
        </div>

        <div className="od-modal-body">
          <h1>{project.title}</h1>
          {project.liveUrl ? (
            <iframe
              src={project.liveUrl}
              title={project.title}
              style={{ width: '100%', height: '450px', border: 'none' }}
            />
          ) : (
            <div className="tech-stack-display">
              {Array.isArray(project.techStack) ? project.techStack.join(', ') : project.techStack}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
