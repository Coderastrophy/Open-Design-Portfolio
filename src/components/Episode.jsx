import React, { useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from './BlogPost.module.css';

const Episode = ({ post, onBack }) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [post]);

  if (!post) return null;

  return (
    <div className="fade-in visible" style={{ width: '100%', minHeight: '100vh', background: 'var(--paper)', color: 'var(--ink)' }}>
      {/* Top Navigation */}
      <nav className={styles.articleNav}>
        <div>
          <a
            href="#writing"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            style={{ textDecoration: 'none' }}
          >
            <h1 className={styles.navLogo}>Takes &amp; Thoughts</h1>
          </a>
          <p className={styles.navSub}>
            My thoughts about the state of the web, Cinema, Philosophy, and Music
          </p>
        </div>
        <div className={styles.navLinks}>
          <a
            href="#writing"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
          >
            BLOG
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
          >
            ABOUT
          </a>
          <a
            href="#tags"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
          >
            TAGS
          </a>
          <div className={styles.navBtn}>⤢</div>
          <div className={styles.navBtn}>🔍</div>
          <div
            className={styles.navBtn}
            onClick={toggleTheme}
            id="theme-toggle"
            title="Toggle theme"
            style={{ cursor: 'pointer' }}
          >
            {isDark ? '☀️' : '🌙'}
          </div>
        </div>
      </nav>

      {/* Main Article Layout */}
      <main className={styles.articleLayout}>
        {/* Left Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarBlock}>
            <div className={styles.sidebarLabel}>PUBLISHED</div>
            <div className={styles.sidebarValue}>
              {post.publishedDate || '02 May 2026'}
            </div>
          </div>
          <div className={styles.sidebarBlock}>
            <div className={styles.sidebarLabel}>FIELD LOCATION</div>
            <div className={styles.sidebarValue}>Addis Ababa, Ethiopia</div>
          </div>
          <div className={styles.sidebarBlock}>
            <div className={styles.sidebarLabel}>CATEGORIES</div>
            <div className={styles.sidebarTags}>
              {post.categories && post.categories.length > 0 ? (
                post.categories.map((cat, idx) => (
                  <span className={styles.sidebarTag} key={idx}>
                    {cat}
                  </span>
                ))
              ) : (
                <>
                  <span className={styles.sidebarTag}>Philosophy</span>
                  <span className={styles.sidebarTag}>Life</span>
                </>
              )}
            </div>
          </div>
          <div className={styles.sidebarBlock}>
            <div className={styles.sidebarLabel}>READING TIME</div>
            <div className={styles.sidebarValue}>
              {post.readTime || '4 min read'}
            </div>
          </div>
        </aside>

        {/* Right Content Area */}
        <article className="content-area">
          <div className={styles.contentBadge}>❖ RESEARCH · CASE STUDY</div>
          <h1 className={styles.articleTitle}>{post.title}</h1>
          <div className={styles.articleMetaRow}>
            Coderastrophy · {post.date || 'May 2026'} · CUP-26-01
          </div>

          {/* Abstract Box */}
          <div className={styles.abstractBox}>
            <div className={styles.abstractLabel}>ABSTRACT</div>
            <div className={styles.abstractText}>
              {post.abstract || post.snippet || post.title}
            </div>
          </div>

          {/* Article Body */}
          <div className={styles.articleBody}>
            {post.heroImage && (
              <img
                alt={post.title}
                src={post.heroImage}
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  marginTop: 0,
                  marginBottom: '2.5rem',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                }}
              />
            )}

            {post.quote && (
              <p
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.8rem',
                  lineHeight: 1.4,
                  color: 'var(--ink)',
                  marginBottom: '2.5rem',
                  maxWidth: '750px',
                }}
              >
                {post.quote}
              </p>
            )}

            {post.paragraphs && post.paragraphs.length > 0 ? (
              post.paragraphs.map((para, idx) => <p key={idx}>{para}</p>)
            ) : (
              <p>{post.snippet}</p>
            )}
          </div>
        </article>
      </main>
    </div>
  );
};

export default Episode;
