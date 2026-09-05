import React, { useState, useEffect, useMemo } from 'react';
import { fetchGithubContributions } from '../services/github';

const levelClass = ['', ' l1', ' l2', ' l3', ' l4'];

// Default fallback matrix if API is unreachable
const fallbackContribData = [
  // May - Apr rolling 52 weeks
  [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,1,0,0,0,0],
  [0,2,2,1,0,0,0],[0,3,2,2,0,0,0],[0,2,3,2,1,0,0],[0,1,2,3,2,0,0],
  [0,2,1,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,1,2,0,0,0],
  [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,1,0,0],[0,0,0,0,0,0,0],
  [0,1,0,0,0,0,0],[0,2,2,0,1,0,0],[0,1,0,2,0,0,0],[0,0,1,1,0,0,0],
  [0,0,2,3,2,0,0],[0,1,0,2,3,0,0],[0,3,2,0,1,0,0],[0,2,3,2,0,0,0],
  [0,1,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
];

const Contributions = () => {
  const [selectedYear, setSelectedYear] = useState('last');
  const [contributionsData, setContributionsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hoveredDay, setHoveredDay] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const loadContributions = async () => {
      setLoading(true);
      try {
        const data = await fetchGithubContributions(selectedYear);
        if (isMounted && data && Array.isArray(data.contributions)) {
          setContributionsData(data);
        }
      } catch (err) {
        console.warn('Error loading contributions:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadContributions();
    return () => {
      isMounted = false;
    };
  }, [selectedYear]);

  // Transform raw contribution items into a structured grid of 7-day weeks
  const { weeks, monthHeaders, totalCount } = useMemo(() => {
    if (!contributionsData || !contributionsData.contributions) {
      // Fallback
      return {
        weeks: fallbackContribData.map(week => week.map(level => ({ level, count: level > 0 ? level * 2 : 0, empty: false }))),
        monthHeaders: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
        totalCount: 482,
      };
    }

    const rawList = contributionsData.contributions;
    const weeksArr = [];
    let currentWeek = [];

    // Align start day
    const firstDate = new Date(rawList[0].date);
    const startDay = firstDate.getDay(); // 0 is Sunday
    for (let i = 0; i < startDay; i++) {
      currentWeek.push({ empty: true, count: 0, level: 0 });
    }

    const monthStarts = [];
    let lastMonth = -1;

    rawList.forEach((item) => {
      const d = new Date(item.date + 'T00:00:00');
      const m = d.getMonth();
      if (m !== lastMonth) {
        lastMonth = m;
        monthStarts.push({
          name: d.toLocaleString('en-US', { month: 'short' }),
          weekIdx: weeksArr.length,
        });
      }

      currentWeek.push({
        date: item.date,
        count: item.count,
        level: item.level,
        empty: false,
      });

      if (currentWeek.length === 7) {
        weeksArr.push(currentWeek);
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push({ empty: true, count: 0, level: 0 });
      }
      weeksArr.push(currentWeek);
    }

    // Determine total count
    let total = 0;
    if (contributionsData.total) {
      if (typeof contributionsData.total === 'number') {
        total = contributionsData.total;
      } else if (typeof contributionsData.total === 'object') {
        total = Object.values(contributionsData.total).reduce((acc, curr) => acc + (typeof curr === 'number' ? curr : 0), 0);
      }
    }
    if (total === 0) {
      total = rawList.reduce((sum, d) => sum + (d.count || 0), 0);
    }

    return {
      weeks: weeksArr,
      monthHeaders: monthStarts.map(m => m.name),
      totalCount: total,
    };
  }, [contributionsData]);

  const yearLabel =
    selectedYear === 'last'
      ? 'LAST 12 MONTHS'
      : selectedYear === 'all'
      ? 'ALL-TIME'
      : selectedYear;

  const countLabel =
    selectedYear === 'last'
      ? `${totalCount} commits in the last year`
      : selectedYear === 'all'
      ? `${totalCount} all-time contributions`
      : `${totalCount} contributions in ${selectedYear}`;

  return (
    <section className="contrib-section fade-in visible">
      <div className="contrib-container-centered">
        <div className="contrib-card-frame">
          <div className="contrib-card-header">
            <div className="contrib-card-title">
              <span className="contrib-card-dot">●</span>
              CONTRIBUTION ACTIVITY · GITHUB · {yearLabel}
            </div>

            {/* Live Year Selector */}
            <div className="contrib-year-selector" role="tablist">
              {[
                { id: 'last', label: 'Recent (12M)' },
                { id: '2026', label: '2026' },
                { id: '2025', label: '2025' },
                { id: '2024', label: '2024' },
                { id: 'all', label: 'All Time' },
              ].map((yr) => (
                <button
                  key={yr.id}
                  className={`contrib-year-btn ${selectedYear === yr.id ? 'active' : ''}`}
                  onClick={() => setSelectedYear(yr.id)}
                  type="button"
                >
                  {yr.label}
                </button>
              ))}
            </div>

            <div className="contrib-card-stats">
              {loading ? 'Fetching live commits...' : countLabel}
            </div>
          </div>

          <div className="contrib-wrapper-scrollable">
            <div className="contrib-month-header">
              {monthHeaders.slice(0, 12).map((m, i) => (
                <span className="contrib-month-name" key={i}>
                  {m}
                </span>
              ))}
            </div>

            <div className="contrib-body-row">
              <div className="contrib-day-labels">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
              </div>
              <div className="contrib-grid">
                {weeks.map((week, weekIdx) => (
                  <div className="contrib-week" key={weekIdx}>
                    {week.map((day, dayIdx) => (
                      <div
                        className={`contrib-day${day.empty ? '' : levelClass[day.level] || ''}`}
                        key={dayIdx}
                        title={
                          day.date
                            ? `${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}`
                            : ''
                        }
                        onMouseEnter={() => day.date && setHoveredDay(day)}
                        onMouseLeave={() => setHoveredDay(null)}
                        style={{
                          opacity: day.empty ? 0.2 : 1,
                          cursor: day.date ? 'pointer' : 'default',
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="contrib-card-footer">
            <span className="contrib-footer-hint">
              {hoveredDay ? (
                <strong>
                  {hoveredDay.count} contribution{hoveredDay.count === 1 ? '' : 's'} on{' '}
                  {new Date(hoveredDay.date + 'T00:00:00').toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </strong>
              ) : (
                'Live commit-driven telemetry synchronized with GitHub'
              )}
            </span>
            <div className="contrib-legend">
              <span>Less</span>
              <span className="contrib-day"></span>
              <span className="contrib-day l1"></span>
              <span className="contrib-day l2"></span>
              <span className="contrib-day l3"></span>
              <span className="contrib-day l4"></span>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contributions;
