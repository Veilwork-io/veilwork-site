'use strict';
// All navigation and content remain usable without JavaScript.
const menu = document.querySelector('.mobile-menu');
if (menu) {
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.open = false;
      const target = document.querySelector(link.hash);
      if (target) {
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
        target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
      }
    });
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.open) { menu.open = false; menu.querySelector('summary').focus(); }
  });
  document.addEventListener('click', (event) => { if (menu.open && !menu.contains(event.target)) menu.open = false; });
  window.matchMedia('(max-width: 560px)').addEventListener('change', () => { menu.open = false; });
}
const year = document.getElementById('copyright-year');
if (year) year.textContent = String(new Date().getFullYear());
