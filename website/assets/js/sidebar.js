/**
 * sidebar.js — Builds the sidebar + page TOC from DEVOPS_ROUTES.
 *
 * Works on file:// — uses DEVOPS_ROUTES global (loaded via <script src>).
 * Detects current page, marks visited pages, handles expand/collapse.
 *
 * Depends on: routes.js, progress.js (for visited pages)
 */

(function () {
  'use strict';

  /* ----------------------------------------------------------------
     Path Utilities
     Compute the root-relative prefix based on current page location.
     Phase pages are one level deep (phases/), root pages are at root.
     ---------------------------------------------------------------- */
  function getRootPrefix() {
    const path = window.location.pathname.replace(/\\/g, '/');
    // If current file is inside a subdirectory (phases/), go up one level
    if (path.includes('/phases/')) return '../';
    return '';
  }

  function resolveUrl(file) {
    return getRootPrefix() + file;
  }

  /* ----------------------------------------------------------------
     Detect current page ID
     ---------------------------------------------------------------- */
  function getCurrentPageId() {
    const path = window.location.pathname.replace(/\\/g, '/');
    const filename = path.split('/').pop() || 'index.html';

    // Check phases
    for (const phase of DEVOPS_ROUTES.phases) {
      const phaseFile = phase.file.split('/').pop();
      if (phaseFile === filename) return phase.id;
    }
    // Check specials
    for (const sp of DEVOPS_ROUTES.specials) {
      if (sp.file === filename || filename === 'index.html' && sp.id === 'home') return sp.id;
    }
    return null;
  }

  /* ----------------------------------------------------------------
     Build Sidebar HTML
     ---------------------------------------------------------------- */
  function buildSidebar() {
    const nav = document.getElementById('sidebarNav');
    if (!nav) return;

    const currentId = getCurrentPageId();
    const visited   = getVisitedPages(); // from progress.js

    let html = '';

    /* ---- Progress summary ---- */
    const total   = DEVOPS_ROUTES.phases.length;
    const done    = DEVOPS_ROUTES.phases.filter(p => visited.includes(p.id)).length;
    const pct     = Math.round((done / total) * 100);

    html += `
      <div class="sidebar-progress-summary">
        <span>${done} of ${total} phases visited &bull; ${pct}% complete</span>
        <div class="sp-bar"><div class="sp-fill" style="width:${pct}%"></div></div>
      </div>
    `;

    /* ---- Phase navigation label ---- */
    html += `<div class="sidebar-section-label">Learning Path</div>`;

    /* ---- Phase groups ---- */
    DEVOPS_ROUTES.phases.forEach(phase => {
      const isCurrent = phase.id === currentId;
      const isVisited = visited.includes(phase.id);
      const isExpanded = isCurrent || isVisited; // expand current and visited

      const statusClass = isCurrent ? 'status-current' : (isVisited ? 'status-done' : '');
      const statusIcon  = isCurrent ? '▶' : (isVisited ? '✓' : phase.number);
      const levelClass  = phase.level === 'intermediate' ? 'lvl-intermediate'
                       : phase.level === 'advanced'      ? 'lvl-advanced' : '';
      const groupClass  = isExpanded ? 'phase-group expanded' : 'phase-group';

      html += `
        <div class="${groupClass}" data-phase-id="${phase.id}">
          <button class="phase-header" aria-expanded="${isExpanded}">
            <span class="phase-status ${statusClass}" aria-label="${isVisited ? 'Visited' : 'Not started'}">${statusIcon}</span>
            <span class="phase-number">${phase.number}</span>
            <span class="phase-title">${phase.title}</span>
            <span class="phase-level-dot ${levelClass}" title="${phase.level}"></span>
            <span class="phase-chevron">›</span>
          </button>
          <div class="phase-topics" role="list">
            ${phase.topics.map(topic => `
              <span class="topic-item" role="listitem">${topic}</span>
            `).join('')}
            <a href="${resolveUrl(phase.file)}"
               class="topic-item ${isCurrent ? 'active' : (isVisited ? 'visited' : '')}"
               role="listitem">
              📄 Go to page
            </a>
          </div>
        </div>
      `;
    });

    /* ---- Extras (Glossary, Search, Architecture, Journey) ---- */
    html += `
      <div class="sidebar-extras">
        <div class="sidebar-section-label">Reference</div>
    `;
    DEVOPS_ROUTES.specials.filter(s => s.id !== 'home').forEach(sp => {
      const isActive = sp.id === currentId;
      html += `
        <a href="${resolveUrl(sp.file)}"
           class="sidebar-extra-item ${isActive ? 'active' : ''}">
          <span class="extra-icon">${sp.icon}</span>
          ${sp.title}
        </a>
      `;
    });
    html += `</div>`;

    nav.innerHTML = html;

    /* ---- Attach expand/collapse handlers ---- */
    nav.querySelectorAll('.phase-header').forEach(btn => {
      btn.addEventListener('click', () => {
        const group = btn.closest('.phase-group');
        const isNowExpanded = group.classList.toggle('expanded');
        btn.setAttribute('aria-expanded', isNowExpanded);
      });
    });
  }

  /* ----------------------------------------------------------------
     Build Page TOC from headings in .main-content
     ---------------------------------------------------------------- */
  function buildTOC() {
    const tocNav = document.getElementById('tocNav');
    if (!tocNav) return;

    const content = document.querySelector('.main-content');
    if (!content) return;

    const headings = content.querySelectorAll('h2[id], h3[id]');
    if (headings.length === 0) return;

    let html = '<ul class="toc-list">';
    headings.forEach(h => {
      const isH3 = h.tagName === 'H3';
      html += `
        <li>
          <a href="#${h.id}" class="toc-link ${isH3 ? 'toc-h3' : ''}" data-heading="${h.id}">
            ${h.textContent.replace(/^[^\w]+/, '').trim()}
          </a>
        </li>
      `;
    });
    html += '</ul>';
    tocNav.innerHTML = html;

    /* Highlight active TOC item on scroll */
    const links  = tocNav.querySelectorAll('.toc-link');
    const heads  = Array.from(headings);
    const topOff = 80;

    function updateActiveTOC() {
      let active = heads[0];
      heads.forEach(h => {
        if (h.getBoundingClientRect().top <= topOff + 10) active = h;
      });
      links.forEach(l => {
        l.classList.toggle('toc-active', l.dataset.heading === active?.id);
      });
    }

    window.addEventListener('scroll', updateActiveTOC, { passive: true });
    updateActiveTOC();
  }

  /* ----------------------------------------------------------------
     Build Breadcrumb
     ---------------------------------------------------------------- */
  function buildBreadcrumb() {
    const bc = document.getElementById('breadcrumb');
    if (!bc) return;

    const currentId = getCurrentPageId();
    const phase = DEVOPS_ROUTES.phases.find(p => p.id === currentId);
    const special = DEVOPS_ROUTES.specials.find(s => s.id === currentId);

    let html = `<a class="bc-item" href="${resolveUrl('index.html')}">Home</a>`;

    if (phase) {
      html += `<span class="bc-sep">›</span>`;
      html += `<span class="bc-item bc-current">Phase ${phase.number}: ${phase.title}</span>`;
    } else if (special && special.id !== 'home') {
      html += `<span class="bc-sep">›</span>`;
      html += `<span class="bc-item bc-current">${special.title}</span>`;
    }

    bc.innerHTML = html;
  }

  /* ----------------------------------------------------------------
     Sidebar toggle (hamburger)
     ---------------------------------------------------------------- */
  function initSidebarToggle() {
    const btn     = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    if (!btn || !sidebar) return;

    // Create overlay
    let overlay = document.getElementById('sidebarOverlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'sidebarOverlay';
      overlay.className = 'sidebar-overlay';
      document.body.appendChild(overlay);
    }

    function openSidebar() {
      sidebar.classList.add('sidebar-open');
      overlay.classList.add('active');
      btn.setAttribute('aria-expanded', 'true');
    }
    function closeSidebar() {
      sidebar.classList.remove('sidebar-open');
      overlay.classList.remove('active');
      btn.setAttribute('aria-expanded', 'false');
    }

    btn.addEventListener('click', () => {
      sidebar.classList.contains('sidebar-open') ? closeSidebar() : openSidebar();
    });
    overlay.addEventListener('click', closeSidebar);

    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeSidebar();
    });
  }

  /* ----------------------------------------------------------------
     Init on DOM ready
     ---------------------------------------------------------------- */
  function init() {
    buildSidebar();
    buildTOC();
    buildBreadcrumb();
    initSidebarToggle();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
