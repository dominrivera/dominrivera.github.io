(() => {
    'use strict';

    const FALLBACK_SKILLS = [
        'Kubernetes', 'OpenShift', 'Terraform', 'Ansible', 'ArgoCD',
        'GitLab CI', 'Vault', 'OpenBao', 'AWS', 'Azure', 'GCP',
        'Prometheus', 'Grafana', 'Linux', 'Python', 'Bash',
        'Docker', 'Nomad', 'Puppet', 'OpenStack',
    ];

    const TRIPLE_MS = 550;
    const RAIN_MS = 4200;

    let running = false;
    let clickCount = 0;
    let clickTimer = null;
    let layer = null;
    let cleanupTimer = null;

    function prefersReducedMotion() {
        return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    function getSkills() {
        const fromDom = Array.from(document.querySelectorAll('#tech-content .tech-badge'))
            .map((el) => (el.textContent || '').trim())
            .filter(Boolean);

        // Prefer live Technologies section if visible; otherwise fallback list
        const unique = [...new Set(fromDom.length ? fromDom : FALLBACK_SKILLS)];
        return unique;
    }

    function cleanup() {
        if (cleanupTimer) {
            clearTimeout(cleanupTimer);
            cleanupTimer = null;
        }
        if (layer && layer.parentNode) layer.parentNode.removeChild(layer);
        layer = null;
        running = false;
    }

    function spawnRain() {
        if (running) return;
        running = true;

        const skills = getSkills();
        const reduced = prefersReducedMotion();
        const count = reduced ? Math.min(12, skills.length) : Math.min(36, Math.max(22, skills.length * 2));

        layer = document.createElement('div');
        layer.id = 'matrix-rain-layer';
        layer.setAttribute('aria-hidden', 'true');

        const flash = document.createElement('div');
        flash.id = 'matrix-rain-flash';
        layer.appendChild(flash);

        document.body.appendChild(layer);
        requestAnimationFrame(() => flash.classList.add('on'));

        for (let i = 0; i < count; i++) {
            const drop = document.createElement('span');
            drop.className = 'matrix-drop';
            if (i % 3 === 0) drop.classList.add('alt');
            if (i % 7 === 0) drop.classList.add('hot');

            drop.textContent = skills[i % skills.length];
            drop.style.left = (Math.random() * 96) + 'vw';
            drop.style.setProperty('--matrix-drift', ((Math.random() * 40) - 20).toFixed(1) + 'px');
            drop.style.setProperty('--matrix-rot', ((Math.random() * 10) - 5).toFixed(2) + 'deg');

            const duration = reduced
                ? (1.2 + Math.random() * 0.8)
                : (2.4 + Math.random() * 2.2);
            const delay = Math.random() * (reduced ? 0.4 : 1.1);

            drop.style.animationDuration = duration + 's';
            drop.style.animationDelay = delay + 's';
            drop.style.fontSize = (12 + Math.random() * 5).toFixed(1) + 'px';

            layer.appendChild(drop);
        }

        setTimeout(() => {
            if (flash) flash.classList.remove('on');
        }, 500);

        cleanupTimer = setTimeout(cleanup, RAIN_MS);
    }

    function onTechTripleClick(e) {
        // Ignore if user is selecting text heavily
        if (e.detail === 0) return;

        clickCount += 1;
        if (clickTimer) clearTimeout(clickTimer);

        if (clickCount >= 3) {
            clickCount = 0;
            spawnRain();
            return;
        }

        clickTimer = setTimeout(() => {
            clickCount = 0;
            clickTimer = null;
        }, TRIPLE_MS);
    }

    function isTechnologiesTarget(el) {
        if (!el || !el.closest) return false;
        if (el.closest('.menu-item[data-section="technologies"]')) return true;
        if (el.closest('#tech-content')) return true;
        // Section title inside technologies view
        const title = el.closest('.section-title');
        if (title && /technolog/i.test(title.textContent || '')) return true;
        return false;
    }

    function init() {
        document.addEventListener('click', (e) => {
            if (!isTechnologiesTarget(e.target)) {
                clickCount = 0;
                return;
            }
            onTechTripleClick(e);
        }, true);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
