import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { useFadeIn } from './hooks/useFadeIn';
import Ticker from './components/Ticker';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SystemsExplorer from './components/SystemsExplorer';
import Contributions from './components/Contributions';
import Activity from './components/Activity';
import Blog from './components/Blog';
import ThoughtStream from './components/ThoughtStream';
import BlogPost from './components/BlogPost';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import './styles/style.css';

const MainPortfolio = ({ onSelectPost, readPostIds }) => {
  useFadeIn();

  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <SystemsExplorer />
      <Contributions />
      <Activity />
      <Blog onSelectPost={onSelectPost} readPostIds={readPostIds} />
      <ThoughtStream />
      <Contact />
    </main>
  );
};

const AppContent = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [readPostIds, setReadPostIds] = useState(() => {
    try {
      const saved = localStorage.getItem('read_blog_posts');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const handleSelectPost = (post) => {
    setSelectedPost(post);
    if (!readPostIds.includes(post.id)) {
      const updated = [...readPostIds, post.id];
      setReadPostIds(updated);
      try {
        localStorage.setItem('read_blog_posts', JSON.stringify(updated));
      } catch (err) {
        console.warn('Could not save read status to localStorage', err);
      }
    }
  };

  const handleNavClick = (targetId) => {
    if (selectedPost) {
      setSelectedPost(null);
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      <Ticker />
      <Navbar onNavClick={handleNavClick} onOpenCmd={() => setIsCmdOpen(true)} />

      {selectedPost ? (
        <BlogPost post={selectedPost} onBack={() => setSelectedPost(null)} />
      ) : (
        <MainPortfolio
          onSelectPost={handleSelectPost}
          readPostIds={readPostIds}
        />
      )}

      <CommandPalette
        isOpen={isCmdOpen}
        onClose={() => setIsCmdOpen(false)}
        onNavigate={handleNavClick}
      />

      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
