import React, { useState, useEffect } from 'react';
import ProjectsCircular from './ProjectsCircular';
import ProjectFilter from './ProjectFilter';
import ProjectModal from './ProjectModal';
import { projectsData } from '../data/projectsData';
import { fetchGithubRepos } from '../services/github';

const Projects = ({ onSelectProject }) => {
  const [viewMode, setViewMode] = useState('circular'); // 'circular' | 'grid'
  const [activeTag, setActiveTag] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalProject, setModalProject] = useState(null);
  const [projectsList, setProjectsList] = useState(projectsData);

  useEffect(() => {
    let isMounted = true;
    const enhanceWithGithubData = async () => {
      try {
        const repos = await fetchGithubRepos();
        if (isMounted && Array.isArray(repos) && repos.length > 0) {
          const repoMap = new Map(repos.map(r => [r.name.toLowerCase(), r]));
          
          const enhanced = projectsData.map(proj => {
            // Match by id or title or repoUrl
            const repoName = proj.repoUrl?.split('/').pop()?.toLowerCase();
            const matchedRepo = repoMap.get(repoName);
            if (matchedRepo) {
              return {
                ...proj,
                stars: matchedRepo.stargazers_count,
                updatedAt: matchedRepo.updated_at,
                language: matchedRepo.language || proj.techStack[0],
                liveUrl: proj.liveUrl || (matchedRepo.homepage ? matchedRepo.homepage : null),
              };
            }
            return proj;
          });
          setProjectsList(enhanced);
        }
      } catch (err) {
        console.warn('Could not sync projects with GitHub API:', err);
      }
    };

    enhanceWithGithubData();
    return () => {
      isMounted = false;
    };
  }, []);

  // Filtering logic
  const filteredProjects = projectsList.filter((project) => {
    const matchesTag =
      activeTag === 'ALL' ||
      project.badge === activeTag ||
      (project.tags && project.tags.includes(activeTag));
    const matchesSearch =
      !searchQuery ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (project.techStack && project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesTag && matchesSearch;
  });

  return (
    <>
      <div className="section-header" id="projects">
        <span className="section-num">III.</span>
        <span className="section-title-label">Projects · Work ({projectsList.length})</span>
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
                <div className="od-project-block-wrapper" key={project.id || project.num}>
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
