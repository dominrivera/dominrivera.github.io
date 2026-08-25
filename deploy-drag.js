(() => {
    'use strict';

    const STAGES = [
        { id: 'build', label: 'build', running: 'compiling...', done: 'passed' },
        { id: 'test', label: 'test', running: 'running checks...', done: 'passed' },
        { id: 'deploy', label: 'deploy', running: 'shipping to prod...', done: 'live' },
    ];

    let dropzone = null;
    let pipeline = null;
    let panel = null;
    let footer = null;
    let stageEls = {};
    let running = false;
    let timers = [];
    let dragActive = false;

    function prefersReducedMotion() {
        return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    function clearTimers() {
        timers.forEach((id) => clearTimeout(id));
        timers = [];
    }

    function after(ms, fn) {
        const id = setTimeout(fn, prefersReducedMotion() ? Math.min(ms, 280) : ms);
        timers.push(id);
        return id;
    }

    function enableProfileDrag() {
        const img = document.querySelector('#card-content .card-img');
        if (!img) return;
        img.setAttribute('draggable', 'true');
        img.setAttribute('title', 'Drag to prod to deploy');
    }

    function ensureDropzone() {
        if (dropzone) return;
        dropzone = document.createElement('div');
        dropzone.id = 'deploy-dropzone';
        dropzone.setAttribute('aria-hidden', 'true');

        const env = document.createElement('div');
        env.className = 'dz-env';
        env.textContent = 'PROD';

        const title = document.createElement('div');
        title.className = 'dz-title';
        title.textContent = 'dropzone';

        const hint = document.createElement('div');
        hint.className = 'dz-hint';
        hint.appendChild(document.createTextNode('Drop profile'));
        hint.appendChild(document.createElement('br'));
        hint.appendChild(document.createTextNode('to deploy'));

        dropzone.appendChild(env);
        dropzone.appendChild(title);
        dropzone.appendChild(hint);

        dropzone.addEventListener('dragenter', onDragEnter);
        dropzone.addEventListener('dragover', onDragOver);
        dropzone.addEventListener('dragleave', onDragLeave);
        dropzone.addEventListener('drop', onDrop);

        document.body.appendChild(dropzone);
    }

    function ensurePipeline() {
        if (pipeline) return;

        pipeline = document.createElement('div');
        pipeline.id = 'deploy-pipeline';
        pipeline.setAttribute('aria-hidden', 'true');

        panel = document.createElement('div');
        panel.id = 'deploy-panel';
        panel.setAttribute('role', 'dialog');
        panel.setAttribute('aria-label', 'Deploy pipeline');

        const title = document.createElement('p');
        title.className = 'deploy-title';
        title.textContent = 'pipeline · domingo → production';

        const stagesWrap = document.createElement('div');
        stagesWrap.className = 'deploy-stages';

        STAGES.forEach((stage) => {
            const row = document.createElement('div');
            row.className = 'deploy-stage';
            row.dataset.stage = stage.id;

            const icon = document.createElement('span');
            icon.className = 'stage-icon';
            icon.textContent = '○';

            const name = document.createElement('span');
            name.className = 'stage-name';
            name.textContent = stage.label;

            const status = document.createElement('span');
            status.className = 'stage-status';
            status.textContent = 'waiting';

            row.appendChild(icon);
            row.appendChild(name);
            row.appendChild(status);
            stagesWrap.appendChild(row);
            stageEls[stage.id] = { row, icon, status };
        });

        footer = document.createElement('div');
        footer.className = 'deploy-footer';
        footer.textContent = '';

        panel.appendChild(title);
        panel.appendChild(stagesWrap);
        panel.appendChild(footer);
        pipeline.appendChild(panel);

        pipeline.addEventListener('click', (e) => {
            if (e.target === pipeline && !running) closePipeline();
        });

        document.body.appendChild(pipeline);
    }

    function showDropzone() {
        ensureDropzone();
        dropzone.classList.add('visible');
        dropzone.setAttribute('aria-hidden', 'false');
    }

    function hideDropzone() {
        if (!dropzone) return;
        dropzone.classList.remove('visible', 'over');
        dropzone.setAttribute('aria-hidden', 'true');
    }

    function resetStages() {
        STAGES.forEach((stage) => {
            const el = stageEls[stage.id];
            if (!el) return;
            el.row.className = 'deploy-stage';
            el.icon.textContent = '○';
            el.status.textContent = 'waiting';
        });
        if (footer) {
            footer.className = 'deploy-footer';
            footer.textContent = 'Starting pipeline...';
        }
        if (panel) panel.classList.remove('success');
    }

    function setStage(id, state, statusText) {
        const el = stageEls[id];
        if (!el) return;
        el.row.className = 'deploy-stage ' + state;
        if (state === 'active') {
            el.icon.textContent = '◉';
        } else if (state === 'done') {
            el.icon.textContent = '✓';
        } else if (state === 'failed') {
            el.icon.textContent = '✕';
        } else {
            el.icon.textContent = '○';
        }
        el.status.textContent = statusText;
    }

    function openPipeline() {
        ensurePipeline();
        resetStages();
        pipeline.classList.add('open');
        pipeline.setAttribute('aria-hidden', 'false');
    }

    function closePipeline() {
        if (!pipeline) return;
        pipeline.classList.remove('open');
        pipeline.setAttribute('aria-hidden', 'true');
    }

    function runPipeline() {
        if (running) return;
        running = true;
        clearTimers();
        hideDropzone();
        openPipeline();

        let i = 0;

        function next() {
            if (i >= STAGES.length) {
                if (footer) {
                    footer.className = 'deploy-footer ok';
                    footer.textContent = '✓ Deployed successfully · revision: domingo@latest';
                }
                if (panel) panel.classList.add('success');
                running = false;
                after(2200, closePipeline);
                return;
            }

            const stage = STAGES[i];
            setStage(stage.id, 'active', stage.running);
            if (footer) {
                footer.className = 'deploy-footer';
                footer.textContent = 'stage: ' + stage.label;
            }

            after(900 + i * 120, () => {
                setStage(stage.id, 'done', stage.done);
                i += 1;
                after(280, next);
            });
        }

        next();
    }

    function onDragEnter(e) {
        e.preventDefault();
        if (dropzone) dropzone.classList.add('over');
    }

    function onDragOver(e) {
        e.preventDefault();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';
        if (dropzone) dropzone.classList.add('over');
    }

    function onDragLeave(e) {
        if (!dropzone) return;
        if (e.target === dropzone) dropzone.classList.remove('over');
    }

    function onDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        if (dropzone) dropzone.classList.remove('over');
        const type = e.dataTransfer && e.dataTransfer.getData('text/plain');
        if (type !== 'profile-deploy' && !dragActive) return;
        runPipeline();
    }

    function onDragStart(e) {
        const img = e.target.closest && e.target.closest('.card-img');
        if (!img) return;
        dragActive = true;
        if (e.dataTransfer) {
            e.dataTransfer.setData('text/plain', 'profile-deploy');
            e.dataTransfer.effectAllowed = 'move';
            try {
                e.dataTransfer.setDragImage(img, img.width / 2, img.height / 2);
            } catch (_) { /* older browsers */ }
        }
        showDropzone();
    }

    function onDragEnd() {
        dragActive = false;
        if (!running) hideDropzone();
    }

    function init() {
        enableProfileDrag();

        const cardContent = document.getElementById('card-content');
        if (cardContent) {
            const observer = new MutationObserver(() => enableProfileDrag());
            observer.observe(cardContent, { childList: true, subtree: true });
        }

        document.addEventListener('dragstart', onDragStart, true);
        document.addEventListener('dragend', onDragEnd, true);

        // Prevent browser from navigating away when dropping outside
        document.addEventListener('dragover', (e) => {
            if (dragActive) e.preventDefault();
        });
        document.addEventListener('drop', (e) => {
            if (dragActive) e.preventDefault();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
