import React, { useState } from 'react';
import ProjectsCircular from './ProjectsCircular';
import ProjectFilter from './ProjectFilter';
import ProjectModal from './ProjectModal';

const Projects = ({ onSelectProject }) => {
  const [viewMode, setViewMode] = useState('circular'); // 'circular' | 'grid'
  const [activeTag, setActiveTag] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalProject, setModalProject] = useState(null);

  const projectsData = [
    {
      num: '01',
      id: 'crypto-dashboard',
      title: 'Finance Dashboard',
      badge: 'CRYPTO',
      tags: ['CRYPTO', 'FULL-STACK', 'REACT'],
      desc: 'A live cryptocurrency tracking dashboard with price data, market trends, and a clean visual interface.',
      description: 'A live cryptocurrency tracking dashboard with price data, market trends, and a clean visual interface.',
      image: 'assets/crypto.png',
      url: 'https://github.com/Coderastrophy/Crypto-dashboard',
      repoUrl: 'https://github.com/Coderastrophy/Crypto-dashboard',
      liveUrl: null,
      techStack: ['React 18', 'Vite', 'Tailwind CSS', 'Coingecko API', 'Chart.js'],
      readme: {
        title: 'Finance Dashboard — Crypto Telemetry & Market Tracker',
        summary: 'A high-performance cryptocurrency monitoring dashboard built with React 18, Coingecko Telemetry API, and Chart.js. Features real-time price feeds, candlestick charts, watchlist persistence, and instant keyword filtering.',
        installation: [
          'git clone https://github.com/Coderastrophy/Crypto-dashboard.git',
          'cd Crypto-dashboard',
          'npm install',
          'npm run dev'
        ],
        keyModules: [
          'CoinGecko Telemetry API Integration with rate-limit caching',
          'Chart.js Candlestick & Historical Trend Rendering',
          'Debounced Search & Tag Filtering Pipeline',
          'LocalStorage Watchlist & Portfolio State Machine'
        ]
      },
      architecture: {
        overview: 'Decoupled frontend dashboard communicating with CoinGecko crypto telemetry APIs via custom async hooks.',
        frontend: 'React state engine with debounced search filters and dynamic visual chart rendering.',
        backend: 'Client-side REST data fetching with persistent browser state fallback.',
        dataFlow: 'Bi-directional state updates linking live search inputs with historical candlestick chart streams.',
      },
      features: [
        'Real-time price trend indicators and crypto telemetry tracking.',
        'Interactive candlestick and historical performance charts.',
        'Zero-latency filter bar matching assets by tag or name.',
        'Minimalist dark/light Open Design aesthetic integration.',
      ],
    },
    {
      num: '02',
      id: 'amazon-cart',
      title: 'Cart',
      badge: 'COMMERCE',
      tags: ['COMMERCE', 'FULL-STACK', 'REACT', 'NODE'],
      desc: 'A full-stack e-commerce simulation with authentic shopping cart architecture and modern UI integration.',
      description: 'A full-stack e-commerce simulation with authentic shopping cart architecture and modern UI integration.',
      image: 'assets/amazon.png',
      url: 'https://github.com/Coderastrophy/Amazon-clone',
      repoUrl: 'https://github.com/Coderastrophy/Amazon-clone',
      liveUrl: null,
      techStack: ['React.js', 'Node.js', 'Express', 'Context API', 'Stripe Auth'],
      readme: {
        title: 'Cart — Full-Stack E-Commerce & Transaction Engine',
        summary: 'An authentic e-commerce cart architecture simulating checkout workflows, dynamic subtotal calculations, Stripe payment processing, and React Context API item state management.',
        installation: [
          'git clone https://github.com/Coderastrophy/Amazon-clone.git',
          'cd Amazon-clone',
          'npm install',
          'npm run dev'
        ],
        keyModules: [
          'React Context API Cart Reducer & Total Calculator',
          'Stripe Auth & Payment Gateway Simulation',
          'Express.js Order Validation Endpoint',
          'Responsive Product Catalog & Category Tagging'
        ]
      },
      architecture: {
        overview: 'Full-stack commercial transaction simulator implementing immutable shopping cart reducers and REST backend.',
        frontend: 'React Context API managing persistent cart state and item quantity calculations.',
        backend: 'Express.js API routing handling order submission and payload validation.',
        dataFlow: 'Redux-like dispatch pattern syncing cart quantities across UI components.',
      },
      features: [
        'Authentic shopping cart state machine with instant total calculation.',
        'Modular product card grid with dynamic category tagging.',
        'Mock checkout workflow with transaction response simulation.',
      ],
    },
    {
      num: '03',
      id: 'mapty',
      title: 'Mapty Tracking',
      badge: 'GEODATA',
      tags: ['GEODATA', 'FRONTEND', 'JS'],
      desc: 'A workout tracker that logs running and cycling sessions on an interactive map using OOP principles.',
      description: 'A workout tracker that logs running and cycling sessions on an interactive map using OOP principles.',
      image: 'assets/Mapty.png',
      url: 'https://github.com/Coderastrophy/Leaflet-routing',
      repoUrl: 'https://github.com/Coderastrophy/Leaflet-routing',
      liveUrl: 'https://leaflet-routing-red.vercel.app/',
      techStack: ['JavaScript ES6+', 'Leaflet.js', 'OOP Architecture', 'Geolocation API', 'LocalStorage'],
      readme: {
        title: 'Mapty Tracking — Spatial Geolocation & Workout Tracker',
        summary: 'Object-Oriented JavaScript spatial workout tracker deployed live on Vercel. Utilizes Leaflet.js maps and HTML5 Geolocation API to record user running/cycling workouts with coordinate tracking.',
        installation: [
          'git clone https://github.com/Coderastrophy/Leaflet-routing.git',
          'cd Leaflet-routing',
          'open index.html'
        ],
        keyModules: [
          'Leaflet.js Map Rendering Engine & Pin Placement',
          'Object-Oriented Classes (App, Workout, Running, Cycling)',
          'HTML5 Geolocation Telemetry Sync',
          'Browser LocalStorage Session Persistence'
        ]
      },
      architecture: {
        overview: 'Object-Oriented JavaScript application using Leaflet maps to log spatial telemetry data.',
        frontend: 'Vanilla JS OOP classes (App, Workout, Running, Cycling) enforcing clean abstraction.',
        backend: 'Browser Geolocation API + LocalStorage for client-side persistence.',
        dataFlow: 'User map clicks emit spatial coordinates to create workout objects rendered on map layers.',
      },
      features: [
        'Interactive Leaflet pin positioning with route calculation.',
        'Workout breakdown (pace, cadence, elevation gain) logged per session.',
        'Persistent workout history across browser sessions.',
      ],
    },
    {
      num: '04',
      id: 'poplogue',
      title: 'PopLogue',
      badge: 'CINEMA',
      tags: ['CINEMA', 'FULL-STACK', 'REACT'],
      desc: 'A pop-culture and cinema tracking application for logging, discovering, and reflecting on films and media.',
      description: 'A pop-culture and cinema tracking application for logging, discovering, and reflecting on films and media.',
      image: 'assets/poplogue.png',
      url: 'https://github.com/Coderastrophy/PopLogue',
      repoUrl: 'https://github.com/Coderastrophy/PopLogue',
      liveUrl: 'https://pop-logue.vercel.app/',
      techStack: ['React 18', 'OMDB / TMDB API', 'CSS Modules', 'Custom Hooks'],
      readme: {
        title: 'PopLogue — Cinema Telemetry & Film Journal App',
        summary: 'A cinema discovery and film reflection journal app deployed live on Vercel. Features live OMDB/TMDB API querying, watched list tracking, personal review logging, and custom rating scales.',
        installation: [
          'git clone https://github.com/Coderastrophy/PopLogue.git',
          'cd PopLogue',
          'npm install',
          'npm run dev'
        ],
        keyModules: [
          'Live TMDB/OMDB API Search Pipeline',
          'Watched Film List & Rating State Engine',
          'Debounced Search Filter with Rate Limit Protection',
          'Responsive Cinema Media Grid Layout'
        ]
      },
      architecture: {
        overview: 'Cinema media reflection log querying public movie metadata APIs with custom user ratings.',
        frontend: 'Component hierarchy separating movie search results, watched lists, and rating modal dialogs.',
        backend: 'Async API integration with key caching to prevent API rate limits.',
        dataFlow: 'Search query state triggers debounced API requests to render interactive poster cards.',
      },
      features: [
        'Comprehensive cinema search with rating and review logging.',
        'Personal film reflection journal with metadata breakdown.',
        'Sleek responsive card interface for film discovery.',
      ],
    },
    {
      num: '05',
      id: 'neuranets',
      title: 'NeuraNets',
      badge: 'BLOG SYSTEM',
      tags: ['BLOG SYSTEM', 'FULL-STACK', 'NODE'],
      desc: 'Exploration into neural network fundamentals — training and visualizing networks bridging code and cognition.',
      description: 'Exploration into neural network fundamentals — training and visualizing networks bridging code and cognition.',
      image: 'assets/NeuraNets.png',
      url: 'https://github.com/Coderastrophy/NeuraNets-BCMS',
      repoUrl: 'https://github.com/Coderastrophy/NeuraNets-BCMS',
      liveUrl: null,
      techStack: ['Node.js', 'Express', 'EJS Templating', 'Prisma', 'PostgreSQL'],
      readme: {
        title: 'NeuraNets — Neural Network BCMS & Cognitive Node Explorer',
        summary: 'A full-stack blog content management system exploring machine learning neural networks. Built with Node/Express, PostgreSQL via Prisma ORM, and client-side HTML5 canvas node telemetry visualizer.',
        installation: [
          'git clone https://github.com/Coderastrophy/NeuraNets-BCMS.git',
          'cd NeuraNets-BCMS',
          'npm install',
          'npx prisma migrate dev',
          'npm start'
        ],
        keyModules: [
          'Node.js & Express Controller Architecture',
          'Prisma ORM with Relational PostgreSQL Models',
          'Interactive HTML5 Canvas Neural Node Graph',
          'Full CRUD Content Management Engine'
        ]
      },
      architecture: {
        overview: 'Full-stack blog content management system exploring neural network cognitive concepts.',
        frontend: 'Templated server-rendered pages and interactive JavaScript visualization scripts.',
        backend: 'Express controller architecture linked to PostgreSQL relational models.',
        dataFlow: 'REST endpoints performing CRUD operations on blog posts and neural network model records.',
      },
      features: [
        'Neural network visualization dashboard showing weights and nodes.',
        'Full CRUD content management interface.',
        'PostgreSQL relational schema for structured article metadata.',
      ],
    },
  ];

  // Filtering logic
  const filteredProjects = projectsData.filter((project) => {
    const matchesTag =
      activeTag === 'ALL' ||
      project.badge === activeTag ||
      (project.tags && project.tags.includes(activeTag));
    const matchesSearch =
      !searchQuery ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <>
      <div className="section-header" id="projects">
        <span className="section-num">III.</span>
        <span className="section-title-label">Projects · Work</span>
        <div className="view-mode-toggle">
          <button
            className={`view-btn ${viewMode === 'circular' ? 'active' : ''}`}
            onClick={() => setViewMode('circular')}
            title="Circular Orbit View"
          >
            ◯ Circular Orbit
          </button>
          <button
            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
            title="Side-by-side Grid View"
          >
            ⊞ Grid Layout
          </button>
        </div>
        <span className="section-count">003 / 005</span>
      </div>

      <div className="projects-container-wrap">
        {/* Project Tag & Search Filter Bar */}
        <ProjectFilter
          activeTag={activeTag}
          onSelectTag={setActiveTag}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {viewMode === 'circular' ? (
          <ProjectsCircular
            projectsData={filteredProjects}
            onOpenModal={(proj) => setModalProject(proj)}
          />
        ) : (
          <section className="projects-grid fade-in visible">
            {filteredProjects.length === 0 ? (
              <div className="projects-no-results">
                No projects found matching category "{activeTag}" {searchQuery && `and search "${searchQuery}"`}.
              </div>
            ) : (
              filteredProjects.map((project) => (
                <div className="od-project-block-wrapper" key={project.num}>
                  <div
                    className="od-project-block"
                    onClick={() => setModalProject(project)}
                  >
                    <div className="od-project-meta">
                      <div className="od-project-num">{project.num}</div>
                      <div className="od-project-title">
                        {project.title} <span className="arrow">{project.liveUrl ? 'LIVE DEMO ⚡' : 'DETAILS 👁️'}</span>
                      </div>
                      <p className="od-project-desc">{project.desc}</p>
                    </div>
                    <div className="od-project-canvas">
                      <div className="card-badge">{project.badge}</div>
                      <img alt={project.title} src={project.image} />
                    </div>
                  </div>
                </div>
              ))
            )}
          </section>
        )}
      </div>

      {/* Live Project Sandbox / Modal Preview */}
      <ProjectModal
        isOpen={!!modalProject}
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </>
  );
};

export default Projects;

