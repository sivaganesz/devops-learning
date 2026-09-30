/**
 * nav.js — Prev/Next page navigation + code copy buttons + KC toggles.
 *
 * Features:
 *  1. Injects Prev/Next links into .bottom-nav containers
 *  2. Copy-to-clipboard for .code-copy-btn elements
 *  3. Knowledge Check question expand/collapse
 *  4. Smooth anchor scrolling for in-page links
 */

(function () {
  'use strict';

  /* ----------------------------------------------------------------
     Determine root prefix (same logic as sidebar.js)
     ---------------------------------------------------------------- */
  function getRootPrefix() {
    const path = window.location.pathname.replace(/\\/g, '/');
    return path.includes('/phases/') ? '../' : '';
  }

  function resolveUrl(file) {
    return getRootPrefix() + file;
  }

  /* ----------------------------------------------------------------
     Build Prev/Next navigation
     ---------------------------------------------------------------- */
  function buildBottomNav() {
    const containers = document.querySelectorAll('.bottom-nav');
    if (containers.length === 0) return;

    const path     = window.location.pathname.replace(/\\/g, '/');
    const filename = path.split('/').pop() || 'index.html';
    const phase    = DEVOPS_ROUTES.phases.find(p => p.file.split('/').pop() === filename);
    if (!phase) return;

    const prev = DEVOPS_ROUTES.getPrev(phase.id);
    const next = DEVOPS_ROUTES.getNext(phase.id);

    containers.forEach(container => {
      let html = '';

      if (prev) {
        html += `
          <a href="${resolveUrl(prev.file)}" class="bottom-nav-btn nav-prev">
            <span class="nav-btn-arrow">←</span>
            <span class="nav-btn-text">
              <span class="nav-btn-label">Previous</span>
              <span class="nav-btn-title">Phase ${prev.number}: ${prev.title}</span>
            </span>
          </a>
        `;
      } else {
        html += `<span class="bottom-nav-spacer"></span>`;
      }

      if (next) {
        html += `
          <a href="${resolveUrl(next.file)}" class="bottom-nav-btn nav-next">
            <span class="nav-btn-text">
              <span class="nav-btn-label">Next</span>
              <span class="nav-btn-title">Phase ${next.number}: ${next.title}</span>
            </span>
            <span class="nav-btn-arrow">→</span>
          </a>
        `;
      } else {
        html += `<span class="bottom-nav-spacer"></span>`;
      }

      container.innerHTML = html;
    });
  }

  /* ----------------------------------------------------------------
     Copy-to-clipboard for code blocks
     ---------------------------------------------------------------- */
  function initCodeCopy() {
    document.querySelectorAll('.code-copy-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const wrapper = btn.closest('.code-block-wrapper');
        if (!wrapper) return;
        const pre = wrapper.querySelector('pre');
        if (!pre) return;

        const text = pre.textContent || '';
        try {
          await navigator.clipboard.writeText(text);
          btn.textContent = '✓ Copied';
          btn.classList.add('copied');
          setTimeout(() => {
            btn.textContent = 'Copy';
            btn.classList.remove('copied');
          }, 2000);
        } catch {
          // Fallback for file:// where clipboard API may be restricted
          const ta = document.createElement('textarea');
          ta.value = text;
          ta.style.position = 'fixed';
          ta.style.opacity  = '0';
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
          btn.textContent = '✓ Copied';
          btn.classList.add('copied');
          setTimeout(() => {
            btn.textContent = 'Copy';
            btn.classList.remove('copied');
          }, 2000);
        }
      });
    });
  }

  /* ----------------------------------------------------------------
     Knowledge Check toggles
     ---------------------------------------------------------------- */
  function initKnowledgeCheck() {
    document.querySelectorAll('.kc-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.kc-item');
        if (!item) return;
        const isOpen = item.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen);
      });
    });
  }

  /* ----------------------------------------------------------------
     Smooth scroll for anchor links (works on file://)
     ---------------------------------------------------------------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const id = link.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if (!el) return;
        e.preventDefault();
        const topOffset = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--topbar-height') || '56'
        ) + 12;
        const top = el.getBoundingClientRect().top + window.pageYOffset - topOffset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  /* ----------------------------------------------------------------
     Init
     ---------------------------------------------------------------- */
  function init() {
    buildBottomNav();
    initCodeCopy();
    initKnowledgeCheck();
    initSmoothScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
