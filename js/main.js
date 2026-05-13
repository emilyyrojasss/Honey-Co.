/* ============================================================
   HONEY & CO. — Event Planning · Costa Rica
   js/main.js
   ============================================================ */

'use strict';


/* ==================== NAVBAR — scroll & background ==================== */
(function () {
  const navbar = document.getElementById('navbar');
  const THRESHOLD = 60;

  function syncNavbar() {
    navbar.classList.toggle('scrolled', window.scrollY > THRESHOLD);
  }

  window.addEventListener('scroll', syncNavbar, { passive: true });
  syncNavbar();
})();


/* ==================== ACTIVE NAV LINK ==================== */
(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === page) {
      link.classList.add('is-active');
    }
  });
})();


/* ==================== HAMBURGER MENU ==================== */
(function () {
  const btn      = document.getElementById('hamburger');
  const menu     = document.getElementById('mobile-menu');
  const navLinks = menu.querySelectorAll('.mobile-link');

  function open() {
    btn.classList.add('is-open');
    menu.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    btn.classList.remove('is-open');
    menu.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', () => {
    menu.classList.contains('is-open') ? close() : open();
  });

  navLinks.forEach(link => link.addEventListener('click', close));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) close();
  });
})();


/* ==================== SMOOTH SCROLL (with navbar offset) ==================== */
(function () {
  const navbar = document.getElementById('navbar');

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - navbar.offsetHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();


/* ==================== FLOATING LABELS ==================== */
(function () {
  document.querySelectorAll('.field-input').forEach(input => {
    function checkValue() {
      input.classList.toggle('has-value', input.value !== '');
    }
    input.addEventListener('input',  checkValue);
    input.addEventListener('change', checkValue);
    checkValue();
  });
})();


/* ==================== FORM VALIDATION ==================== */
(function () {
  const form      = document.getElementById('quote-form');
  const successEl = document.getElementById('form-success');
  if (!form) return;

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setError(input, msg) {
    const el = input.closest('.field-group').querySelector('.field-error');
    if (el) el.textContent = msg;
    input.style.borderBottomColor = '#e07b7b';
  }

  function clearError(input) {
    const el = input.closest('.field-group').querySelector('.field-error');
    if (el) el.textContent = '';
    input.style.borderBottomColor = '';
  }

  function validateField(input) {
    const val = input.value.trim();
    if (input.hasAttribute('required') && !val) {
      setError(input, 'Este campo es requerido.');
      return false;
    }
    if (input.type === 'email' && val && !EMAIL_RE.test(val)) {
      setError(input, 'Ingresa un email válido.');
      return false;
    }
    clearError(input);
    return true;
  }

  function validateAll() {
    const ids = ['nombre', 'email', 'tipo-evento', 'presupuesto', 'mensaje'];
    return ids.map(id => validateField(document.getElementById(id))).every(Boolean);
  }

  function resetForm() {
    form.reset();
    form.querySelectorAll('.field-input').forEach(input => {
      input.classList.remove('has-value');
      input.style.borderBottomColor = '';
    });
    form.querySelectorAll('.field-error').forEach(el => { el.textContent = ''; });
  }

  form.querySelectorAll('.field-input').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validateAll()) return;

    form.style.opacity       = '0.35';
    form.style.pointerEvents = 'none';

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method:  'POST',
        body:    new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        successEl.classList.add('is-visible');
        successEl.setAttribute('aria-hidden', 'false');
        setTimeout(() => {
          resetForm();
          form.style.opacity       = '';
          form.style.pointerEvents = '';
          successEl.classList.remove('is-visible');
          successEl.setAttribute('aria-hidden', 'true');
        }, 5000);
      } else {
        throw new Error('server');
      }
    } catch {
      form.style.opacity       = '';
      form.style.pointerEvents = '';
      alert('Hubo un error al enviar. Por favor intenta de nuevo o escríbenos por WhatsApp.');
    }
  });
})();


/* ==================== GALLERY LIGHTBOX ==================== */
(function () {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const closeBtn = document.getElementById('lightbox-close');
  const overlay  = document.getElementById('lightbox-overlay');
  const numLabel = document.getElementById('lightbox-num');

  function open(index) {
    numLabel.textContent = String(index).padStart(2, '0');
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function close() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => open(item.dataset.index));
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(item.dataset.index); }
    });
  });

  closeBtn.addEventListener('click',   close);
  overlay.addEventListener('click',    close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) close();
  });
})();
