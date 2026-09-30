/**
 * search-engine.js — Client-side full-text search.
 *
 * Uses SEARCH_INDEX (defined in search-index.js) to search across
 * all topics, concepts, tools, commands, and technologies.
 *
 * Works on file:// — no server, no fetch.
 * Called from search.html.
 */

(function () {
  'use strict';

  /* ----------------------------------------------------------------
     Normalize text for search matching
     ---------------------------------------------------------------- */
  function normalize(str) {
    return str.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
  }

  /* ----------------------------------------------------------------
     Simple relevance scorer:
     - Exact title match:   score 100
     - Title word match:    score 20 per word
     - Tag match:           score 15 per tag
     - Excerpt word match:  score 5  per word
     ---------------------------------------------------------------- */
  function score(entry, queryWords) {
    let s = 0;
    const titleNorm   = normalize(entry.title);
    const excerptNorm = normalize(entry.excerpt || '');
    const tagsNorm    = (entry.tags || []).map(normalize);

    queryWords.forEach(w => {
      if (titleNorm === w)               s += 100;
      if (titleNorm.startsWith(w))       s +=  50;
      if (titleNorm.includes(w))         s +=  20;
      if (excerptNorm.includes(w))       s +=   5;
      tagsNorm.forEach(t => {
        if (t === w)           s += 15;
        else if (t.includes(w)) s +=  8;
      });
    });
    return s;
  }

  /* ----------------------------------------------------------------
     Highlight matching words in a string
     ---------------------------------------------------------------- */
  function highlight(text, queryWords) {
    if (!text) return '';
    let result = text;
    queryWords.forEach(w => {
      const re = new RegExp(`(${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      result = result.replace(re, '<mark>$1</mark>');
    });
    return result;
  }

  /* ----------------------------------------------------------------
     Main search function
     Returns array of { entry, score } sorted by relevance
     ---------------------------------------------------------------- */
  function search(query) {
    var index = (typeof SEARCH_INDEX !== 'undefined') ? SEARCH_INDEX : (typeof window !== 'undefined' ? window.SEARCH_INDEX : []);
    if (!index || !index.length) return [];

    const words = normalize(query).split(' ').filter(w => w.length >= 2);
    if (words.length === 0) return [];

    const results = index
      .map(entry => ({ entry, score: score(entry, words) }))
      .filter(r => r.score > 0)
      .sort((a, b) => b.score - a.score);

    return results;
  }

  /* ----------------------------------------------------------------
     Render results into #searchResults
     ---------------------------------------------------------------- */
  function renderResults(results, query) {
    const container = document.getElementById('searchResults');
    const countEl   = document.getElementById('resultsCount');
    if (!container) return;

    const words = normalize(query).split(' ').filter(w => w.length >= 2);

    if (results.length === 0) {
      container.innerHTML = `
        <div style="text-align:center; padding: 48px; color: var(--txt-muted);">
          <div style="font-size:2rem;margin-bottom:12px;">🔍</div>
          <p>No results found for <strong style="color:var(--txt-primary)">"${query}"</strong></p>
          <p style="font-size:0.875rem;margin-top:8px;">Try searching for a tool, concept, or command.</p>
        </div>
      `;
      if (countEl) countEl.textContent = '0 results';
      return;
    }

    if (countEl) countEl.textContent = `${results.length} result${results.length === 1 ? '' : 's'}`;

    container.innerHTML = results.map(({ entry }) => `
      <a href="${entry.url}" class="search-result-item">
        <div class="sri-title">${highlight(entry.title, words)}</div>
        <div class="sri-phase">${entry.phase || ''}</div>
        <div class="sri-excerpt">${highlight(entry.excerpt || '', words)}</div>
        <div class="sri-tags">
          ${(entry.tags || []).slice(0, 6).map(t => `<span class="sri-tag">${t}</span>`).join('')}
        </div>
      </a>
    `).join('');
  }

  /* ----------------------------------------------------------------
     Init search page
     ---------------------------------------------------------------- */
  function initSearchPage() {
    const input = document.getElementById('searchInput');
    if (!input) return;

    // Pre-fill from URL param ?q=...
    const params = new URLSearchParams(window.location.search);
    const q      = params.get('q') || '';
    if (q) {
      input.value = q;
      const results = search(q);
      renderResults(results, q);
    }

    // Live search on input
    let debounceTimer;
    input.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const val = input.value.trim();
        if (val.length >= 2) {
          renderResults(search(val), val);
        } else {
          const container = document.getElementById('searchResults');
          const countEl   = document.getElementById('resultsCount');
          if (container) container.innerHTML = '';
          if (countEl)   countEl.textContent = '';
        }
      }, 200);
    });

    // Focus input
    input.focus();
  }

  window.DevOpsSearch = { search, renderResults, initSearchPage };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSearchPage);
  } else {
    initSearchPage();
  }
})();
