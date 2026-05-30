// ============================
// NAVBAR SCROLL BEHAVIOR
// ============================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ============================
// HAMBURGER MENU
// ============================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// ============================
// SMOOTH ACTIVE NAV LINK
// ============================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = 'var(--accent-cyan)';
        }
      });
    }
  });
}, { rootMargin: '-40% 0px -40% 0px' });

sections.forEach(s => observer.observe(s));

// ============================
// SCROLL REVEAL ANIMATIONS
// ============================
const revealItems = document.querySelectorAll(
  '.problem-card, .feat-card, .resp-card, .biz-card, .impact-item, .rm-item, .team-card, .wf-step, .ai-node, .screenshot-card'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.dataset.delay || 0);
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealItems.forEach((item, i) => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(28px)';
  item.style.transition = 'opacity 0.55s cubic-bezier(0.4,0,0.2,1), transform 0.55s cubic-bezier(0.4,0,0.2,1)';
  if (!item.dataset.delay) {
    item.dataset.delay = (i % 6) * 80;
  }
  revealObserver.observe(item);
});

// ============================
// ARCH LAYER REVEAL
// ============================
const archLayers = document.querySelectorAll('.arch-layer');
const archObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'scale(1)';
      }, i * 120);
      archObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

archLayers.forEach(layer => {
  layer.style.opacity = '0';
  layer.style.transform = 'scale(0.97)';
  layer.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  archObserver.observe(layer);
});

// ============================
// ECG ANIMATION
// ============================
const ecgLine = document.querySelector('.ecg-line');
let ecgAnim;
function animateEcg() {
  ecgLine.style.backgroundPositionX = '0px';
  let pos = 0;
  ecgAnim = setInterval(() => {
    pos -= 3;
    ecgLine.style.backgroundPositionX = pos + 'px';
  }, 16);
}
animateEcg();

// ============================
// COUNTER ANIMATION (stats)
// ============================
function animateCount(el, end, suffix = '') {
  const start = 0;
  const duration = 1600;
  const startTime = performance.now();
  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * end);
    el.textContent = current.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNums = entry.target.querySelectorAll('.stat-num');
      statNums.forEach(el => {
        const text = el.textContent;
        if (text.includes('170M')) animateCount(el, 170, 'M+');
        else if (text === '5') animateCount(el, 5, '');
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);

// ============================
// WORKFLOW STEP HIGHLIGHT
// ============================
const wfSteps = document.querySelectorAll('.wf-step');
let currentStep = 0;
function cycleSteps() {
  wfSteps.forEach((s, i) => {
    s.querySelector('.wf-icon').style.borderColor = '';
    s.querySelector('.wf-icon').style.boxShadow = '';
    s.querySelector('.wf-icon').style.background = '';
  });
  if (wfSteps[currentStep]) {
    const icon = wfSteps[currentStep].querySelector('.wf-icon');
    icon.style.borderColor = 'var(--accent-cyan)';
    icon.style.boxShadow = '0 0 20px rgba(0,212,212,0.3)';
    icon.style.background = 'rgba(0,212,212,0.08)';
  }
  currentStep = (currentStep + 1) % wfSteps.length;
}

const wfObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setInterval(cycleSteps, 1200);
      wfObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const wfSection = document.querySelector('.workflow');
if (wfSection) wfObserver.observe(wfSection);

// ============================
// ROADMAP YEAR COLOR
// ============================
const rmYears = document.querySelectorAll('.rm-year');
const rmColors = ['#00d4d4', '#1a6ff4', '#7c3aed'];
rmYears.forEach((y, i) => {
  y.style.color = rmColors[i] || 'var(--text-muted)';
  y.style.textShadow = `0 0 20px ${rmColors[i]}44`;
});
