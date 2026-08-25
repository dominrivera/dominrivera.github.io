(function () {
    'use strict';

    let lastTap = 0;
    let busy = false;
    let savedHtml = null;

    function prefersReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    function rand(min, max) {
        return min + Math.random() * (max - min);
    }

    function armPhoto(img) {
        if (!img || img.dataset.photoEggArmed === '1') return;
        img.dataset.photoEggArmed = '1';
        img.classList.add('photo-egg-armed');
    }

    function scanPhotos() {
        document.querySelectorAll('#card-content .card-img').forEach(armPhoto);
    }

    function wrapAllLetters(root) {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode: function (node) {
                if (!node.nodeValue) return NodeFilter.FILTER_REJECT;
                const parent = node.parentElement;
                if (!parent) return NodeFilter.FILTER_REJECT;
                if (parent.closest('.card-img, script, style, .photo-egg-fly, i')) {
                    return NodeFilter.FILTER_REJECT;
                }
                if (!/[^\s]/.test(node.nodeValue)) return NodeFilter.FILTER_REJECT;
                return NodeFilter.FILTER_ACCEPT;
            }
        });

        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);

        nodes.forEach(function (textNode) {
            const text = textNode.nodeValue;
            const frag = document.createDocumentFragment();

            for (let i = 0; i < text.length; i++) {
                const ch = text[i];
                if (/\s/.test(ch)) {
                    frag.appendChild(document.createTextNode(ch));
                    continue;
                }
                const span = document.createElement('span');
                span.className = 'photo-egg-fly photo-egg-char';
                span.textContent = ch;
                frag.appendChild(span);
            }

            textNode.parentNode.replaceChild(frag, textNode);
        });
    }

    function collectIcons() {
        const list = [];
        document.querySelectorAll(
            '#card-content i.fas, #card-content i.fab, #card-content i.far, ' +
            '.sidebar .menu-item, .sidebar #theme-toggle i, .sidebar .lang-flag'
        ).forEach(function (el) {
            list.push(el);
        });
        return list;
    }

    function armIcons(icons) {
        icons.forEach(function (el) {
            el.classList.add('photo-egg-fly', 'photo-egg-icon');
        });
    }

    function clearFlyStyles(el) {
        el.classList.remove(
            'photo-egg-fly',
            'photo-egg-icon',
            'photo-egg-shell',
            'photo-egg-shell-eating',
            'photo-egg-shell-launch'
        );
        [
            '--egg-dx', '--egg-dy', '--egg-rot', '--egg-over-x', '--egg-over-y',
            '--egg-bounce-x', '--egg-bounce-y', '--egg-spin',
            '--egg-launch-delay', '--egg-launch-dur', '--egg-ox', '--egg-oy'
        ].forEach(function (prop) {
            el.style.removeProperty(prop);
        });
        el.style.transitionDelay = '';
        el.style.animation = '';
        el.style.transform = '';
        el.style.opacity = '';
        el.style.filter = '';
        el.style.transformOrigin = '';
    }

    function clearIcons(icons) {
        icons.forEach(clearFlyStyles);
    }

    function armShell(el, img) {
        if (!el) return null;
        const elR = el.getBoundingClientRect();
        const imgR = img.getBoundingClientRect();
        if (!elR.width || !elR.height) return null;
        const ox = ((imgR.left + imgR.width / 2) - elR.left) / elR.width * 100;
        const oy = ((imgR.top + imgR.height / 2) - elR.top) / elR.height * 100;
        el.style.setProperty('--egg-ox', ox.toFixed(2) + '%');
        el.style.setProperty('--egg-oy', oy.toFixed(2) + '%');
        el.classList.add('photo-egg-shell');
        return el;
    }

    function aimAtPhoto(flyers, img) {
        const imgR = img.getBoundingClientRect();
        const cx = imgR.left + imgR.width / 2;
        const cy = imgR.top + imgR.height / 2;
        const reduced = prefersReducedMotion();

        flyers.forEach(function (el, i) {
            const r = el.getBoundingClientRect();
            if (!r.width && !r.height) return;
            const dx = cx - (r.left + r.width / 2);
            const dy = cy - (r.top + r.height / 2);
            el.style.setProperty('--egg-dx', dx.toFixed(1) + 'px');
            el.style.setProperty('--egg-dy', dy.toFixed(1) + 'px');
            el.style.setProperty('--egg-rot', rand(-40, 40).toFixed(1) + 'deg');
            el.style.transitionDelay = (reduced ? i * 3 : i * 5 + rand(0, 40)) + 'ms';
        });

        return flyers.length;
    }

    function prepLaunchBlast(flyers, reduced) {
        flyers.forEach(function (el, i) {
            const dx = parseFloat(el.style.getPropertyValue('--egg-dx')) || 0;
            const dy = parseFloat(el.style.getPropertyValue('--egg-dy')) || 0;
            const over = rand(0.22, 0.48);
            const bounce = rand(0.06, 0.14);

            el.style.setProperty('--egg-over-x', (-dx * over).toFixed(1) + 'px');
            el.style.setProperty('--egg-over-y', (-dy * over).toFixed(1) + 'px');
            el.style.setProperty('--egg-bounce-x', (dx * bounce).toFixed(1) + 'px');
            el.style.setProperty('--egg-bounce-y', (dy * bounce).toFixed(1) + 'px');
            el.style.setProperty('--egg-spin', rand(-220, 220).toFixed(1) + 'deg');
            el.style.setProperty(
                '--egg-launch-delay',
                (reduced ? i * 4 : rand(0, 180) + (i % 7) * 18) + 'ms'
            );
            el.style.setProperty(
                '--egg-launch-dur',
                (reduced ? 0.45 : rand(0.85, 1.2)).toFixed(2) + 's'
            );
            el.style.transitionDelay = '0ms';
        });
    }

    function cleanup(content, icons, shells) {
        document.body.classList.remove(
            'photo-egg-busy',
            'photo-egg-phase-eat',
            'photo-egg-phase-launch'
        );
        if (content) {
            content.classList.remove('photo-egg-eating', 'photo-egg-launch');
        }
        clearIcons(icons);
        (shells || []).forEach(function (el) {
            if (el) clearFlyStyles(el);
        });
        if (savedHtml != null && content) {
            content.innerHTML = savedHtml;
            savedHtml = null;
            scanPhotos();
        }
    }

    function gravityEat(img) {
        if (busy) return;
        const content = document.getElementById('card-content');
        const card = document.querySelector('.card');
        const sidebar = document.querySelector('.sidebar');
        if (!content) return;

        busy = true;
        const reduced = prefersReducedMotion();

        savedHtml = content.innerHTML;
        wrapAllLetters(content);

        const icons = collectIcons();
        armIcons(icons);
        const shells = [armShell(card, img), armShell(sidebar, img)].filter(Boolean);

        const flyers = Array.prototype.slice.call(
            document.querySelectorAll('.photo-egg-fly')
        );
        const count = aimAtPhoto(flyers, img);

        if (!count && !shells.length) {
            cleanup(content, icons, shells);
            busy = false;
            return;
        }

        document.body.classList.add('photo-egg-busy');
        img.classList.add('photo-egg-eating');
        void document.body.offsetWidth;
        document.body.classList.add('photo-egg-phase-eat');

        const eatMs = reduced ? 500 : Math.min(1400, 450 + count * 5);
        const holdMs = reduced ? 800 : 2200;
        const shellEatAt = reduced ? 280 : Math.floor(eatMs * 0.55);
        const launchMs = reduced ? 550 : 1300;
        const shellLaunchMs = reduced ? 400 : 700;

        // Card + sidebar crumple into the photo after letters start disappearing
        setTimeout(function () {
            shells.forEach(function (el) {
                el.classList.add('photo-egg-shell-eating');
            });
        }, shellEatAt);

        setTimeout(function () {
            // Shells pop back first, then letters/icons blast
            shells.forEach(function (el) {
                el.classList.remove('photo-egg-shell-eating');
                void el.offsetWidth;
                el.classList.add('photo-egg-shell-launch');
            });

            setTimeout(function () {
                prepLaunchBlast(flyers, reduced);

                document.body.classList.remove('photo-egg-phase-eat');
                void document.body.offsetWidth;
                document.body.classList.add('photo-egg-phase-launch');

                img.classList.remove('photo-egg-eating');
                img.classList.add('photo-egg-blast');

                if (navigator.vibrate) {
                    try { navigator.vibrate([12, 40, 18]); } catch (_) { /* ignore */ }
                }

                setTimeout(function () {
                    img.classList.remove('photo-egg-blast');
                    cleanup(content, icons, shells);
                    busy = false;
                }, launchMs + (reduced ? 200 : 450));
            }, shellLaunchMs);
        }, eatMs + holdMs);
    }

    function onClick(e) {
        const img = e.target && e.target.closest && e.target.closest('.card-img');
        if (!img || !document.getElementById('card-content')?.contains(img)) return;
        if (busy) return;

        const now = Date.now();
        if (now - lastTap < 400) return;
        lastTap = now;

        e.preventDefault();
        if (navigator.vibrate) {
            try { navigator.vibrate([10, 30, 10]); } catch (_) { /* ignore */ }
        }
        gravityEat(img);
    }

    function init() {
        scanPhotos();
        document.addEventListener('click', onClick, true);

        const content = document.getElementById('card-content');
        if (content && typeof MutationObserver !== 'undefined') {
            const obs = new MutationObserver(function () {
                if (!busy) scanPhotos();
            });
            obs.observe(content, { childList: true, subtree: true });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
