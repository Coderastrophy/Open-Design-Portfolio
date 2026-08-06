import React from 'react';

const contribData = [
  // May (weeks 1-4)
  [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
  // Jun (weeks 5-8)
  [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
  // Jul (weeks 9-12)
  [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
  // Aug (weeks 13-16)
  [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
  // Sep (weeks 17-20)
  [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
  // Oct (weeks 21-24)
  [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
  // Nov (weeks 25-28)
  [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,1,0,0,0,0],
  // Dec (weeks 29-32)
  [0,2,2,1,0,0,0],[0,3,2,2,0,0,0],[0,2,3,2,1,0,0],[0,1,2,3,2,0,0],
  // Jan (weeks 33-36)
  [0,2,1,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,1,2,0,0,0],
  // Feb (weeks 37-40)
  [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,1,0,0],[0,0,0,0,0,0,0],
  // Mar (weeks 41-44)
  [0,1,0,0,0,0,0],[0,2,2,0,1,0,0],[0,1,0,2,0,0,0],[0,0,1,1,0,0,0],
  // Apr (weeks 45-48)
  [0,0,2,3,2,0,0],[0,1,0,2,3,0,0],[0,3,2,0,1,0,0],[0,2,3,2,0,0,0],
  // May 2026 (weeks 49-52)
  [0,1,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
];

const levelClass = ['', ' l1', ' l2', ' l3', ' l4'];
const monthLabels = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];

const Contributions = () => {
  return (
    <section className="contrib-section fade-in visible">
      <div className="contrib-container-centered">
        <div className="contrib-card-frame">
          <div className="contrib-card-header">
            <div className="contrib-card-title">
              <span className="contrib-card-dot">●</span>
              CONTRIBUTION ACTIVITY · GITHUB · 2026
            </div>
            <div className="contrib-card-stats">
              97 commits in the last year
            </div>
          </div>

          <div className="contrib-wrapper-scrollable">
            <div className="contrib-month-header">
              {monthLabels.map((m, i) => (
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
                {contribData.map((week, weekIdx) => (
                  <div className="contrib-week" key={weekIdx}>
                    {week.map((level, dayIdx) => (
                      <div
                        className={`contrib-day${levelClass[level]}`}
                        key={dayIdx}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="contrib-card-footer">
            <span className="contrib-footer-hint">Commit-driven development log</span>
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
