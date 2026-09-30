/**
 * progress.js — localStorage-based page visit tracking.
 *
 * API (used by sidebar.js and other scripts):
 *   getVisitedPages()        → string[]  (array of visited phase IDs)
 *   markCurrentPageVisited() → void
 *   getProgressPercent()     → number (0–100)
 *
 * Storage key: "devops_visited_pages"
 */

const STORAGE_KEY = 'devops_visited_pages';

function getVisitedPages() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveVisitedPages(pages) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pages));
  } catch {
    // localStorage unavailable (e.g., private browsing with restrictions)
  }
}

function markCurrentPageVisited() {
  const path = window.location.pathname.replace(/\\/g, '/');
  const filename = path.split('/').pop() || 'index.html';

  // Find matching phase
  const phase = DEVOPS_ROUTES.phases.find(p => {
    return p.file.split('/').pop() === filename;
  });
  if (!phase) return; // Not a phase page — don't track

  const visited = getVisitedPages();
  if (!visited.includes(phase.id)) {
    visited.push(phase.id);
    saveVisitedPages(visited);
  }
}

function getProgressPercent() {
  const total   = DEVOPS_ROUTES.phases.length;
  const visited = getVisitedPages().filter(id =>
    DEVOPS_ROUTES.phases.some(p => p.id === id)
  ).length;
  return total === 0 ? 0 : Math.round((visited / total) * 100);
}

/* ----------------------------------------------------------------
   Update progress bar in topbar
   ---------------------------------------------------------------- */
function updateProgressBar() {
  const fill  = document.getElementById('progressFill');
  const label = document.getElementById('progressLabel');
  if (!fill && !label) return;

  const pct = getProgressPercent();
  if (fill)  fill.style.width = pct + '%';
  if (label) label.textContent = pct + '% complete';
}

/* ----------------------------------------------------------------
   Init — mark page visited and update UI
   ---------------------------------------------------------------- */
(function () {
  function init() {
    markCurrentPageVisited();
    updateProgressBar();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
