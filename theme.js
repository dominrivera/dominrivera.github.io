(() => {
    'use strict';

    const STORAGE_KEY = 'portfolio-theme';

    function systemTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }

    function getStoredTheme() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored === 'light' || stored === 'dark') return stored;
        } catch (_) { /* ignore */ }
        return null;
    }

    function applyTheme(theme, persist) {
        const next = theme === 'dark' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', next);

        const btn = document.getElementById('theme-toggle');
        if (btn) {
            btn.setAttribute('aria-label', next === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
            btn.setAttribute('title', next === 'dark' ? 'Light mode' : 'Dark mode');
            const tip = btn.closest('.tooltip');
            if (tip) tip.setAttribute('data-title', next === 'dark' ? 'Light mode' : 'Dark mode');
        }

        if (persist) {
            try { localStorage.setItem(STORAGE_KEY, next); } catch (_) { /* ignore */ }
        }
    }

    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        applyTheme(current === 'dark' ? 'light' : 'dark', true);
    }

    function init() {
        const initial = getStoredTheme() || systemTheme();
        applyTheme(initial, false);

        const btn = document.getElementById('theme-toggle');
        if (btn) btn.addEventListener('click', toggleTheme);

        // Follow OS only if user hasn't chosen manually
        if (window.matchMedia) {
            const mq = window.matchMedia('(prefers-color-scheme: dark)');
            const onChange = (e) => {
                if (getStoredTheme()) return;
                applyTheme(e.matches ? 'dark' : 'light', false);
            };
            if (mq.addEventListener) mq.addEventListener('change', onChange);
            else if (mq.addListener) mq.addListener(onChange);
        }
    }

    // Expose for debugging / other scripts
    window.setPortfolioTheme = (theme) => applyTheme(theme, true);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
