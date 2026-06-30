/* ── Custom Cursor ── */
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

/* ── Cursor Ring Expand on Hover ── */
document.querySelectorAll('a, button, .masonry-item, .logo-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    ring.style.width = '60px';
    ring.style.height = '60px';
    ring.style.borderColor = 'rgba(168,85,247,0.8)';
  });
  el.addEventListener('mouseleave', () => {
    ring.style.width = '36px';
    ring.style.height = '36px';
    ring.style.borderColor = 'rgba(124,58,237,0.5)';
  });
});

/* ── Mouse-Tracking Hero Glow ── */
const glow = document.getElementById('heroGlow');
const hero = document.getElementById('hero');

hero.addEventListener('mousemove', e => {
  const r = hero.getBoundingClientRect();
  glow.style.left = (e.clientX - r.left) + 'px';
  glow.style.top  = (e.clientY - r.top)  + 'px';
});

/* ── Sticky Nav on Scroll ── */
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

/* ── Scroll-Triggered Reveal ── */
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

/* ── Immediate Hero Reveal on Load ── */
document.querySelectorAll('.hero .reveal').forEach((el, i) => {
  setTimeout(() => el.classList.add('visible'), 200 + i * 150);
});

/* ── Contact Form Submit ── */
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target;
  btn.textContent = 'Message Sent ✓';
  btn.style.background = '#16a34a';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Send Message';
    btn.style.background = '';
    btn.disabled = false;
  }, 3500);
}
