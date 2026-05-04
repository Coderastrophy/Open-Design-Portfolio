document.addEventListener('DOMContentLoaded', () => {
    const toggleBtns = document.querySelectorAll('#theme-toggle');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    // Helper to flip DOM and icon simultaneously across all active buttons
    const applyTheme = (isDark) => {
        if (isDark) {
            document.body.classList.add("dark-theme");
            toggleBtns.forEach(btn => btn.textContent = "☀️");
        } else {
            document.body.classList.remove("dark-theme");
            toggleBtns.forEach(btn => btn.textContent = "🌙");
        }
    };

    // Load persisted state immediately to prevent FOUC styling collisions
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark") {
        applyTheme(true);
    } else if (currentTheme == "light") {
        applyTheme(false);
    } else if (prefersDarkScheme.matches) {
        applyTheme(true);
    }

    // Bind interaction logic
    toggleBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            const isDarkNow = document.body.classList.contains("dark-theme");
            applyTheme(!isDarkNow);
            localStorage.setItem("theme", !isDarkNow ? "dark" : "light");
        });
    });
});
