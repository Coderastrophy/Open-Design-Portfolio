import React from 'react';

const Skills = () => {
  const skillsCategories = [
    {
      category: 'FRONTEND',
      tags: ['HTML5', 'CSS3 / Bootstrap', 'Vanilla JavaScript', 'React.js'],
    },
    {
      category: 'BACKEND',
      tags: ['Node.js / Express.js', 'JWT Auth', 'Python', 'Java'],
    },
    {
      category: 'DATABASE',
      tags: ['PostgreSQL / Prisma', 'MongoDB architectural structures'],
    },
    {
      category: 'WORKFLOW',
      tags: ['VS Code', 'Zorin OS', 'GitHub', 'GitHub Actions', 'Claude Code', 'Codex'],
    },
  ];

  return (
    <>
      <div className="section-header" id="skills">
        <span className="section-num">II.</span>
        <span className="section-title-label">Systems · Stacks</span>
        <span className="section-count">002 / 005</span>
      </div>
      <section className="skills-categorized-section fade-in visible">
        {skillsCategories.map((group, index) => (
          <div className="skill-category-group" key={index}>
            <div className="skill-category-label">{group.category}</div>
            <div className="skill-tags-wrapper">
              {group.tags.map((tag, tagIdx) => (
                <span className="skill-pill-tag" key={tagIdx}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Skills;
