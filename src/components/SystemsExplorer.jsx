import React, { useState } from 'react';

const SystemsExplorer = () => {
  const [activeNode, setActiveNode] = useState('client'); // 'client' | 'api' | 'database'
  const [hoveredNode, setHoveredNode] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationStep, setSimulationStep] = useState(null);

  const nodes = {
    client: {
      id: 'client',
      title: 'Client / React Layer',
      subtitle: 'User Interface & State Machine',
      badge: 'FRONTEND',
      icon: '⚡',
      tech: ['React 18', 'Vite', 'Custom Hooks', 'Virtual DOM', 'CSS Modules'],
      specs: {
        role: 'Client-side rendering, user interaction, state orchestration, UI component lifecycle.',
        dataSent: 'HTTP REST / GraphQL Requests, WebSocket subscriptions, JWT Authorization tokens.',
        dataReceived: 'JSON Payloads, state hydration objects, optimistic UI updates.',
        latency: '~15ms component render time',
      },
    },
    api: {
      id: 'api',
      title: 'API / Node.js & Express',
      subtitle: 'Backend Microservice & Controller',
      badge: 'SERVER',
      icon: '⚙️',
      tech: ['Node.js', 'Express', 'JWT Auth', 'Middleware', 'REST / CORS'],
      specs: {
        role: 'Business logic execution, authentication, payload validation, middleware pipeline.',
        dataSent: 'SQL / NoSQL Queries to database, sanitized JSON responses to client.',
        dataReceived: 'Client HTTP requests, DB query response tuples & document streams.',
        latency: '~45ms server processing window',
      },
    },
    database: {
      id: 'database',
      title: 'Database / PostgreSQL & Mongo',
      subtitle: 'Relational & Document Store',
      badge: 'PERSISTENCE',
      icon: '🗄️',
      tech: ['PostgreSQL', 'MongoDB', 'Redis Cache', 'Prisma ORM', 'Connection Pool'],
      specs: {
        role: 'ACID transactional data storage, indexed query evaluation, in-memory caching.',
        dataSent: 'Raw record rows, aggregated BSON documents, cached key-value store hits.',
        dataReceived: 'Parametrized SQL queries, insert/update operations, connection heartbeats.',
        latency: '~8ms query evaluation time',
      },
    },
  };

  const activeNodeData = nodes[hoveredNode || activeNode] || nodes.client;

  // Connection hover highlights
  const isConn1Active =
    hoveredNode === 'client' ||
    hoveredNode === 'api' ||
    activeNode === 'client' ||
    activeNode === 'api' ||
    simulationStep === 'c2a' ||
    simulationStep === 'a2c';

  const isConn2Active =
    hoveredNode === 'api' ||
    hoveredNode === 'database' ||
    activeNode === 'api' ||
    activeNode === 'database' ||
    simulationStep === 'a2d' ||
    simulationStep === 'd2a';

  // Trigger request flow simulation animation
  const handleRunSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveNode('client');
    setSimulationStep('c2a');

    setTimeout(() => {
      setActiveNode('api');
      setSimulationStep('a2d');
    }, 800);

    setTimeout(() => {
      setActiveNode('database');
      setSimulationStep('d2a');
    }, 1600);

    setTimeout(() => {
      setActiveNode('api');
      setSimulationStep('a2c');
    }, 2400);

    setTimeout(() => {
      setActiveNode('client');
      setSimulationStep(null);
      setIsSimulating(false);
    }, 3200);
  };

  return (
    <section className="systems-explorer-wrapper section-padding">
      <div className="section-header" id="systems">
        <span className="section-num">IV.</span>
        <span className="section-title-label">Systems & Architecture Explorer</span>
        <button
          className={`simulate-flow-btn ${isSimulating ? 'running' : ''}`}
          onClick={handleRunSimulation}
          disabled={isSimulating}
        >
          {isSimulating ? 'Simulating Payload Flow...' : '▶ Simulate Request Cycle'}
        </button>
      </div>

      <div className="systems-explorer-container">
        {/* Intro subtitle */}
        <div className="systems-intro-bar">
          <p className="systems-subhead">
            Interactive visual mapping of full-stack data flow, API protocols, and architectural separation of concerns.
          </p>
          <div className="systems-legend">
            <span className="legend-item"><span className="legend-dot active" /> Selected Layer</span>
            <span className="legend-item"><span className="legend-line pulse" /> Active Connection</span>
          </div>
        </div>

        {/* Dynamic Visual Nodes Diagram */}
        <div className="systems-diagram-board">
          {/* Node 1: Client */}
          <div
            className={`system-node-card ${activeNode === 'client' ? 'active' : ''} ${
              hoveredNode === 'client' ? 'hovered' : ''
            }`}
            onClick={() => setActiveNode('client')}
            onMouseEnter={() => setHoveredNode('client')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div className="node-badge-tag">{nodes.client.badge}</div>
            <div className="node-icon-wrapper">{nodes.client.icon}</div>
            <h3 className="node-title">{nodes.client.title}</h3>
            <p className="node-subtitle">{nodes.client.subtitle}</p>
            <div className="node-tech-pills">
              {nodes.client.tech.slice(0, 3).map((t, idx) => (
                <span key={idx} className="pill">{t}</span>
              ))}
            </div>
          </div>

          {/* Connection Bridge 1: Client ↔ API */}
          <div className={`connection-bridge ${isConn1Active ? 'active' : ''}`}>
            <div className="bridge-line">
              {simulationStep === 'c2a' && <span className="particle forward" />}
              {simulationStep === 'a2c' && <span className="particle backward" />}
            </div>
            <div className="bridge-label">
              <span>HTTP / REST</span>
              <span className="bridge-arrow">⇄</span>
            </div>
          </div>

          {/* Node 2: API Server */}
          <div
            className={`system-node-card ${activeNode === 'api' ? 'active' : ''} ${
              hoveredNode === 'api' ? 'hovered' : ''
            }`}
            onClick={() => setActiveNode('api')}
            onMouseEnter={() => setHoveredNode('api')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div className="node-badge-tag">{nodes.api.badge}</div>
            <div className="node-icon-wrapper">{nodes.api.icon}</div>
            <h3 className="node-title">{nodes.api.title}</h3>
            <p className="node-subtitle">{nodes.api.subtitle}</p>
            <div className="node-tech-pills">
              {nodes.api.tech.slice(0, 3).map((t, idx) => (
                <span key={idx} className="pill">{t}</span>
              ))}
            </div>
          </div>

          {/* Connection Bridge 2: API ↔ Database */}
          <div className={`connection-bridge ${isConn2Active ? 'active' : ''}`}>
            <div className="bridge-line">
              {simulationStep === 'a2d' && <span className="particle forward" />}
              {simulationStep === 'd2a' && <span className="particle backward" />}
            </div>
            <div className="bridge-label">
              <span>SQL / BSON</span>
              <span className="bridge-arrow">⇄</span>
            </div>
          </div>

          {/* Node 3: Database */}
          <div
            className={`system-node-card ${activeNode === 'database' ? 'active' : ''} ${
              hoveredNode === 'database' ? 'hovered' : ''
            }`}
            onClick={() => setActiveNode('database')}
            onMouseEnter={() => setHoveredNode('database')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div className="node-badge-tag">{nodes.database.badge}</div>
            <div className="node-icon-wrapper">{nodes.database.icon}</div>
            <h3 className="node-title">{nodes.database.title}</h3>
            <p className="node-subtitle">{nodes.database.subtitle}</p>
            <div className="node-tech-pills">
              {nodes.database.tech.slice(0, 3).map((t, idx) => (
                <span key={idx} className="pill">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Inspector Panel */}
        <div className="systems-inspector-panel fade-in">
          <div className="inspector-header">
            <div className="inspector-title-group">
              <span className="inspector-badge">{activeNodeData.badge} INSPECTOR</span>
              <h4 className="inspector-node-name">{activeNodeData.title}</h4>
            </div>
            <span className="inspector-latency">⚡ Latency Benchmark: {activeNodeData.specs.latency}</span>
          </div>

          <div className="inspector-grid">
            <div className="inspector-col">
              <h5>ARCHITECTURAL RESPONSIBILITY</h5>
              <p>{activeNodeData.specs.role}</p>
            </div>

            <div className="inspector-col">
              <h5>OUTBOUND DATA PAYLOAD</h5>
              <p>{activeNodeData.specs.dataSent}</p>
            </div>

            <div className="inspector-col">
              <h5>INBOUND PROTOCOLS</h5>
              <p>{activeNodeData.specs.dataReceived}</p>
            </div>
          </div>

          <div className="inspector-tech-footer">
            <span className="tech-footer-label">COMPLETE STACK MATRIX:</span>
            <div className="tech-footer-pills">
              {activeNodeData.tech.map((item, idx) => (
                <span key={idx} className="footer-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemsExplorer;
