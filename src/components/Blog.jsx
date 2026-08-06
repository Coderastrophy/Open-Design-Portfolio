import React from 'react';
import { blogPosts } from '../data/blogPosts';

const Blog = ({ onSelectPost, readPostIds = [] }) => {
  return (
    <section className="tea-leaves-container fade-in visible blog-full-width" id="writing">
      <div className="tl-left-wrapper full-width">
        <div className="tl-header">
          <div className="tl-title-area">
            <h2 className="tl-logo">Schizo Episodes &amp; Thoughts</h2>
            <p className="tl-subtitle">
              My thoughts about Music, Cinema, Philosophy and life in general.
            </p>
          </div>
          <div className="tl-nav">
            <span>BLOG</span>
            <span>Episodes</span>
          </div>
        </div>
        <div className="tl-body">
          {blogPosts.map((post) => {
            const hasRead = readPostIds.includes(post.id);
            return (
              <article
                className={`tl-article fade-in visible ${hasRead ? 'has-read' : ''}`}
                key={post.id}
              >
                <div className="tl-left-col">
                  <div className="tl-date">{post.date}</div>
                  <div className="tl-tags">
                    {hasRead && <span className="tl-tag read-tag">READ ✓</span>}
                    {post.categories.map((cat, idx) => (
                      <span className="tl-tag" key={idx}>
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="tl-right-col">
                  <h1
                    className="tl-post-title"
                    onClick={() => onSelectPost(post)}
                  >
                    {post.title} {hasRead && <span style={{ fontSize: '1.5rem', opacity: 0.6 }}>✓</span>}
                  </h1>
                  <p className="tl-post-snippet">{post.snippet}</p>
                  <button
                    className="tl-continue"
                    style={{ background: 'none', border: 'none', padding: 0 }}
                    onClick={() => onSelectPost(post)}
                  >
                    {hasRead ? 'RE-READ EPISODE' : 'CONTINUE READING'} <span>{post.readTime}</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
