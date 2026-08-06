import React, { useState, useEffect } from 'react';
import { fetchGithubProfile, fetchGithubEvents, fetchGithubRepos } from '../services/github';

const Activity = () => {
  const [profile, setProfile] = useState(null);
  const [events, setEvents] = useState([]);
  const [reposCount, setReposCount] = useState(9);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const loadGithubData = async () => {
      try {
        const [profData, eventsData, reposData] = await Promise.all([
          fetchGithubProfile(),
          fetchGithubEvents(),
          fetchGithubRepos(),
        ]);

        if (isMounted) {
          if (profData) setProfile(profData);
          if (eventsData && Array.isArray(eventsData)) setEvents(eventsData);
          if (reposData && Array.isArray(reposData)) {
            setReposCount(Math.max(reposData.length, profData?.public_repos || 9));
          }
        }
      } catch (err) {
        console.error('Error loading GitHub data:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadGithubData();
    return () => {
      isMounted = false;
    };
  }, []);

  // Format events to activity items
  const formatEventText = (event) => {
    const repoName = event.repo?.name || 'Coderastrophy/repository';
    const shortRepo = repoName.replace('Coderastrophy/', '');
    const date = new Date(event.created_at).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });

    switch (event.type) {
      case 'PushEvent':
        const commitCount = event.payload?.commits?.length || 1;
        return {
          icon: '⌥',
          title: `Created ${commitCount} commit${commitCount > 1 ? 's' : ''} in ${shortRepo}`,
          meta: `Coderastrophy · ${date}`,
        };
      case 'PublicEvent':
        return {
          icon: '◎',
          title: `Made ${shortRepo} public`,
          meta: `Coderastrophy · ${date}`,
        };
      case 'CreateEvent':
        return {
          icon: '⬡',
          title: `Created repository ${shortRepo}`,
          meta: `Coderastrophy · ${date}`,
        };
      case 'WatchEvent':
        return {
          icon: '★',
          title: `Starred repository ${shortRepo}`,
          meta: `Coderastrophy · ${date}`,
        };
      default:
        return {
          icon: '◎',
          title: `Contributed to ${shortRepo}`,
          meta: `Coderastrophy · ${date}`,
        };
    }
  };

  const defaultActivities = [
    {
      icon: '⌥',
      title: 'Created commit in Leaflet-routing',
      meta: 'Coderastrophy · Aug 2026',
    },
    {
      icon: '◎',
      title: 'Contributed to Cart',
      meta: 'Coderastrophy/Cart',
    },
    {
      icon: '◎',
      title: 'Contributed to PopLogue',
      meta: 'Coderastrophy/PopLogue',
    },
    {
      icon: '◎',
      title: 'Contributed to Crypto-dashboard',
      meta: 'Coderastrophy/Crypto-dashboard + 6 others',
    },
  ];

  const recentActivities =
    events.length > 0
      ? events.slice(0, 4).map(formatEventText)
      : defaultActivities;

  return (
    <section className="activity-section fade-in">
      <div className="activity-col">
        <div className="activity-col-label">Recent Activity · GitHub</div>
        {recentActivities.map((act, idx) => (
          <div className="activity-item" key={idx}>
            <div className="activity-icon">{act.icon}</div>
            <div className="activity-text">
              <div className="activity-title">{act.title}</div>
              <div className="activity-meta">{act.meta}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="activity-col">
        <div className="activity-col-label">Activity Breakdown · 2026</div>
        <div className="activity-item">
          <div
            className="activity-icon"
            style={{ background: 'var(--ink)', color: 'var(--paper)' }}
          >
            ↑
          </div>
          <div className="activity-text">
            <div className="activity-title">100% Commits</div>
            <div className="activity-meta">
              All contribution activity is pure commits — focused, deliberate work
            </div>
          </div>
        </div>
        <div className="activity-item">
          <div className="activity-icon">97</div>
          <div className="activity-text">
            <div className="activity-title">Total contributions this year</div>
            <div className="activity-meta">Peaks in Dec 2025 · Mar–Apr 2026</div>
          </div>
        </div>
        <div className="activity-item">
          <div className="activity-icon">⬡</div>
          <div className="activity-text">
            <div className="activity-title">{reposCount} repositories</div>
            <div className="activity-meta">
              Active across multiple projects and full-stack repositories
            </div>
          </div>
        </div>
        <div className="activity-item">
          <div className="activity-icon">★</div>
          <div className="activity-text">
            <div className="activity-title">
              {profile ? `${profile.followers} followers` : '3 followers'}
            </div>
            <div className="activity-meta">
              {profile?.location?.toLowerCase() || 'ethiopia'} ·{' '}
              {profile ? `${profile.followers} followers` : '3 followers'} ·{' '}
              {profile ? `${profile.following} following` : '7 following'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;
