export const projectsData = [
  {
    num: '01',
    id: 'paraxis',
    title: 'Paraxis',
    badge: 'PRODUCTIVITY',
    tags: ['FULL-STACK', 'REACT', 'NODE', 'PRODUCTIVITY'],
    desc: 'A full-stack productivity & task management engine with JWT authentication, MongoDB schemas, and drag-and-drop workflow execution.',
    description: 'A full-stack productivity & task management engine with JWT authentication, MongoDB schemas, and drag-and-drop workflow execution.',
    image: 'assets/darktheme.png',
    url: 'https://github.com/Coderastrophy/Paraxis',
    repoUrl: 'https://github.com/Coderastrophy/Paraxis',
    liveUrl: 'https://paraxis-five.vercel.app',
    techStack: ['React 18', 'Vite', 'Node.js', 'Express', 'MongoDB / Mongoose', 'JWT Auth', 'Tailwind CSS'],
    readme: {
      title: 'Paraxis — Full-Stack Productivity Ledger & Task Manager',
      summary: 'A full-stack task management and productivity ledger deployed live on Vercel. Features JWT bearer token authentication, secure guest modes, MongoDB task schemas with status transitions, and bulk export capabilities.',
      installation: [
        'git clone https://github.com/Coderastrophy/Paraxis.git',
        'cd Paraxis',
        'cd server && npm install && npm run dev',
        'cd ../client && npm install && npm run dev'
      ],
      keyModules: [
        'JWT Bearer Token Authentication & Bcrypt Password Hashing',
        'Mongoose Schema & Auto-Failover In-Memory MongoDB Server',
        'Drag-and-Drop Task Reordering & Bulk Actions Pipeline',
        'Export Task Ledger as JSON & Offline Mode Support'
      ]
    },
    architecture: {
      overview: 'Decoupled full-stack architecture with a Vite React client and an Express/MongoDB REST backend.',
      frontend: 'React application with optimistic UI updates and protected auth route wrappers.',
      backend: 'Express.js controller endpoints verified via JWT authentication middleware.',
      dataFlow: 'Client dispatches authenticated REST mutations to MongoDB collections with instant client-side state reconciliation.',
    },
    features: [
      'JWT registration, secure login, and guest mode testing.',
      'Task ledger with status toggles, reordering, and bulk completion.',
      'Export productivity logs to structured JSON files.',
      'Live deployment with continuous Vercel integration.',
    ],
  },
  {
    num: '02',
    id: 'gelgay-marketplace',
    title: 'Gelgay Marketplace',
    badge: 'COMMERCE',
    tags: ['COMMERCE', 'FULL-STACK', 'REACT', 'NODE'],
    desc: 'A modern multi-vendor marketplace platform facilitating localized buying, selling, and community trading with structured vendor catalogs.',
    description: 'A modern multi-vendor marketplace platform facilitating localized buying, selling, and community trading with structured vendor catalogs.',
    image: 'assets/gelgay.png',
    url: 'https://github.com/Paleo-Marketplace/Gelgay-MarketPlace',
    repoUrl: 'https://github.com/Paleo-Marketplace/Gelgay-MarketPlace',
    liveUrl: 'https://gelgay-marketplace.vercel.app/',
    techStack: ['React 18', 'Node.js', 'REST API', 'Tailwind CSS', 'PostgreSQL'],
    readme: {
      title: 'Gelgay MarketPlace — Distributed Community Trading Platform',
      summary: 'A multi-vendor localized e-commerce marketplace built for regional commerce and deployed on Vercel. Features real-time listings, user authentication, multi-parameter search indexing, and vendor dashboards.',
      installation: [
        'git clone https://github.com/Paleo-Marketplace/Gelgay-MarketPlace.git',
        'cd Gelgay-MarketPlace',
        'npm install',
        'npm run dev'
      ],
      keyModules: [
        'Multi-Vendor Product Catalog & Search Filtering Engine',
        'Secure Session Management & Order Verification Pipeline',
        'Dynamic Local Currency Formatting & Cart Reducers',
        'Vendor Inventory Management & Storefront Routing'
      ]
    },
    architecture: {
      overview: 'Distributed marketplace architecture connecting customer storefronts with modular backend services.',
      frontend: 'React application with dynamic item routing and stateful catalog filters.',
      backend: 'Node/Express REST service with relational database integration.',
      dataFlow: 'Client search triggers indexed query pipelines delivering filtered vendor catalogs.',
    },
    features: [
      'Product indexing with category filters and keyword search.',
      'Vendor storefronts and product inventory management.',
      'Clean modern responsive interface optimized for mobile and desktop.',
      'Live deployment on Vercel.',
    ],
  },
  {
    num: '03',
    id: 'poplogue',
    title: 'PopLogue',
    badge: 'CINEMA',
    tags: ['CINEMA', 'FULL-STACK', 'REACT'],
    desc: 'A pop-culture and cinema tracking application for discovering movies, rating titles, and keeping an aesthetic reflection log.',
    description: 'A pop-culture and cinema tracking application for discovering movies, rating titles, and keeping an aesthetic reflection log.',
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
    num: '04',
    id: 'mapty',
    title: 'Mapty Tracking',
    badge: 'GEODATA',
    tags: ['GEODATA', 'FRONTEND', 'JS'],
    desc: 'A spatial workout tracker that logs running and cycling sessions on an interactive map using OOP principles and HTML5 Geolocation.',
    description: 'A spatial workout tracker that logs running and cycling sessions on an interactive map using OOP principles and HTML5 Geolocation.',
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
    num: '05',
    id: 'crypto-dashboard',
    title: 'Finance Dashboard',
    badge: 'CRYPTO',
    tags: ['CRYPTO', 'FULL-STACK', 'REACT'],
    desc: 'A live cryptocurrency tracking dashboard with real-time price feeds, market trends, and clean visual telemetry.',
    description: 'A live cryptocurrency tracking dashboard with real-time price feeds, market trends, and clean visual telemetry.',
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
    num: '06',
    id: 'amazon-cart',
    title: 'Cart & Commerce',
    badge: 'COMMERCE',
    tags: ['COMMERCE', 'FULL-STACK', 'REACT', 'NODE'],
    desc: 'A full-stack e-commerce simulation with authentic shopping cart architecture, item quantity reducers, and checkout flows.',
    description: 'A full-stack e-commerce simulation with authentic shopping cart architecture, item quantity reducers, and checkout flows.',
    image: 'assets/amazon.png',
    url: 'https://github.com/Coderastrophy/Cart',
    repoUrl: 'https://github.com/Coderastrophy/Cart',
    liveUrl: null,
    techStack: ['React.js', 'Node.js', 'Express', 'Context API', 'Stripe Auth'],
    readme: {
      title: 'Cart — Full-Stack E-Commerce & Transaction Engine',
      summary: 'An authentic e-commerce cart architecture simulating checkout workflows, dynamic subtotal calculations, Stripe payment processing, and React Context API item state management.',
      installation: [
        'git clone https://github.com/Coderastrophy/Cart.git',
        'cd Cart',
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
    num: '07',
    id: 'neuranets',
    title: 'NeuraNets BCMS',
    badge: 'BLOG SYSTEM',
    tags: ['BLOG SYSTEM', 'FULL-STACK', 'NODE'],
    desc: 'Exploration into neural network fundamentals — training and visualizing network topologies bridging code and cognition.',
    description: 'Exploration into neural network fundamentals — training and visualizing network topologies bridging code and cognition.',
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
  {
    num: '08',
    id: 'classy-weather',
    title: 'Classy Weather',
    badge: 'REACT',
    tags: ['REACT', 'FRONTEND', 'GEODATA'],
    desc: 'A weather forecasting interface demonstrating lifecycle architecture, Open-Meteo API querying, and auto-geolocation.',
    description: 'A weather forecasting interface demonstrating lifecycle architecture, Open-Meteo API querying, and auto-geolocation.',
    image: 'assets/philosophy.png',
    url: 'https://github.com/Coderastrophy/classy-Weather',
    repoUrl: 'https://github.com/Coderastrophy/classy-Weather',
    liveUrl: null,
    techStack: ['React', 'Open-Meteo API', 'GeoNames API', 'CSS3'],
    readme: {
      title: 'Classy Weather — Geolocation & Forecast Engine',
      summary: 'Weather application querying Open-Meteo APIs for 7-day temperature telemetry, weather codes, and automatic geocoding from town or city search queries.',
      installation: [
        'git clone https://github.com/Coderastrophy/classy-Weather.git',
        'cd classy-Weather',
        'npm install',
        'npm start'
      ],
      keyModules: [
        'Open-Meteo Meteorological Data Integration',
        'Geocoding API coordinate resolution',
        '7-Day Multi-Metric Forecast Card Rendering',
        'LocalStorage Location Memory'
      ]
    },
    architecture: {
      overview: 'Weather forecast pipeline resolving location strings to coordinates before fetching meteorological telemetry.',
      frontend: 'Weather visualizer with weather code icon mapping.',
      backend: 'Open-Meteo asynchronous REST pipeline.',
      dataFlow: 'Location input -> Geocode API -> Coordinates -> Weather API -> Rendered Forecast.',
    },
    features: [
      'Instant city search with automatic coordinate resolution.',
      '7-day multi-metric forecast display (max/min temps, conditions).',
      'Persistent location history in browser storage.',
    ],
  }
];
