// ============================================================
// SCRIPT.JS — renders dynamic sections from data files
//
// This file does three things:
//   1. Imports data from /data/*.js
//   2. Renders HTML for Projects, Experience, and Coursework
//   3. Handles nav, scroll reveal, and mobile menu
// ============================================================

import { projects }    from './data/projects.js';
import { experience }  from './data/experience.js';
import { coursework }  from './data/coursework.js';

// ── Render: Projects ─────────────────────────────────────────
// Reads projects array, builds one .project-row per entry.
// The index number is automatic — no need to manually number them.

function renderProjects() {
  const list = document.getElementById('projects-list');
  if (!list) return;

  list.innerHTML = projects.map((p, i) => {
    const index = String(i + 1).padStart(2, '0');

    // Build link buttons — only include buttons for links that exist
    const linkButtons = [
      p.links.repo ? `<a href="${p.links.repo}" target="_blank" rel="noopener" class="btn">Repo ↗</a>` : '',
      p.links.live ? `<a href="${p.links.live}" target="_blank" rel="noopener" class="btn">Live ↗</a>` : '',
    ].filter(Boolean).join('');

    const tags = p.tags.map(t => `<span class="tag">${t}</span>`).join('');

    return `
      <div class="project-row">
        <span class="project-index">${index}</span>
        <div class="project-main">
          <p class="project-title">${p.title}${p.year ? `<span class="project-year"> — ${p.year}</span>` : ''}</p>
          <p class="project-desc">${p.description}</p>
          <div class="project-tags">${tags}</div>
        </div>
        <div class="project-links">${linkButtons}</div>
      </div>
    `;
  }).join('');
}

// ── Render: Experience ───────────────────────────────────────
// Reads experience array, builds one .experience-item per role.

function renderExperience() {
  const list = document.getElementById('experience-list');
  if (!list) return;

  list.innerHTML = experience.map(e => {
    const bullets = e.bullets.map(b => `<li>${b}</li>`).join('');
    return `
      <div class="experience-item">
        <div class="exp-meta">
          <p class="exp-dates">${e.dates}</p>
          <p class="exp-company">${e.company}</p>
        </div>
        <div class="exp-content">
          <p class="exp-role">${e.role}</p>
          <ul class="exp-bullets">${bullets}</ul>
        </div>
      </div>
    `;
  }).join('');
}

// ── Render: Coursework ───────────────────────────────────────
// Reads coursework array, builds one .course-group per category.

function renderCoursework() {
  const grid = document.getElementById('coursework-grid');
  if (!grid) return;

  grid.innerHTML = coursework.map(group => {
    const courses = group.courses.map(c => `<li class="course-item">${c}</li>`).join('');
    return `
      <div class="course-group">
        <p class="course-group-title">${group.category}</p>
        <ul>${courses}</ul>
      </div>
    `;
  }).join('');
}

// ── Nav: active state on scroll ──────────────────────────────
// Highlights the current section in the nav as you scroll.
// Uses IntersectionObserver — no scroll event listeners needed.

function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
}

// ── Nav: smooth scroll ───────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });

      // Close mobile menu if open
      document.querySelector('nav')?.classList.remove('open');
    });
  });
}

// ── Nav: mobile toggle ───────────────────────────────────────
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.querySelector('nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.textContent = isOpen ? '✕' : '☰';
  });
}

// ── Scroll reveal ────────────────────────────────────────────
// Same pattern as your original site — adds .in-view when
// an element enters the viewport, removes it when it leaves.

function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle('in-view', entry.isIntersecting);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── Footer year ──────────────────────────────────────────────
function initFooter() {
  const el = document.querySelector('#footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

// ── Boot ─────────────────────────────────────────────────────
// Everything runs after the DOM is ready.

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderExperience();
  renderCoursework();
  initNavHighlight();
  initSmoothScroll();
  initMobileNav();
  initScrollReveal();
  initFooter();
});
