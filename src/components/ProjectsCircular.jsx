import React, { useState, useEffect, useRef } from 'react';

const ProjectsCircular = ({ projectsData, onOpenModal }) => {
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeProject, setActiveProject] = useState(projectsData[0] || null);
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Auto-rotate the circular orbit
  useEffect(() => {
    let lastTime = performance.now();
    const animate = (now) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;
      if (!isPaused) {
        setRotation((prev) => (prev + delta * 0.2) % (Math.PI * 2));
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused]);

  // Canvas 3D Dot Sphere rendering (matching reference image)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let globeAngle = rotation * 1.5;

    const width = (canvas.width = 380);
    const height = (canvas.height = 380);
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 150;

    // Generate latitude/longitude dots
    const dots = [];
    const latCount = 28;
    const lonCount = 50;

    for (let i = 0; i < latCount; i++) {
      const lat = (Math.PI * (i + 0.5)) / latCount - Math.PI / 2;
      for (let j = 0; j < lonCount; j++) {
        const lon = (Math.PI * 2 * j) / lonCount;
        dots.push({ lat, lon });
      }
    }

    // Glowing green nodes on globe
    const greenNodes = [
      { lat: 0.3, lon: 0.5 },
      { lat: 0.6, lon: 2.1 },
      { lat: -0.4, lon: 1.2 },
      { lat: 0.1, lon: 3.8 },
      { lat: -0.7, lon: 4.5 },
      { lat: 0.45, lon: 5.2 },
    ];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle background glow for the sphere
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.2,
        centerX,
        centerY,
        radius * 1.1
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      gradient.addColorStop(0.7, 'rgba(240, 238, 230, 0.6)');
      gradient.addColorStop(1, 'rgba(220, 215, 200, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.05, 0, Math.PI * 2);
      ctx.fill();

      // Render dot matrix
      dots.forEach(({ lat, lon }) => {
        const currentLon = lon + globeAngle;
        const x = radius * Math.cos(lat) * Math.sin(currentLon);
        const y = radius * Math.sin(lat);
        const z = radius * Math.cos(lat) * Math.cos(currentLon);

        if (z > -10) {
          const alpha = Math.max(0.1, (z + radius) / (2 * radius));
          const dotSize = Math.max(0.8, (z + radius) / (2 * radius) * 1.8);
          ctx.fillStyle = `rgba(30, 30, 30, ${alpha * 0.4})`;
          ctx.beginPath();
          ctx.arc(centerX + x, centerY + y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Render glowing orange location nodes
      greenNodes.forEach(({ lat, lon }) => {
        const currentLon = lon + globeAngle;
        const x = radius * Math.cos(lat) * Math.sin(currentLon);
        const y = radius * Math.sin(lat);
        const z = radius * Math.cos(lat) * Math.cos(currentLon);

        if (z > 0) {
          ctx.shadowColor = '#ff5722';
          ctx.shadowBlur = 12;
          ctx.fillStyle = '#ff5722';
          ctx.beginPath();
          ctx.arc(centerX + x, centerY + y, 5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });
    };

    render();
  }, [rotation]);

  const total = projectsData.length;
  const orbitRadius = 260;

  return (
    <div className="circular-projects-container fade-in visible">
      <div
        className="orbit-stage"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background Orbit Ring */}
        <div className="orbit-path-ring" />

        {/* Central Dot Sphere Canvas */}
        <div className="sphere-canvas-wrapper">
          <canvas ref={canvasRef} className="sphere-canvas" />
        </div>

        {/* Orbiting Project Nodes */}
        {projectsData.map((project, index) => {
          const angle = (index / total) * Math.PI * 2 + rotation;
          const x = Math.cos(angle) * orbitRadius;
          const y = Math.sin(angle) * orbitRadius;
          const isActive = activeProject && activeProject.num === project.num;

          return (
            <div
              key={project.num}
              className={`orbit-node-item ${isActive ? 'active' : ''}`}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              onClick={() => setActiveProject(project)}
            >
              <div className="orbit-node-inner">
                <img src={project.image} alt={project.title} />
                <span className="orbit-node-num">{project.num}</span>
              </div>
              <div className="orbit-node-label">
                <span className="node-badge">{project.badge}</span>
                <span className="node-title">{project.title}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Project Card Preview Overlay */}
      {activeProject && (
        <div className="orbit-project-details-card fade-in">
          <div className="op-header">
            <div className="op-num">{activeProject.num}</div>
            <div className="op-badge">{activeProject.badge}</div>
          </div>
          <h3 className="op-title">{activeProject.title}</h3>
          <p className="op-desc">{activeProject.desc}</p>
          <div
            className="op-preview-canvas"
            onClick={() => onOpenModal && onOpenModal(activeProject)}
            style={{ cursor: 'pointer' }}
            title="Click to launch Live Demo & Zoom preview"
          >
            <img src={activeProject.image} alt={activeProject.title} />
          </div>
          <div style={{ display: 'flex', gap: '8px', width: '100%', marginTop: '0.75rem' }}>
            <button
              onClick={() => onOpenModal && onOpenModal(activeProject)}
              className="op-link-btn"
              style={{ flex: 1, background: 'var(--ink)', color: 'var(--paper)', border: 'none', cursor: 'pointer' }}
            >
              {activeProject.liveUrl ? 'LIVE DEMO ⚡' : 'DETAILS 👁️'}
            </button>
            <a
              href={activeProject.url}
              target="_blank"
              rel="noreferrer"
              className="op-link-btn"
              style={{ flex: 1, textAlign: 'center' }}
            >
              REPO <span>→</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsCircular;
