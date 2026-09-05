import React, { useState, useEffect } from 'react';
import {
  fetchGithubProfile,
  fetchGithubEvents,
  fetchGithubRepos,
  fetchGithubContributions,
} from '../services/github';

const Activity = () => {
  const [profile, setProfile] = useState(null);
  const [events, setEvents] = useState([]);
  const [reposCount, setReposCount] = useState(21);
  const [totalCommits, setTotalCommits] = useState(482);
  const [recentYearCommits, setRecentYearCommits] = useState(436);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const loadGithubData = async () => {
      try {
        const [profData, eventsData, reposData, contribData] = await Promise.all([
          fetchGithubProfile(),
          fetchGithubEvents(),
          fetchGithubRepos(),
          fetchGithubContributions('all'),
        ]);

        if (isMounted) {
          if (profData) setProfile(profData);
          if (eventsData && Array.isArray(eventsData)) setEvents(eventsData);
          if (reposData && Array.isArray(reposData)) {
            setReposCount(Math.max(reposData.length, profData?.public_repos || 21));
          }
          if (contribData && contribData.total) {
            if (typeof contribData.total === 'object') {
              const total = Object.values(contribData.total).reduce(
                (acc, curr) => acc + (typeof curr === 'number' ? curr : 0),
                0
              );
              setTotalCommits(total);
              if (contribData.total['2026']) {
                setRecentYearCommits(contribData.total['2026']);
              }
            } else if (typeof contribData.total === 'number') {
              setTotalCommits(contribData.total);
            }
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

  // Format relative time helper
  const formatTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffHours < 1) return 'just now';
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  // Format events to activity items
  const formatEventText = (event) => {
    const repoName = event.repo?.name || 'Coderastrophy/repository';
    const shortRepo = repoName.replace('Coderastrophy/', '');
    const timeAgo = formatTimeAgo(event.created_at);

    switch (event.type) {
      case 'PushEvent': {
        const commitCount = event.payload?.commits?.length || 1;
        const firstMsg = event.payload?.commits?.[0]?.message;
        const msgSnippet = firstMsg ? ` — "${firstMsg.split('\n')[0].slice(0, 45)}"` : '';
        return {
          icon: '⌥',
          title: `Pushed ${commitCount} commit${commitCount > 1 ? 's' : ''} to ${shortRepo}${msgSnippet}`,
          meta: `Coderastrophy · ${timeAgo}`,
          url: `https://github.com/${repoName}`,
        };
      }
      case 'PullRequestEvent': {
        const action = event.payload?.action || 'opened';
        const title = event.payload?.pull_request?.title || 'Pull request';
        return {
          icon: '⇄',
          title: `${action.toUpperCase()} PR in ${shortRepo}: ${title.slice(0, 40)}`,
          meta: `Coderastrophy · ${timeAgo}`,
          url: event.payload?.pull_request?.html_url || `https://github.com/${repoName}`,
        };
      }
      case 'CreateEvent': {
        const refType = event.payload?.ref_type || 'repository';
        return {
          icon: '⬡',
          title: `Created ${refType} ${event.payload?.ref ? `"${event.payload.ref}" in ` : ''}${shortRepo}`,
          meta: `Coderastrophy · ${timeAgo}`,
          url: `https://github.com/${repoName}`,
        };
      }
      case 'WatchEvent':
        return {
          icon: '★',
          title: `Starred repository ${shortRepo}`,
          meta: `Coderastrophy · ${timeAgo}`,
          url: `https://github.com/${repoName}`,
        };
      case 'PublicEvent':
        return {
          icon: '◎',
          title: `Made ${shortRepo} public`,
          meta: `Coderastrophy · ${timeAgo}`,
          url: `https://github.com/${repoName}`,
        };
      default:
        return {
          icon: '◎',
          title: `Contributed to ${shortRepo}`,
          meta: `Coderastrophy · ${timeAgo}`,
          url: `https://github.com/${repoName}`,
        };
    }
  };

  const defaultActivities = [
    {
      icon: '⌥',
      title: 'Pushed commits to Open-Design-Portfolio',
      meta: 'Coderastrophy · Live update',
      url: 'https://github.com/Coderastrophy/Open-Design-Portfolio',
    },
    {
      icon: '⇄',
      title: 'Merged pull request #1 in Open-Design-Portfolio',
      meta: 'Coderastrophy · Today',
      url: 'https://github.com/Coderastrophy/Open-Design-Portfolio',
    },
    {
      icon: '⌥',
      title: 'Pushed commits to Gelgay-MarketPlace',
      meta: 'Paleo-Marketplace/Gelgay-MarketPlace · Recent',
      url: 'https://github.com/Paleo-Marketplace/Gelgay-MarketPlace',
    },
    {
      icon: '⌥',
      title: 'Pushed commits to Leaflet-routing',
      meta: 'Coderastrophy/Leaflet-routing',
      url: 'https://github.com/Coderastrophy/Leaflet-routing',
    },
  ];

  const recentActivities =
    events.length > 0
      ? events.slice(0, 5).map(formatEventText)
      : defaultActivities;

  return (
    <section className="activity-section fade-in">
      {/* Real-time Activity Feed */}
      <div className="activity-col">
        <div className="activity-col-label">
          Recent Activity · Live Feed {loading && <span style={{ opacity: 0.6 }}>· Syncing...</span>}
        </div>
        {recentActivities.map((act, idx) => (
          <a
            className="activity-item"
            key={idx}
            href={act.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="activity-icon">{act.icon}</div>
            <div className="activity-text">
              <div className="activity-title">{act.title}</div>
              <div className="activity-meta">{act.meta}</div>
            </div>
          </a>
        ))}
      </div>

      {/* Activity Breakdown Across History */}
      <div className="activity-col">
        <div className="activity-col-label">Activity Telemetry · All-Time Stats</div>
        <div className="activity-item">
          <div
            className="activity-icon"
            style={{ background: 'var(--ink)', color: 'var(--paper)' }}
          >
            ↑
          </div>
          <div className="activity-text">
            <div className="activity-title">{totalCommits} Total Commits & Contributions</div>
            <div className="activity-meta">
              Continuous commit-driven development logged across GitHub repositories
            </div>
          </div>
        </div>

        <div className="activity-item">
          <div className="activity-icon">⚡</div>
          <div className="activity-text">
            <div className="activity-title">{recentYearCommits} Contributions in 2026</div>
            <div className="activity-meta">Active cadence across full-stack & web architectures</div>
          </div>
        </div>

        <div className="activity-item">
          <div className="activity-icon">⬡</div>
          <div className="activity-text">
            <div className="activity-title">{reposCount} Public Repositories</div>
            <div className="activity-meta">
              Featuring React applications, full-stack APIs, geodata tracking, and tooling
            </div>
          </div>
        </div>

        <div className="activity-item">
          <div className="activity-icon">★</div>
          <div className="activity-text">
            <div className="activity-title">
              {profile ? `${profile.followers} Followers · ${profile.following} Following` : 'GitHub Community Network'}
            </div>
            <div className="activity-meta">
              {profile?.location || 'Addis Ababa, Ethiopia'} · Open Source Contributor · @Coderastrophy
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;
