// Contribution grid — faithful to actual GitHub data (97 contributions, 2026)
  // Pattern: mostly empty May–Nov, spikes in Dec–Jan, Feb quiet, Mar–Apr active
  // Each week = [Mon,Tue,Wed,Thu,Fri,Sat,Sun], levels: 0=none,1=light,2=mid,3=dark,4=darkest
  const contribData = [
    // May (weeks 1-4) — sparse
    [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
    // Jun (weeks 5-8) — sparse
    [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
    // Jul (weeks 9-12) — sparse
    [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
    // Aug (weeks 13-16) — sparse
    [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
    // Sep (weeks 17-20) — sparse
    [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
    // Oct (weeks 21-24) — sparse
    [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
    // Nov (weeks 25-28) — sparse, one tiny burst
    [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,1,0,0,0,0],
    // Dec (weeks 29-32) — spike! heavy Mon–Fri activity
    [0,2,2,1,0,0,0],[0,3,2,2,0,0,0],[0,2,3,2,1,0,0],[0,1,2,3,2,0,0],
    // Jan (weeks 33-36) — continued activity, slight drop mid-month
    [0,2,1,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,1,2,0,0,0],
    // Feb (weeks 37-40) — quiet
    [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,1,0,0],[0,0,0,0,0,0,0],
    // Mar (weeks 41-44) — resurgence
    [0,1,0,0,0,0,0],[0,2,2,0,1,0,0],[0,1,0,2,0,0,0],[0,0,1,1,0,0,0],
    // Apr (weeks 45-48) — strong finish, spikes visible
    [0,0,2,3,2,0,0],[0,1,0,2,3,0,0],[0,3,2,0,1,0,0],[0,2,3,2,0,0,0],
    // May 2026 (weeks 49-52) — recent, 1 commit visible
    [0,1,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
  ];

  const grid = document.getElementById('contrib-grid');
  const levelClass = ['', ' l1', ' l2', ' l3', ' l4'];
  contribData.forEach(week => {
    const weekEl = document.createElement('div');
    weekEl.className = 'contrib-week';
    week.forEach(level => {
      const day = document.createElement('div');
      day.className = 'contrib-day' + levelClass[level];
      weekEl.appendChild(day);
    });
    grid.appendChild(weekEl);
  });

  // Intersection observer for fade-in
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
