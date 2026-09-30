/**
 * theme.js — Dark/Light theme toggle with localStorage persistence.
 *
 * Reads  "devops_theme" from localStorage → applies to <html data-theme>.
 * Toggles between "dark" and "light" on button click.
 * Icon updates: 🌙 for dark mode, ☀️ for light mode.
 */

(function () {
  'use strict';

  const THEME_KEY     = 'devops_theme';
  const DEFAULT_THEME = 'dark';

  function getStoredTheme() {
    try { return localStorage.getItem(THEME_KEY) || DEFAULT_THEME; }
    catch { return DEFAULT_THEME; }
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch {}
    updateToggleIcon(theme);
  }

  function updateToggleIcon(theme) {
    const btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  /* Apply theme immediately before first paint (inline in <head> is
     ideal, but this IIFE runs early enough to prevent flicker in
     most cases, especially via <script> just after <link> tags) */
  setTheme(getStoredTheme());

  function init() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    updateToggleIcon(getStoredTheme());
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || DEFAULT_THEME;
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
