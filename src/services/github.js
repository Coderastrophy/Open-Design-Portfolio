export const fetchGithubProfile = async () => {
  try {
    const res = await fetch('https://api.github.com/users/Coderastrophy');
    if (!res.ok) throw new Error('Failed to fetch user');
    return await res.json();
  } catch (err) {
    console.warn('Using fallback profile data:', err);
    return {
      public_repos: 9,
      followers: 3,
      following: 6,
      location: 'Ethiopia',
    };
  }
};

export const fetchGithubEvents = async () => {
  try {
    const res = await fetch('https://api.github.com/users/Coderastrophy/events');
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
    const res = await fetch('https://api.github.com/users/Coderastrophy/repos');
    if (!res.ok) throw new Error('Failed to fetch repos');
    return await res.json();
  } catch (err) {
    console.warn('Using fallback repos data:', err);
    return [];
  }
};
