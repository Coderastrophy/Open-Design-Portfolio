export const fetchGithubProfile = async () => {
  try {
    const res = await fetch('https://api.github.com/users/Coderastrophy');
    if (!res.ok) throw new Error('Failed to fetch user');
    return await res.json();
  } catch (err) {
    console.warn('Using fallback profile data:', err);
    return {
      public_repos: 21,
      followers: 3,
      following: 6,
      location: 'Ethiopia',
    };
  }
};

export const fetchGithubEvents = async () => {
  try {
    const res = await fetch('https://api.github.com/users/Coderastrophy/events?per_page=50');
    if (!res.ok) throw new Error('Failed to fetch events');
    const events = await res.json();
    return events;
  } catch (err) {
    console.warn('Using fallback events data:', err);
    return [];
  }
};

export const fetchGithubRepos = async () => {
  try {
    const res = await fetch('https://api.github.com/users/Coderastrophy/repos?per_page=100&sort=updated');
    if (!res.ok) throw new Error('Failed to fetch repos');
    return await res.json();
  } catch (err) {
    console.warn('Using fallback repos data:', err);
    return [];
  }
};

export const fetchGithubContributions = async (year = 'last') => {
  try {
    const url = `https://github-contributions-api.jogruber.de/v4/Coderastrophy?y=${year}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch contributions for ${year}`);
    return await res.json();
  } catch (err) {
    console.warn('Using fallback contributions data:', err);
    return null;
  }
};
